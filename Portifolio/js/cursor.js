/**
 * Cursor JavaScript file
 * Handles custom cursor functionality
 */

function initCustomCursor() {
  const cursor = document.querySelector('.cursor');
  
  // Check if cursor element exists and if the device supports hover
  // This prevents issues on touch devices
  if (!cursor || window.matchMedia('(hover: none)').matches) return;
  
  // Update cursor position on mouse move
  document.addEventListener('mousemove', e => {
    // Use requestAnimationFrame for smooth movement
    requestAnimationFrame(() => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  });
  
  // Add classes for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .skill-item, .project-card, .social-link, .theme-toggle, .filter-btn, input, textarea');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
    });
    
    element.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
    });
  });
  
  // Add additional effect for clickable elements
  const clickableElements = document.querySelectorAll('a, button, .theme-toggle, .filter-btn');
  
  clickableElements.forEach(element => {
    element.addEventListener('mousedown', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.9)';
    });
    
    element.addEventListener('mouseup', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
  
  // Hide cursor when it leaves the window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });
  
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });
  
  // Ensure smooth transitions by preventing quick movements
  let lastX = 0;
  let lastY = 0;
  let isFirstMove = true;
  
  document.addEventListener('mousemove', e => {
    if (isFirstMove) {
      lastX = e.clientX;
      lastY = e.clientY;
      isFirstMove = false;
      return;
    }
    
    // Calculate distance moved
    const distance = Math.sqrt(
      Math.pow(e.clientX - lastX, 2) + 
      Math.pow(e.clientY - lastY, 2)
    );
    
    // If distance is large (like after browser focus change),
    // don't animate the transition
    if (distance > 100) {
      cursor.style.transition = 'none';
      requestAnimationFrame(() => {
        cursor.style.transition = 'transform 0.3s, width 0.3s, height 0.3s, background-color 0.3s';
      });
    }
    
    lastX = e.clientX;
    lastY = e.clientY;
  });
}