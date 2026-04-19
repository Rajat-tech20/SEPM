document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu on link click
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Scroll Navbar effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Set Active Link based on current URL path
    const currentPath = window.location.pathname.split('/').pop();
    links.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Match path or handle root/index
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Global Image Modal (Zoom capability)
    const zoomableImages = document.querySelectorAll('img.zoomable');
    if (zoomableImages.length > 0) {
        // Create modal container
        const modal = document.createElement('div');
        modal.className = 'image-modal-overlay';
        
        const modalImg = document.createElement('img');
        modalImg.className = 'image-modal-content';
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);

        // Open modal on click
        zoomableImages.forEach(img => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', (e) => {
                e.preventDefault();
                modalImg.src = img.src;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // stop page scrolling
            });
        });

        // Close modal on click
        modal.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});
