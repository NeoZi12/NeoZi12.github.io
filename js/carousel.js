// Carousel Functionality
function initializeCarousels() {
  // Initialize carousels for each project section
  document.querySelectorAll(".project-section").forEach((section) => {
    const carousel = section.querySelector(".screenshot-carousel");
    if (!carousel) return;

    const screenshots = carousel.querySelectorAll(".screenshot");
    const dots = section.querySelectorAll(".dot");
    const prevBtn = carousel.querySelector(".carousel-btn.prev");
    const nextBtn = carousel.querySelector(".carousel-btn.next");

    let currentIndex = 0;

    // Show specific slide
    function showSlide(index) {
      // Wrap around
      if (index >= screenshots.length) index = 0;
      if (index < 0) index = screenshots.length - 1;

      currentIndex = index;

      // Update screenshots
      screenshots.forEach((screenshot, i) => {
        screenshot.classList.toggle("active", i === currentIndex);
      });

      // Update dots
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
    }

    // Navigation button event listeners
    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        showSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        showSlide(currentIndex + 1);
      });
    }

    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
      });
    });

    // Keyboard navigation
    carousel.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        showSlide(currentIndex - 1);
      }
      if (e.key === "ArrowRight") {
        showSlide(currentIndex + 1);
      }
    });

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );

    carousel.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      },
      { passive: true }
    );

    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next
          showSlide(currentIndex + 1);
        } else {
          // Swipe right - previous
          showSlide(currentIndex - 1);
        }
      }
    }

    // Lightbox functionality - click on screenshot to view full size
    screenshots.forEach((screenshot) => {
      screenshot.style.cursor = "pointer";
      screenshot.addEventListener("click", () => {
        openLightbox(screenshot.src, screenshot.alt);
      });
    });

    // Initialize first slide
    showSlide(0);
  });
}

// Lightbox functionality
function openLightbox(imageSrc, imageAlt) {
  // Create lightbox if it doesn't exist
  let lightbox = document.getElementById("lightbox");

  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
        <img class="lightbox-image" src="" alt="">
      </div>
    `;
    document.body.appendChild(lightbox);

    // Close lightbox on click outside image or close button
    lightbox.addEventListener("click", (e) => {
      if (
        e.target === lightbox ||
        e.target.classList.contains("lightbox-close")
      ) {
        closeLightbox();
      }
    });

    // Close lightbox on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("active")) {
        closeLightbox();
      }
    });
  }

  // Set image and show lightbox
  const lightboxImage = lightbox.querySelector(".lightbox-image");
  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageAlt;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
  }
}
