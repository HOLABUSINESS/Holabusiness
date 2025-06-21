document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    // Ensure lightbox is hidden initially
    lightbox.style.display = "none";

    // Open lightbox when image is clicked
    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            lightboxImg.src = img.src; // Show clicked image in lightbox
            lightbox.style.display = "flex"; // Show lightbox
        });
    });

    // Close lightbox when close button is clicked
    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // Close lightbox with Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            lightbox.style.display = "none";
        }
    });
});
