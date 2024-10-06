// Toggle Search Bar
function toggleSearch() {
    var searchBar = document.getElementById("search-bar");
    searchBar.classList.toggle('active');
}

// Toggle Mobile Menu
const menuBtn = document.querySelector('.menu-btn');
const navlinks = document.querySelector('.nav-links');
const navbar = document.querySelector('#navbar');

menuBtn.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-menu');
    
    // Update aria-expanded attribute for accessibility
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuBtn.setAttribute('aria-expanded', !expanded);
});

// Change Navbar Background on Scroll
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        navbar.style.backgroundColor = '#4138388f';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

// Get elements from the DOM
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;

// Function to update the carousel based on current image size
function updateCarousel() {
    const size = images[0].clientWidth + 20; // Includes margin between images
    carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Event listener for previous button
prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;  // Prevent going past the first image
    counter--;
    updateCarousel();  // Update position
});

// Event listener for next button
nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return;  // Prevent going past the last image
    counter++;
    updateCarousel();  // Update position
});

// Update carousel on window resize
window.addEventListener('resize', updateCarousel);

// Initial carousel setup
updateCarousel();
