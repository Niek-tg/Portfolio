/**
 * Get the user's preferred color scheme from the browser
 */
export function getPreferredTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') {
    return 'light';
  }
  
  // Check localStorage first
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  
  // Fall back to system preference
  const prefersDarkQuery = window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;

  if (prefersDarkQuery && prefersDarkQuery.matches) {
    return 'dark';
  }
  
  return 'light';
}

/**
 * Set the theme on the document
 */
export function setTheme(theme: 'light' | 'dark'): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme(): 'light' | 'dark' {
  const currentTheme = getPreferredTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  return newTheme;
}
