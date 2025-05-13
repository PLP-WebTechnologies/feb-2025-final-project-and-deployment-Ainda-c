/**
 * Animations JavaScript file
 * Handles all animations and scroll effects
 */

function initAnimations() {
  // Animate elements when they enter the viewport
  animateOnScroll();
  
  // Initialize hero animations immediately
  animateHero();
}

/**
 * Animate elements when they enter the viewport
 */
function animateOnScroll() {
  const animatedElements = document.querySelectorAll('.animate-in');
  
  // Create an observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        // Unobserve after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // Trigger when at least 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Trigger a bit before the element enters the viewport
  });
  
  // Observe all elements with the animate-in class
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

/**
 * Animate hero section elements on page load
 */
function animateHero() {
  const heroElements = document.querySelectorAll('#hero .animate-in');
  
  // Add appear class with a slight delay for each element
  heroElements.forEach(element => {
    element.classList.add('appear');
  });
}

/**
 * Custom cursor animation
 */
function initCustomCursor() {
  const cursor = document.querySelector('.cursor');
  
  if (!cursor) return;
  
  // Update cursor position
  document.addEventListener('mousemove', e => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
  
  // Add active class when hovering over interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .skill-item, .project-card, .social-link, .theme-toggle, .filter-btn');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
    });
    
    element.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
    });
  });
  
  // Hide cursor when mouse leaves the window
  document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
  });
  
  document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
  });
}