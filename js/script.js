/*
    Kapten Jack Website JavaScript
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // This line adds or removes the 'active' class
            navMenu.classList.toggle('active');
        });
    }

    console.log("Kapten Jack website loaded.");
});
