
// Get DOM elements
const header = document.querySelector('.header');
const audioToggle = document.getElementById('audio-toggle');
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const backToTop = document.getElementById('back-to-top');
const currentYear = document.getElementById('current-year');

// Set current year in footer
currentYear.textContent = new Date().getFullYear();

// Audio state
let audioEnabled = false;

// Scroll functions
window.addEventListener('scroll', () => {
  // Toggle header background on scroll
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Audio toggle
audioToggle.addEventListener('click', () => {
  audioEnabled = !audioEnabled;
  
  if (audioEnabled) {
    audioToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
    // Audio implementation would go here
  } else {
    audioToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
    // Audio implementation would go here
  }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
});

menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
});

// Close mobile menu when clicking a nav item
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Back to top button
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Download button functionality
const downloadButtons = document.querySelectorAll('.btn-primary, .btn-outline');
downloadButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Get the button text to determine which resource to download
    const buttonText = this.textContent.trim();
    
    // This is where you would implement actual download functionality
    console.log(`Download requested: ${buttonText}`);
    
    // For demo purposes, show an alert
    alert(`Download initiated for: ${buttonText}`);
  });
});

// Responsive image handling
function loadResponsiveImages() {
  const images = document.querySelectorAll('img[data-src]');
  images.forEach(img => {
    img.src = img.getAttribute('data-src');
    img.onload = () => img.removeAttribute('data-src');
  });
}

// Execute on page load
document.addEventListener('DOMContentLoaded', () => {
  loadResponsiveImages();
});

// Handle window resize events
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Any resize-specific functions can go here
  }, 250);
});
