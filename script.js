// Qalamini Website Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for navigation links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    function updateNavbar() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(47, 82, 73, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(47, 82, 73, 0.1)';
        }
        
        lastScrollY = currentScrollY;
    }
    
    window.addEventListener('scroll', updateNavbar);

    // Animate elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards for animation
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Download button click tracking and feedback
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add visual feedback
            this.style.transform = 'translateY(-5px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1)';
            }, 150);

            // Track which platform was clicked
            const platform = this.classList.contains('android') ? 'Android' : 'iOS';
            console.log(`Download clicked for: ${platform}`);
            
            // Show a brief success message
            showDownloadMessage(platform);
        });
    });

    // Show download message
    function showDownloadMessage(platform) {
        // Create message element
        const message = document.createElement('div');
        message.textContent = `Mengunduh Qalamini untuk ${platform}...`;
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #2F5249;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            z-index: 10000;
            font-weight: 500;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(message);
        
        // Animate in
        setTimeout(() => {
            message.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            message.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(message);
            }, 300);
        }, 3000);
    }

    // Hero buttons interaction
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Phone mockup interaction
    const phoneMockup = document.querySelector('.phone-mockup');
    if (phoneMockup) {
        phoneMockup.addEventListener('mouseenter', function() {
            this.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.05)';
        });
        
        phoneMockup.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateY(-5deg) scale(1)';
        });
    }

    // Animate hijaiyah letter in phone mockup
    const hijaiyahLetters = ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر'];
    const letterElement = document.querySelector('.hijaiyah-letter');
    let currentLetterIndex = 0;

    if (letterElement) {
        setInterval(() => {
            letterElement.style.opacity = '0';
            letterElement.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                currentLetterIndex = (currentLetterIndex + 1) % hijaiyahLetters.length;
                letterElement.textContent = hijaiyahLetters[currentLetterIndex];
                letterElement.style.opacity = '1';
                letterElement.style.transform = 'scale(1)';
            }, 300);
        }, 3000);
    }

    // Add parallax effect to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }

    // Add floating animation to feature icons
    const featureIcons = document.querySelectorAll('.feature-icon');
    featureIcons.forEach((icon, index) => {
        icon.style.animation = `float 3s ease-in-out infinite ${index * 0.5}s`;
    });

    // Add CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);

    // Preload images and optimize performance
    function preloadImages() {
        const imageUrls = [
            // Add any image URLs that need preloading
        ];
        
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }
    
    preloadImages();

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Add focus management for accessibility
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #97B067';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
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

    // Apply debouncing to scroll-based functions
    const debouncedNavbarUpdate = debounce(updateNavbar, 10);
    window.removeEventListener('scroll', updateNavbar);
    window.addEventListener('scroll', debouncedNavbarUpdate);

    console.log('Qalamini website loaded successfully! 🎉');
});