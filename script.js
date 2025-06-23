// This script will run on all pages that include it.

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Change header background on scroll
    const header = document.getElementById('main-header');
    if (header) {
        // Check if the page is the homepage by looking for the hero background
        const isHomepage = document.getElementById('hero-section-background');
        
        // Function to handle header style
        const handleHeaderScroll = () => {
             // Only apply the transparent -> solid effect on the homepage
            if (isHomepage) {
                if (window.scrollY > 50) {
                    header.classList.remove('bg-transparent', 'text-white');
                    header.classList.add('bg-brand-cream-menu/90', 'backdrop-blur-md', 'text-white', 'shadow-md');
                } else {
                    header.classList.add('bg-transparent', 'text-white');
                    header.classList.remove('bg-brand-cream-menu/90', 'backdrop-blur-md', 'shadow-md');
                }
            }
        };

        // Set initial header style
        if (isHomepage) {
             header.classList.add('bg-transparent', 'text-white');
        } else {
             header.classList.add('bg-brand-cream-menu/90', 'backdrop-blur-md', 'text-white', 'shadow-md');
        }

        window.addEventListener('scroll', handleHeaderScroll);
    }
});
