document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 1. Mobile Menu Toggle --- */
    const menuToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // This line adds or removes the 'active' class
            navMenu.classList.toggle('active');
        });
    }

    /* --- 2. Asterisk-to-Bold Converter --- */
    
    /**
     * This function finds all text wrapped in double asterisks
     * (e.g., **this text**) inside the main .page-content div
     * and replaces it with <strong>this text</strong>.
     */
    function convertAsterisksToBold() {
        // We target only the .page-content div to avoid
        // accidentally breaking the nav, header, or other scripts.
        const contentArea = document.querySelector('.page-content');
        if (!contentArea) return;

        // This is the corrected regex. 
        // It looks for text wrapped in **double asterisks**.
        const regex = /\*{2}([^*]+)\*{2}/g;
        
        // Replaces the match with <strong> (bold) tags.
        const replacement = '<strong>$1</strong>';

        // Find the HTML of the content area and replace it
        contentArea.innerHTML = contentArea.innerHTML.replace(regex, replacement);
    }

    // Run the function after the page loads
    convertAsterisksToBold();

    console.log("Kapten Jack website loaded and content updated via script.js");
});
