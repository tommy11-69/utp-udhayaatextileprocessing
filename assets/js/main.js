/**
 * main.js - Udhayaa Textile Processing
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');

    function openMenu() {
        mobileMenu.classList.remove('hidden');
        // Small delay to allow display block to apply before transition
        setTimeout(() => {
            mobileMenu.classList.remove('opacity-0');
            mobileMenuDrawer.classList.remove('translate-x-full');
        }, 10);
    }

    function closeMenu() {
        mobileMenu.classList.add('opacity-0');
        mobileMenuDrawer.classList.add('translate-x-full');
        // Wait for transition to finish before hiding
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    }

    if (mobileMenuBtn && closeMenuBtn && mobileMenu && mobileMenuDrawer) {
        mobileMenuBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        
        // Close menu when clicking on the backdrop
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                closeMenu();
            }
        });
    }

    // 2. Active Nav Link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Simple match: if it's not root, check includes. If it is root, check exact match.
        if (linkPath === '/' && (currentPath === '/' || currentPath === '/index.html')) {
            link.classList.add('text-utp-green', 'font-bold');
        } else if (linkPath !== '/' && currentPath.includes(linkPath.replace('.html', ''))) {
            link.classList.add('text-utp-green', 'font-bold');
        }
    });

    // 3. Smooth Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- Animations & UX ---
    
    // 1. Scroll-triggered Reveal Animations
    // Select elements to reveal
    const revealSelectors = 'section h2, section h3, section p, .card, .btn, .grid > div';
    const elementsToReveal = document.querySelectorAll(revealSelectors);
    
    elementsToReveal.forEach((el, index) => {
        // Skip elements inside header or footer or hero section (hero we might want visible immediately)
        if (!el.closest('header') && !el.closest('footer') && !el.closest('.hero-section')) {
            // Also avoid adding to small things if needed, but this is fine
            el.classList.add('reveal-item');
        }
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-item').forEach(el => {
        revealObserver.observe(el);
    });

    // 2. Dynamic Sticky Header
    // Note: Because header might be inside a custom element, we wrap it in a setTimeout
    setTimeout(() => {
        const header = document.querySelector('header');
        if (header) {
            header.style.transition = 'all 0.3s ease';
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    header.classList.add('header-scrolled');
                    header.classList.remove('border-gray-200'); // remove harsh border
                } else {
                    header.classList.remove('header-scrolled');
                    header.classList.add('border-gray-200');
                }
            });
            // Trigger once on load
            window.dispatchEvent(new Event('scroll'));
        }
    }, 100);
});
