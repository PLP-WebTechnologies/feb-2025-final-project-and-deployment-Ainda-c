/**
 * Navigation JavaScript file
 * Handles navigation functionality, scrolling, and header effects
 */

function initNavigation() {
  // Setup smooth scrolling for navigation links
  setupSmoothScroll();
  
  // Update active navigation links on scroll
  updateActiveNavOnScroll();
  
  // Change header background on scroll
  setupHeaderScroll();
  
  // Setup mobile menu toggle
  setupMobileMenu();
}

/**
 * Setup smooth scrolling for navigation links
 */
function setupSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, #scrollToTop');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the target section
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      // If mobile menu is open, close it
      if (document.body.classList.contains('menu-open')) {
        document.body.classList.remove('menu-open');
      }
      
      // Scroll to the section
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Add some offset to account for the fixed header
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavOnScroll() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * Change header background on scroll
 */
function setupHeaderScroll() {
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Check scroll position on page load
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  }
}

/**
 * Setup mobile menu toggle
 */
function setupMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  // Toggle menu when hamburger is clicked
  menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });
  
  // Close menu when a link is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (document.body.classList.contains('menu-open') && 
        !mobileMenu.contains(e.target) && 
        !menuToggle.contains(e.target)) {
      document.body.classList.remove('menu-open');
    }
  });
}