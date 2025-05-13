/**
 * Theme JavaScript file
 * Handles dark/light mode functionality
 */

function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  
  // Check user's preferred color scheme
  checkPreferredTheme();
  
  // Add click event to theme toggle
  themeToggle.addEventListener('click', () => {
    // Toggle dark mode class on body
    document.body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}

/**
 * Check user's preferred color scheme
 */
function checkPreferredTheme() {
  // Check if theme preference is saved in localStorage
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    // Apply dark mode if saved
    document.body.classList.add('dark-mode');
  } else if (savedTheme === 'light') {
    // Apply light mode if saved
    document.body.classList.remove('dark-mode');
  } else {
    // Check user's system preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }
}