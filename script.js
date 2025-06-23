document.addEventListener('DOMContentLoaded', function() {
    
    // Function to load HTML components like header and footer
    const loadComponent = (selector, filePath) => {
        fetch(filePath)
            .then(response => response.ok ? response.text() : Promise.reject('File not found'))
            .then(data => {
                const element = document.querySelector(selector);
                if (element) {
                    element.innerHTML = data;
                }
                // After loading the header, re-initialize its scripts
                if (selector === '#header-placeholder') {
                    initializeHeaderScripts();
                }
            })
            .catch(error => console.error(`Error loading ${filePath}:`, error));
    };

    // Load header and footer into their placeholders
    loadComponent('#header-placeholder', 'header.html');
    loadComponent('#footer-placeholder', 'footer.html');

    // This function contains all the scripts that need to run AFTER the header is loaded
    const initializeHeaderScripts = () => {
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
            const isHomepage = !!document.getElementById('hero-section-background');
            
            const handleHeaderScroll = () => {
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

            if (isHomepage) {
                 header.classList.add('bg-transparent', 'text-white');
            } else {
                 header.classList.add('bg-brand-cream-menu/90', 'backdrop-blur-md', 'text-white', 'shadow-md');
            }

            window.addEventListener('scroll', handleHeaderScroll);
        }
    };
});
