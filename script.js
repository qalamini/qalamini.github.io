// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const progressBar = document.getElementById('progressBar');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Progress Bar
function updateProgressBar() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateProgressBar);

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Feature cards animation
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Fade in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Add fade-in class to elements that should animate
    const animateElements = [
        '.about-text',
        '.about-visual',
        '.download-content'
    ];

    animateElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.classList.add('fade-in');
            observer.observe(element);
        });
    });
});

// Hijaiyah Letters Animation
const hijaiyahLetters = ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'];

function rotateHijaiyahLetters() {
    const letterElements = document.querySelectorAll('.hijaiyah-letter');
    letterElements.forEach((element, index) => {
        setInterval(() => {
            const randomLetter = hijaiyahLetters[Math.floor(Math.random() * hijaiyahLetters.length)];
            element.textContent = randomLetter;
            element.setAttribute('data-letter', randomLetter);
        }, 3000 + (index * 500)); // Stagger the rotation
    });
}

// Initialize hijaiyah rotation when page loads
document.addEventListener('DOMContentLoaded', rotateHijaiyahLetters);

// Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const phoneMockup = document.querySelector('.phone-mockup');
    
    if (heroContent && phoneMockup) {
        const rate = scrolled * -0.5;
        phoneMockup.style.transform = `translateY(${rate}px)`;
    }
});

// Download Button Analytics (placeholder for future analytics integration)
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const platform = btn.classList.contains('android') ? 'Android' : 'iOS';
        console.log(`Download clicked: ${platform}`);
        
        // Future: Add analytics tracking here
        // gtag('event', 'download_click', {
        //     'platform': platform,
        //     'app_name': 'Qalamini'
        // });
    });
});

// Keyboard Navigation Enhancement
document.addEventListener('keydown', (e) => {
    // Allow closing mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Performance: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    updateProgressBar();
    updateActiveNavLink();
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Preload critical resources
function preloadCriticalResources() {
    // Preload Google Fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    fontLink.as = 'style';
    fontLink.onload = function() {
        this.onload = null;
        this.rel = 'stylesheet';
    };
    document.head.appendChild(fontLink);
}

// Initialize preloading when DOM is ready
document.addEventListener('DOMContentLoaded', preloadCriticalResources);

// Handle reduced motion preferences
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function handleReducedMotion() {
    if (prefersReducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        document.documentElement.style.setProperty('--transition', 'none');
        
        // Stop hijaiyah letter rotation
        const letterElements = document.querySelectorAll('.hijaiyah-letter');
        letterElements.forEach(element => {
            element.style.animation = 'none';
        });
    }
}

prefersReducedMotion.addEventListener('change', handleReducedMotion);
handleReducedMotion(); // Check on load

// Error handling for external resources
window.addEventListener('error', (e) => {
    console.error('Resource loading error:', e.target);
    
    // Handle font loading fallback
    if (e.target.tagName === 'LINK' && e.target.href.includes('fonts.googleapis.com')) {
        console.warn('Google Fonts failed to load, using system fonts');
        document.body.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    }
});

// Service Worker registration for PWA (future enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Future: Register service worker for offline functionality
        // navigator.serviceWorker.register('/sw.js');
    });
}

// Add loading animation removal
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Remove any loading overlays if they exist
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.remove();
        }, 300);
    }
});

// Touch event handling for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleTouch();
});

function handleTouch() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    // If mobile menu is open and user swipes up significantly, close it
    if (navMenu.classList.contains('active') && diff > swipeThreshold) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// Initialize all animations and interactions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Qalamini website loaded successfully!');
    
    // Add a slight delay to ensure all elements are rendered
    setTimeout(() => {
        // Trigger initial animations
        const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description');
        heroElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
            element.classList.add('fade-in', 'animate');
        });
    }, 100);
});

// Utility function for smooth animations
function animateElement(element, className, delay = 0) {
    setTimeout(() => {
        element.classList.add(className);
    }, delay);
}

// Export functions for potential testing (if using modules in future)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateProgressBar,
        updateActiveNavLink,
        rotateHijaiyahLetters
    };
}