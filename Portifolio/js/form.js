/**
 * Form JavaScript file
 * Handles contact form validation and submission
 */

function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate form
    if (validateForm(contactForm)) {
      // Simulate form submission
      simulateFormSubmission(contactForm);
    }
  });
}

/**
 * Validate form fields
 * @param {HTMLFormElement} form - The form to validate
 * @returns {boolean} - Whether the form is valid
 */
function validateForm(form) {
  let isValid = true;
  const nameInput = form.querySelector('#name');
  const emailInput = form.querySelector('#email');
  const subjectInput = form.querySelector('#subject');
  const messageInput = form.querySelector('#message');
  
  // Reset previous error messages
  const errorMessages = form.querySelectorAll('.error-message');
  errorMessages.forEach(error => error.remove());
  
  // Check name
  if (!nameInput.value.trim()) {
    showError(nameInput, 'Please enter your name');
    isValid = false;
  }
  
  // Check email
  if (!emailInput.value.trim()) {
    showError(emailInput, 'Please enter your email');
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    showError(emailInput, 'Please enter a valid email');
    isValid = false;
  }
  
  // Check subject
  if (!subjectInput.value.trim()) {
    showError(subjectInput, 'Please enter a subject');
    isValid = false;
  }
  
  // Check message
  if (!messageInput.value.trim()) {
    showError(messageInput, 'Please enter your message');
    isValid = false;
  }
  
  return isValid;
}

/**
 * Show error message for a form field
 * @param {HTMLElement} input - The input field
 * @param {string} message - The error message
 */
function showError(input, message) {
  const errorElement = document.createElement('div');
  errorElement.className = 'error-message';
  errorElement.textContent = message;
  errorElement.style.color = 'var(--color-error)';
  errorElement.style.fontSize = 'var(--font-size-sm)';
  errorElement.style.marginTop = '4px';
  
  input.parentNode.appendChild(errorElement);
  input.style.borderColor = 'var(--color-error)';
  
  // Remove error when input changes
  input.addEventListener('input', () => {
    errorElement.remove();
    input.style.borderColor = '';
  });
}

/**
 * Validate email format
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Simulate form submission
 * @param {HTMLFormElement} form - The form to submit
 */
function simulateFormSubmission(form) {
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  
  // Disable form and show loading state
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';
  
  // Simulate API call
  setTimeout(() => {
    // Show success message
    form.innerHTML = `
      <div style="text-align: center;">
        <div style="font-size: 48px; margin-bottom: 16px;">✅</div>
        <h3 style="margin-bottom: 8px; color: var(--color-success);">Message Sent Successfully!</h3>
        <p style="margin-bottom: 24px;">Thank you for reaching out. I'll get back to you soon.</p>
        <button id="resetForm" class="btn btn-primary">Send Another Message</button>
      </div>
    `;
    
    // Add event listener to reset form
    document.getElementById('resetForm').addEventListener('click', () => {
      window.location.reload();
    });
  }, 2000);
}