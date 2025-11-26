// Carousel Functionality
function initializeCarousels() {
  // Initialize carousels for each project section
  document.querySelectorAll('.project-section').forEach(section => {
    const carousel = section.querySelector('.screenshot-carousel');
    if (!carousel) return;

    const screenshots = carousel.querySelectorAll('.screenshot');
    const dots = section.querySelectorAll('.dot');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');

    let currentIndex = 0;
    let autoplayInterval;

    // Show specific slide
    function showSlide(index) {
      // Wrap around
      if (index >= screenshots.length) index = 0;
      if (index < 0) index = screenshots.length - 1;

      currentIndex = index;

      // Update screenshots
      screenshots.forEach((screenshot, i) => {
        screenshot.classList.toggle('active', i === currentIndex);
      });

      // Update dots
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    // Navigation button event listeners
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
        stopAutoplay();
        startAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
        stopAutoplay();
        startAutoplay();
      });
    }

    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
        stopAutoplay();
        startAutoplay();
      });
    });

    // Keyboard navigation
    carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        showSlide(currentIndex - 1);
        stopAutoplay();
        startAutoplay();
      }
      if (e.key === 'ArrowRight') {
        showSlide(currentIndex + 1);
        stopAutoplay();
        startAutoplay();
      }
    });

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

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
        stopAutoplay();
        startAutoplay();
      }
    }

    // Auto-play functionality
    function startAutoplay() {
      autoplayInterval = setInterval(() => {
        showSlide(currentIndex + 1);
      }, 5000);
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    // Pause autoplay on hover, resume on mouse leave
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // Start autoplay when carousel is in viewport
    const autoplayObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAutoplay();
        } else {
          stopAutoplay();
        }
      });
    }, { threshold: 0.5 });

    autoplayObserver.observe(carousel);

    // Initialize first slide
    showSlide(0);
  });
}
