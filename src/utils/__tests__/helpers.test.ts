import { describe, it, expect } from 'vitest';
import { formatDate, getCurrentYear, isValidEmail, truncateText } from '../helpers';

describe('formatDate', () => {
  it('should format a date correctly', () => {
    const date = new Date('2024-01-15');
    const formatted = formatDate(date);
    expect(formatted).toMatch(/January 15, 2024/);
  });
});

describe('getCurrentYear', () => {
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(currentYear);
  });

  it('should return a number', () => {
    expect(typeof getCurrentYear()).toBe('number');
  });
});

describe('isValidEmail', () => {
  it('should validate correct email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
    expect(isValidEmail('user+tag@example.com')).toBe(true);
  });

  it('should reject invalid email addresses', () => {
    expect(isValidEmail('invalid')).toBe(false);
    expect(isValidEmail('invalid@')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
    expect(isValidEmail('test@')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });
});

describe('truncateText', () => {
  it('should not truncate text shorter than maxLength', () => {
    const text = 'Short text';
    expect(truncateText(text, 20)).toBe('Short text');
  });

  it('should truncate text longer than maxLength', () => {
    const text = 'This is a very long text that needs to be truncated';
    const result = truncateText(text, 20);
    expect(result).toBe('This is a very long ...');
    expect(result.length).toBe(23); // 20 + '...'
  });

  it('should handle empty strings', () => {
    expect(truncateText('', 10)).toBe('');
  });

  it('should handle exact length match', () => {
    const text = 'Exactly twenty chars';
    expect(truncateText(text, 20)).toBe('Exactly twenty chars');
  });
});
