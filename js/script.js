/*
    Kapten Jack Website JavaScript
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile menu toggle functionality ---
    const menuToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // This line adds or removes the 'active' class
            navMenu.classList.toggle('active');
        });
    }

    // --- NEW: Asterisk-to-Bold Converter ---
    
    /**
     * This function finds all text wrapped in single asterisks
     * (e.g., *this text*) inside the main .page-content div
     * and replaces it with <strong>this text</strong>.
     */
    function convertAsterisksToBold() {
        // We target only the .page-content div to avoid
        // accidentally breaking the nav, header, or other scripts.
        const contentArea = document.querySelector('.page-content');

        if (contentArea) {
            // This is a Regular Expression (regex) that finds
            // text between two asterisks.
            //    \* - a literal asterisk
            //    ([^*]+)  - a "capturing group" that matches one or more
            //               characters that are NOT an asterisk
            //    \* - another literal asterisk
            //    /g       - the "global" flag to replace all matches, not just the first
            const regex = /\*([^*]+)\*/g;

            // We replace the matched pattern with <strong></strong>
            // The "$1" inside refers to the text inside the capturing group.
            const replacement = '<strong>$1</strong>';

            // Find the HTML of the content area and replace it
            contentArea.innerHTML = contentArea.innerHTML.replace(regex, replacement);
        }
    }

    // Run the new function after the page loads
    convertAsterisksToBold();

    // --- End of new rule ---

    console.log("Kapten Jack website loaded.");
});
