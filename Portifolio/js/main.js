/**
 * Main JavaScript file for portfolio website
 * Contains core functionality and initializations
 */

// Initialize the site when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Portfolio initialized');
  
  // Initialize all components
  initAnimations();
  initNavigation();
  initProjects();
  initThemeToggle();
  initContactForm();
  initCustomCursor();
  initSkillBars();
});

/**
 * Initialize skill bars animation
 * Animate progress bars based on data-level attribute
 */
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach(bar => {
    const level = bar.getAttribute('data-level');
    bar.style.setProperty('--progress', `${level}%`);
    
    // Use IntersectionObserver to trigger animation when visible
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          bar.style.animation = 'progressBar 1.5s ease-out forwards';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(bar);
  });
}

/**
 * Add icons to elements
 * Since we're not using any icon library, this creates simple icon placeholders
 */
function createSimpleIcons() {
  // Create simple placeholders for icons
  document.querySelectorAll('.icon-link').forEach(icon => {
    icon.textContent = '🔗 ';
  });
  
  document.querySelectorAll('.icon-github').forEach(icon => {
    icon.textContent = '👨‍💻 ';
  });
  
  document.querySelectorAll('.icon-location').forEach(icon => {
    icon.textContent = '📍 ';
  });
  
  document.querySelectorAll('.icon-mail').forEach(icon => {
    icon.textContent = '📧 ';
  });
  
  document.querySelectorAll('.icon-phone').forEach(icon => {
    icon.textContent = '📱 ';
  });
  
  document.querySelectorAll('.icon-linkedin').forEach(icon => {
    icon.textContent = 'in ';
  });
  
  document.querySelectorAll('.icon-twitter').forEach(icon => {
    icon.textContent = '𝕏 ';
  });
  
  document.querySelectorAll('.icon-dribbble').forEach(icon => {
    icon.textContent = '🏀 ';
  });
}

// Run simple icons right away
createSimpleIcons();