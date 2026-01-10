// Navigation functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList. remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList. add('scrolled');
    } else {
        navbar.classList. remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this. getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior:  'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ accordion functionality - FIXED
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Check if this item is already active
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });
        
        // If it wasn't active, open it
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Show success message (you can integrate with a real backend here)
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}


// Intersection Observer for scroll animations
const observerOptions = {
    threshold:  0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.feature-card, .contact-card, .faq-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style. opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Feature card hover effects
const featureCards = document. querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style. transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Dynamic copyright year
const footerBottomText = document.querySelector('.footer-bottom p');
if (footerBottomText) {
    const currentYear = new Date().getFullYear();
    footerBottomText.innerHTML = `&copy; ${currentYear} QNow.  All rights reserved.  Made with ❤️ in Algeria 🇩🇿`;
}


// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('. nav-link');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) {
                hamburger.classList. remove('active');
                navMenu.classList. remove('active');
            }
        });
    });

    // Navbar scroll effect
    window. addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar. classList.add('scrolled');
        } else {
            navbar. classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // FAQ accordion functionality - COMPLETELY FIXED
    const faqItems = document.querySelectorAll('. faq-item');
    
    console.log('FAQ Items found:', faqItems.length); // Debug log
    
    faqItems. forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        console.log('FAQ Item', index, 'Question:', question, 'Answer:', answer); // Debug log
        
        if (question && answer) {
            question.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('FAQ clicked:', index); // Debug log
                
                // Check if this item is currently active
                const isActive = item. classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                // If the clicked item was not active, open it
                if (! isActive) {
                    item.classList.add('active');
                    console.log('FAQ opened:', index); // Debug log
                } else {
                    console.log('FAQ closed:', index); // Debug log
                }
            });
        }
    });

    // Contact form handling
    const contactForm = document. getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e. preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Show success message (you can integrate with a real backend here)
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }


    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin:  '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry. target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation (but NOT faq-items to avoid conflicts)
    const animateElements = document.querySelectorAll('.feature-card, .contact-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Feature card hover effects
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style. transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Dynamic copyright year
    const footerBottomText = document.querySelector('.footer-bottom p');
    if (footerBottomText) {
        const currentYear = new Date().getFullYear();
        footerBottomText.innerHTML = `&copy; ${currentYear} QNow. All rights reserved.  Made with ❤️ in Algeria 🇩🇿`;
    }

    // Console message
    console.log('%cQNow - Smart Queue Management System', 'color: #333333; font-size: 20px; font-weight: bold;');
    console.log('%cMade in Algeria 🇩🇿', 'color: #4ECDC4; font-size:  14px;');
    console.log('%cGitHub: https://github.com/AbderahmaneH/MobDevProject', 'color: #6C757D; font-size:  12px;');
    
});

// Add loading animation
window.addEventListener('load', () => {
    document.body. style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
// Console message
console.log('%cQNow - Smart Queue Management System', 'color: #333333; font-size: 20px; font-weight: bold;');
console.log('%cMade in Algeria 🇩🇿', 'color: #4ECDC4; font-size:  14px;');
console.log('%cGitHub: https://github.com/AbderahmaneH/MobDevProject', 'color:  #6C757D; font-size:  12px;');