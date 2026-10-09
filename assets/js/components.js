class UTPHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<!-- SECTION: Header -->
    <header class="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
                <a href="/" class="flex items-center">
                    <img src="assets/images/logo/UTP MONOGRAM.png" alt="UTP Monogram" class="h-10 w-auto object-contain mix-blend-multiply mr-3">
                    <div class="flex flex-col items-center justify-center">
                        <span class="text-2xl font-extrabold font-heading text-utp-green tracking-tight leading-none uppercase">UDHAYAA</span>
                        <span class="text-utp-charcoal text-[10px] sm:text-xs font-medium font-heading mt-1 leading-none tracking-widest">Textile Processing</span>
                    </div>
                </a>
            </div>
            
            <!-- Desktop Nav -->
            <nav class="hidden md:flex space-x-8">
                <a href="/" class="text-link text-sm font-medium hover:text-utp-green nav-link">Home</a>
                <a href="/about.html" class="text-link text-sm font-medium hover:text-utp-green nav-link">About Us</a>
                <a href="/services.html" class="text-link text-sm font-medium hover:text-utp-green nav-link">Services</a>
                <a href="/quality.html" class="text-link text-sm font-medium hover:text-utp-green nav-link">Quality</a>
                <a href="/contact.html" class="text-link text-sm font-medium hover:text-utp-green nav-link">Contact Us</a>
            </nav>
            
            <!-- Desktop CTA -->
            <div class="hidden md:flex">
                <a href="/contact.html" class="btn btn-primary text-sm">Request a Quote</a>
            </div>
            
            <!-- Mobile Menu Button -->
            <div class="flex md:hidden">
                <button id="mobile-menu-btn" aria-label="Open Menu" class="text-utp-charcoal hover:text-utp-green focus:outline-none p-2">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
        
        <!-- Mobile Menu Drawer (Hidden by default) -->
        <div id="mobile-menu" class="hidden fixed inset-0 z-40 bg-utp-charcoal/50 flex justify-end transition-opacity duration-300 opacity-0">
            <div id="mobile-menu-drawer" class="bg-white w-[280px] h-full shadow-xl flex flex-col transform translate-x-full transition-transform duration-300">
                <div class="p-4 flex justify-end border-b border-gray-100">
                    <button id="close-menu-btn" aria-label="Close Menu" class="text-utp-charcoal hover:text-utp-green p-2 focus:outline-none">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav class="flex-1 px-4 py-6 space-y-4 flex flex-col">
                    <a href="/" class="text-lg font-medium text-utp-charcoal hover:text-utp-green py-2 nav-link">Home</a>
                    <a href="/about.html" class="text-lg font-medium text-utp-charcoal hover:text-utp-green py-2 nav-link">About Us</a>
                    <a href="/services.html" class="text-lg font-medium text-utp-charcoal hover:text-utp-green py-2 nav-link">Services</a>
                    <a href="/applications.html" class="text-lg font-medium text-utp-charcoal hover:text-utp-green py-2 nav-link">Applications</a>
                    <a href="/quality.html" class="text-lg font-medium text-utp-charcoal hover:text-utp-green py-2 nav-link">Quality</a>
                    <a href="/contact.html" class="text-lg font-medium text-utp-charcoal hover:text-utp-green py-2 nav-link">Contact Us</a>
                    <div class="pt-6 mt-6 border-t border-gray-100">
                        <a href="/contact.html" class="btn btn-primary w-full text-center">Request a Quote</a>
                    </div>
                </nav>
            </div>
        </div>
    </header>`;
    }
}
customElements.define('utp-header', UTPHeader);

class UTPFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<!-- SECTION: Footer -->
    <footer class="bg-utp-green text-white pt-16 pb-8">
        <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <!-- Brand Column -->
                <div>
                    <a href="/" class="mb-4 inline-block">
                        <img src="assets/images/logo/Udhayaa-Textiles-Processing-logo-secondary.png" alt="Udhayaa Textile Processing" class="h-40 md:h-25 w-auto object-contain">
                    </a>
                    <p class="text-gray-300 text-sm mb-6 max-w-xs">Experienced Textile Processing. Dependable Fabric Supply. Serving exporters for over 30 years.</p>
                    <p class="text-sm text-gray-300">GSTIN: 33AACFU5772H1Z2</p>
                </div>
                
                <!-- Quick Links Column -->
                <div>
                    <h3 class="text-utp-gold font-semibold mb-4">Quick Links</h3>
                    <ul class="space-y-3">
                        <li><a href="/" class="text-gray-300 hover:text-white transition-colors text-sm">Home</a></li>
                        <li><a href="/about.html" class="text-gray-300 hover:text-white transition-colors text-sm">About Us</a></li>
                        <li><a href="/services.html" class="text-gray-300 hover:text-white transition-colors text-sm">Services</a></li>
                        <li><a href="/applications.html" class="text-gray-300 hover:text-white transition-colors text-sm">Applications</a></li>
                        <li><a href="/quality.html" class="text-gray-300 hover:text-white transition-colors text-sm">Quality</a></li>
                    </ul>
                </div>
                
                <!-- Services Column -->
                <div>
                    <h3 class="text-utp-gold font-semibold mb-4">Our Services</h3>
                    <ul class="space-y-3">
                        <li class="text-gray-300 text-sm">Solid-Dyed Fabrics</li>
                        <li class="text-gray-300 text-sm">Printed Fabrics</li>
                        <li class="text-gray-300 text-sm">Finished Fabric Processing</li>
                    </ul>
                </div>
                
                <!-- Contact Column -->
                <div>
                    <h3 class="text-utp-gold font-semibold mb-4">Contact Details</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <svg class="h-5 w-5 text-utp-gold mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span class="text-gray-300 text-sm">63/A Senthur Nagar<br>Ellapalayam Road Periyasemur<br>Erode-638004</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="h-5 w-5 text-utp-gold mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href="tel:+919842756455" class="text-gray-300 hover:text-white transition-colors text-sm">+91 9842756455</a>
                        </li>
                        <li class="flex items-center">
                            <svg class="h-5 w-5 text-utp-gold mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:udhayatexstyles@gmail.com" class="text-gray-300 hover:text-white transition-colors text-sm">udhayatexstyles@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-[#2a564f] pt-8 flex flex-col md:flex-row justify-between items-center">
                <a  href="https://zablox-tech.pages.dev" target = "_blank" class="text-gray-400 text-sm mb-4 md:mb-0">© 2026 Zablox Technologies. All rights reserved.</a>
                <div class="flex space-x-6">
                    <a href="/privacy-policy.html" class="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                    <a href="/terms-and-conditions.html" class="text-gray-400 hover:text-white text-sm">Terms & Conditions</a>
                </div>
            </div>
        </div>
    </footer>`;
    }
}
customElements.define('utp-footer', UTPFooter);
