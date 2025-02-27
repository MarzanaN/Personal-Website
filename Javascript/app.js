// Select all control buttons
const buttons = document.querySelectorAll('.control');

// Function to scroll with offset
function scrollToSection(section) {
    if (section) {
        const headerOffset = document.querySelector('.control-bar')?.offsetHeight || 50; // Adjust based on your navbar height
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY - headerOffset;

        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    }
}

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove 'active-btn' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active-btn'));

        // Add 'active-btn' to the clicked button
        this.classList.add('active-btn');

        // Get the corresponding section ID
        const sectionId = this.dataset.id;
        const activeSection = document.getElementById(sectionId);

        // Scroll smoothly with offset
        scrollToSection(activeSection);
    });
});
