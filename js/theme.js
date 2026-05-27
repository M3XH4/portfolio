/* Theme Management Module */

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle');
  const root = document.documentElement;
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
  
  // Retrieve saved theme or check user media preference
  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return mediaQuery.matches ? 'light' : 'dark';
  };

  // Apply theme to document
  const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
    updateToggleIcons(theme);
  };

  // Update theme toggle icons and label text so the current mode is explicit
  const updateToggleIcons = (theme) => {
    themeToggleBtns.forEach(btn => {
      btn.dataset.theme = theme;
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
      btn.setAttribute('aria-pressed', String(theme === 'dark'));

      let label = btn.querySelector('.theme-toggle-text');
      if (!label) {
        label = document.createElement('span');
        label.className = 'theme-toggle-text';
        btn.appendChild(label);
      }

      label.textContent = theme === 'dark' ? 'Dark' : 'Light';
    });
  };

  // Initial theme application
  const currentTheme = getPreferredTheme();
  setTheme(currentTheme);

  // Toggle click events
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeTheme = root.getAttribute('data-theme');
      const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  });

  // Listen for system theme preference changes
  mediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'light' : 'dark');
    }
  });
});
