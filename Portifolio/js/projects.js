/**
 * Projects JavaScript file
 * Handles project filtering and sorting functionality
 */

function initProjects() {
  // Setup project filtering
  setupProjectFilters();
}

/**
 * Setup project filtering
 */
function setupProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  // Add click event to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get filter value
      const filterValue = button.getAttribute('data-filter');
      
      // Filter projects
      filterProjects(filterValue, projectCards);
    });
  });
}

/**
 * Filter projects based on category
 * @param {string} filter - The category to filter by
 * @param {NodeList} projects - The project cards to filter
 */
function filterProjects(filter, projects) {
  // Create a container for the filtered grid
  const container = document.querySelector('.projects-grid');
  
  // Apply filtering
  projects.forEach(project => {
    // Hide all projects first
    project.classList.add('hide');
    
    // Remove the hide class based on filter
    if (filter === 'all' || project.getAttribute('data-category') === filter) {
      setTimeout(() => {
        project.classList.remove('hide');
      }, 300);
    }
  });
  
  // Apply animation to visible projects
  setTimeout(() => {
    document.querySelectorAll('.project-card:not(.hide)').forEach((project, index) => {
      project.style.animationDelay = `${index * 0.1}s`;
    });
  }, 350);
}