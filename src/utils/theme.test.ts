import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getPreferredTheme, setTheme, toggleTheme } from './theme';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    }
  };
})();

// Mock matchMedia
const matchMediaMock = (matches: boolean) => ({
  matches,
  media: '(prefers-color-scheme: dark)',
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  addListener: vi.fn(),
  removeListener: vi.fn(),
  dispatchEvent: vi.fn(),
});

describe('theme utilities', () => {
  beforeEach(() => {
    // Setup window mocks
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true
    });
    
    localStorageMock.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  describe('getPreferredTheme', () => {
    it('should return stored theme from localStorage', () => {
      localStorageMock.setItem('theme', 'dark');
      expect(getPreferredTheme()).toBe('dark');
    });

    it('should return light theme when stored', () => {
      localStorageMock.setItem('theme', 'light');
      expect(getPreferredTheme()).toBe('light');
    });

    it('should return system preference when no stored theme', () => {
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation(() => matchMediaMock(true))
      });
      expect(getPreferredTheme()).toBe('dark');
    });

    it('should default to light when no stored theme and no dark system preference', () => {
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation(() => matchMediaMock(false))
      });
      expect(getPreferredTheme()).toBe('light');
    });
  });

  describe('setTheme', () => {
    it('should set data-theme attribute on document', () => {
      setTheme('dark');
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });

    it('should store theme in localStorage', () => {
      setTheme('dark');
      expect(localStorageMock.getItem('theme')).toBe('dark');
    });

    it('should update to light theme', () => {
      setTheme('light');
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
      expect(localStorageMock.getItem('theme')).toBe('light');
    });
  });

  describe('toggleTheme', () => {
    it('should toggle from light to dark', () => {
      localStorageMock.setItem('theme', 'light');
      const newTheme = toggleTheme();
      expect(newTheme).toBe('dark');
      expect(localStorageMock.getItem('theme')).toBe('dark');
    });

    it('should toggle from dark to light', () => {
      localStorageMock.setItem('theme', 'dark');
      const newTheme = toggleTheme();
      expect(newTheme).toBe('light');
      expect(localStorageMock.getItem('theme')).toBe('light');
    });
  });
});
