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

// Toggle menu and overlay on hamburger click
hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

// Close menu and overlay on overlay click
overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});

// Close menu and navigate on control item click
document.querySelectorAll(".control").forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");

        // Navigate based on data-id
        const pageId = item.getAttribute("data-id");
        if (pageId) {
            window.location.href = `#${pageId}`;
        }
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



const isHoverable = window.matchMedia('(hover: hover)').matches;
let currentlyPlaying = null;

document.querySelectorAll('.portfolio-item').forEach(item => {
  const video = item.querySelector('video');

  if (isHoverable) {
    // DESKTOP: play on hover
    item.addEventListener('mouseenter', () => {
      video.play();
      currentlyPlaying = video;
    });

    item.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
      currentlyPlaying = null;
    });
  } else {
    // MOBILE: play on tap
    item.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevents click from bubbling up

      // Stop currently playing video if it's a different one
      if (currentlyPlaying && currentlyPlaying !== video) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
      }

      // Always restart video from beginning and play
      video.currentTime = 0;
      video.play();
      currentlyPlaying = video;
    });
  }
});

// MOBILE: stop video if user taps elsewhere
if (!isHoverable) {
  document.addEventListener('click', () => {
    if (currentlyPlaying) {
      currentlyPlaying.pause();
      currentlyPlaying.currentTime = 0;
      currentlyPlaying = null;
    }
  });
}

