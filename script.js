// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-text');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial animation check
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// // Form submission
// const contactForm = document.querySelector('.contact-form');
// if (contactForm) {
//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
        
//         // Get form data
//         const formData = new FormData(contactForm);
//         const data = Object.fromEntries(formData);
        
//         // Here you would typically send the data to a server
//         console.log('Form submitted:', data);
        
//         // Show success message
//         alert('Thank you for your message! I will get back to you soon.');
//         contactForm.reset();
//     });
// }

// Add animation delay to elements
document.querySelectorAll('.animate-text').forEach((element, index) => {
    element.style.animationDelay = `${index * 0.2}s`;
}); 
 

        document.addEventListener('DOMContentLoaded', () => {
            const bars = document.querySelectorAll('.progress-bar-fill');

            const animateBars = () => {
                bars.forEach(bar => {
                    const val = bar.dataset.value;
                    bar.style.width = val + '%';
                });
            };

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateBars();
                        observer.disconnect(); // only animate once
                    }
                });
            }, { threshold: 0.5 });

            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                observer.observe(aboutSection);
            }
        });