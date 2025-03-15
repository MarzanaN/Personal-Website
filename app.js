// Select all control buttons
const buttons = document.querySelectorAll('.control');

// Function to scroll with offset
function scrollToSection(section) {
    if (section) {
        const headerOffset = document.querySelector('.control-bar')?.offsetHeight || 0; // Adjust based on your navbar height
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


const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});

document.querySelectorAll(".control").forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
    });
});

document.querySelectorAll(".control").forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
        
        // Get the corresponding data-id and navigate to the correct page
        const pageId = item.getAttribute("data-id");
        window.location.href = `#${pageId}`; // Change this line to match your URL structure
    });
});


// Initialize EmailJS with your User ID (if required)
emailjs.init("zEO3TeHlk3MP3fATI");  // Replace with your actual User ID

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    const formData = new FormData(this);  // Capture form data

    // Create an object with the form data to send to EmailJS
    const data = {
        user_name: formData.get('user_name'),
        user_email: formData.get('user_email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    // Send the form data using EmailJS
    emailjs.send("service_u87699f", "template_d7sdyei", data)  // Send the actual data here
        .then(function(response) {
            console.log("Success:", response);  // Log the response to verify success
            alert("Message sent successfully!");
        })
        .catch(function(error) {
            console.error("Error:", error);  // Log the error to see details
            alert("Error sending message: " + error.text);
        });
});

