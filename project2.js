const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll("img");
const buttons = document.querySelectorAll(".button");
let imageIndex = 1;
let intervalId;

// Function to slide to the current imageIndex (with wrapping)
const slideImage = () => {
    // Wrap index if out of bounds
    if (imageIndex === images.length) {
        imageIndex = 0;
    } else if (imageIndex < 0) {
        imageIndex = images.length - 1;
    }
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// Start automatic sliding every 2 seconds
const autoSlide = () => {
    intervalId = setInterval(() => {
        imageIndex++;
        slideImage();
    }, 2000);
};

// Initialize auto-slide
autoSlide();

// Handle button clicks (next/prev)
const updateClick = (e) => {
    clearInterval(intervalId);               // Stop auto-slide
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage();
    console.log(imageIndex);
    autoSlide();                             // Restart auto-slide
};

// Attach click listeners to buttons
buttons.forEach(button => button.addEventListener("click", updateClick));

// Pause auto-slide on hover
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));

// Resume auto-slide when mouse leaves
wrapper.addEventListener("mouseleave", autoSlide);