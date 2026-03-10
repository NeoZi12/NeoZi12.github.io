// Matrix Rain Effect
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Matrix characters - Katakana, Latin letters, and numbers
const matrixChars =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const characters = matrixChars.split("");

const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = Math.random() * -100;
}

function draw() {
  ctx.fillStyle = "rgba(13, 2, 8, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00FF41";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text =
      characters[Math.floor(Math.random() * characters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 50);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Typing Effect
const welcomeText = "Welcome";
const introText =
  "I'm <span class='highlight'>Neo</span>, a practical software engineer who loves building things — from full-stack web applications to AI-driven tools. I'm passionate about creating efficient, intelligent, and high-quality products that deliver real value to users.";

const welcomeElement = document.getElementById("welcome-text");
const introElement = document.getElementById("intro-text");
const accentLine = document.getElementById("accent-line");

let welcomeIndex = 0;
let introIndex = 0;

function typeWelcome() {
  if (welcomeIndex < welcomeText.length) {
    welcomeElement.textContent += welcomeText.charAt(welcomeIndex);
    welcomeIndex++;
    setTimeout(typeWelcome, 60);
  } else {
    welcomeElement.classList.remove("typing-cursor");
    accentLine.classList.remove("hidden-initial");
    setTimeout(() => {
      introElement.classList.add("typing-cursor");
      typeIntro();
    }, 300);
  }
}

let currentHTML = "";

function typeIntro() {
  if (introIndex < introText.length) {
    const char = introText.charAt(introIndex);

    // Handle HTML tags
    if (char === "<") {
      const tagEnd = introText.indexOf(">", introIndex);
      const tag = introText.substring(introIndex, tagEnd + 1);
      currentHTML += tag;
      introIndex = tagEnd + 1;
    } else {
      currentHTML += char;
      introIndex++;
    }

    introElement.innerHTML = currentHTML;
    setTimeout(typeIntro, 20);
  }
}

// Start typing animation on page load
window.addEventListener("load", () => {
  welcomeElement.classList.add("typing-cursor");
  setTimeout(typeWelcome, 500);
});

// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
  const projectNav = document.getElementById('project-nav');
  const heroSection = document.getElementById('hero');

  if (!projectNav || !heroSection) return;

  const heroHeight = heroSection.offsetHeight;

  // Show/hide navigation bar on scroll
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > heroHeight - 100) {
      projectNav.classList.add('visible');
    } else {
      projectNav.classList.remove('visible');
    }
  });

  // Smooth scroll navigation
  document.querySelectorAll('.nav-link, .project-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Only handle internal links (starting with #)
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href;
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          const navHeight = projectNav.offsetHeight;
          const targetPosition = targetSection.offsetTop - (targetId === '#hero' ? 0 : navHeight);

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

});

// Active navigation link highlighting (call after sections are created)
function initializeNavHighlighting() {
  const sections = document.querySelectorAll('.project-section, #hero');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const navHeight = 120; // Account for fixed nav bar

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollPosition = window.pageYOffset;

      // Check if we're in this section
      if (scrollPosition >= sectionTop - navHeight - 50 &&
          scrollPosition < sectionTop + sectionHeight - navHeight) {
        current = section.getAttribute('id');
      }
    });

    // Update active link
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Trigger on initial load
  window.dispatchEvent(new Event('scroll'));
}
