// Project Data
const projectsData = {
  jobizz: {
    number: "PROJECT_01",
    title: "Jobizz",
    tagline: "Your intelligent job search assistant powered by AI",
    description: "Jobizz is your intelligent job search assistant that leverages AI to find, rate, and help you apply to the best job matches. Upload your CV and let AI analyze your skills and experience to match you with the perfect opportunities. Track your applications and let intelligent algorithms work for you 24/7.",
    techStack: [
      "React",
      "Vite",
      "React Router",
      "Node.js",
      "Express",
      "MySQL",
      "Passport.js",
      "Google OAuth",
      "Nodemailer",
      "OpenAI GPT-4",
      "Multer",
      "AES-256-GCM"
    ],
    features: [
      "AI-powered CV analysis using GPT-4 for intelligent skill extraction and parsing",
      "Smart job search with AI ratings to identify the best matches for your profile",
      "Comprehensive application tracking system to manage your job search pipeline",
      "Secure authentication with Google OAuth and magic link email authentication",
      "End-to-end file encryption with AES-256-GCM for CV protection",
      "Intelligent embeddings generation for semantic job matching"
    ],
    codeHighlights: [
      {
        file: "placeholder.js",
        language: "JavaScript",
        description: "Code snippet coming soon",
        code: `// This is a placeholder
// Your actual code snippet will be added here
// to showcase interesting implementation details

function placeholder() {
  return "Add your code snippet here";
}`
      }
    ],
    screenshots: [
      { src: "screenshots/jobizz-1.svg", alt: "Jobizz Dashboard" },
      { src: "screenshots/jobizz-2.svg", alt: "Job Search Interface" },
      { src: "screenshots/jobizz-3.svg", alt: "Application Tracking" }
    ],
    links: {
      github: "https://github.com/NeoZi12/Jobizz.git",
      demo: null
    }
  },

  mia: {
    number: "PROJECT_02",
    title: "Mia: Tax Consultant",
    tagline: "Professional tax consultation and appointment management",
    description: "Mia is a comprehensive website built for a tax consultant business to streamline appointment management and client communication. The platform enables efficient scheduling, secure file uploads for tax documents, and personalized notifications from the business owner to clients, making tax consultation accessible and organized.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "SQL",
      "Multer",
      "Authentication",
      "File Management"
    ],
    features: [
      "Intuitive appointment management system for scheduling tax consultations",
      "Secure file upload functionality for tax documents and supporting materials",
      "Personalized notification system allowing business owners to send custom updates to users",
      "User dashboard for tracking appointments and document status",
      "Admin panel for managing client relationships and consultations",
      "Secure authentication to protect sensitive financial information"
    ],
    codeHighlights: [
      {
        file: "placeholder.js",
        language: "JavaScript",
        description: "Code snippet coming soon",
        code: `// This is a placeholder
// Your actual code snippet will be added here
// to showcase interesting implementation details

function placeholder() {
  return "Add your code snippet here";
}`
      }
    ],
    screenshots: [
      { src: "screenshots/mia-1.svg", alt: "Mia Dashboard" },
      { src: "screenshots/mia-2.svg", alt: "Appointment Management" },
      { src: "screenshots/mia-3.svg", alt: "Client Notifications" }
    ],
    links: {
      github: "https://github.com/NeoZi12/MiaWebProject.git",
      demo: null
    }
  },

  eventy: {
    number: "PROJECT_03",
    title: "EventyPro",
    tagline: "Modern event management for creators and attendees",
    description: "EventyPro is a modern full-stack web application that revolutionizes event management. Create and manage events, connect with attendees, and build communities through shared experiences. Features include real-time friend chat, personal statistics dashboards, and comprehensive admin tools for event organizers.",
    techStack: [
      "React",
      "Vite",
      "CSS Modules",
      "Axios",
      "Node.js",
      "Express.js",
      "Express Session",
      "MySQL",
      "Nodemon"
    ],
    features: [
      "Intuitive event creation interface for organizers to set up and manage events",
      "Join events and RSVP with real-time capacity tracking",
      "Integrated chat system for accepted friends to communicate and coordinate",
      "Personal area with comprehensive statistics showing your event participation",
      "Detailed event information pages with descriptions, dates, and attendee lists",
      "Admin dashboard for managing events, users, and platform analytics",
      "Friend management system to build your event network"
    ],
    codeHighlights: [
      {
        file: "placeholder.js",
        language: "JavaScript",
        description: "Code snippet coming soon",
        code: `// This is a placeholder
// Your actual code snippet will be added here
// to showcase interesting implementation details

function placeholder() {
  return "Add your code snippet here";
}`
      }
    ],
    screenshots: [
      { src: "screenshots/eventy-1.svg", alt: "EventyPro Home" },
      { src: "screenshots/eventy-2.svg", alt: "Event Creation" },
      { src: "screenshots/eventy-3.svg", alt: "User Dashboard" }
    ],
    links: {
      github: "https://github.com/LeoNet2024/EventyPro.git",
      demo: null
    }
  }
};

// Utility function to escape HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Function to create a project section dynamically
function createProjectSection(projectKey, data) {
  const section = document.createElement('section');
  section.className = 'project-section';
  section.id = projectKey;
  section.setAttribute('data-project', projectKey);

  section.innerHTML = `
    <div class="project-header">
      <div class="project-number">// ${data.number}</div>
      <h2 class="project-title">${data.title}</h2>
      <div class="accent-line"></div>
      <p class="project-tagline">${data.tagline}</p>
    </div>

    <div class="project-screenshots">
      <div class="screenshot-carousel" tabindex="0">
        <button class="carousel-btn prev" aria-label="Previous screenshot">‹</button>
        <div class="screenshot-track">
          ${data.screenshots.map((screenshot, index) => `
            <img
              src="${screenshot.src}"
              alt="${screenshot.alt}"
              class="screenshot ${index === 0 ? 'active' : ''}"
              loading="lazy"
            />
          `).join('')}
        </div>
        <button class="carousel-btn next" aria-label="Next screenshot">›</button>
      </div>
      <div class="carousel-dots">
        ${data.screenshots.map((_, index) => `
          <span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}" role="button" aria-label="Go to slide ${index + 1}"></span>
        `).join('')}
      </div>
    </div>

    <div class="project-content">
      <!-- Description -->
      <div class="content-block description-block">
        <h3 class="block-title"><span class="prompt">> </span>Description</h3>
        <p class="block-text">${data.description}</p>
      </div>

      <!-- Tech Stack -->
      <div class="content-block tech-block">
        <h3 class="block-title"><span class="prompt">> </span>Tech Stack</h3>
        <div class="tech-grid">
          ${data.techStack.map(tech => `
            <span class="tech-badge">${tech}</span>
          `).join('')}
        </div>
      </div>

      <!-- Key Features -->
      <div class="content-block features-block">
        <h3 class="block-title"><span class="prompt">> </span>Key Features</h3>
        <ul class="features-list">
          ${data.features.map(feature => `
            <li class="feature-item">
              <span class="feature-bullet">▹</span>
              <span class="feature-text">${feature}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Code Highlights -->
      <div class="content-block code-block">
        <h3 class="block-title"><span class="prompt">> </span>Code Highlights</h3>
        <div class="code-snippets">
          ${data.codeHighlights.map(snippet => `
            <div class="code-snippet">
              <div class="snippet-header">
                <span class="snippet-file">${snippet.file}</span>
                <span class="snippet-language">${snippet.language}</span>
              </div>
              <pre class="snippet-code"><code>${escapeHtml(snippet.code)}</code></pre>
              ${snippet.description ? `<p style="padding: 1rem 1.5rem; color: #00cc33; font-size: 0.9rem; font-style: italic;">${snippet.description}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Links -->
      <div class="content-block links-block">
        ${data.links.github ? `
          <a href="${data.links.github}" class="project-btn github-btn" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        ` : ''}
        ${data.links.demo ? `
          <a href="${data.links.demo}" class="project-btn demo-btn" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Live Demo
          </a>
        ` : ''}
      </div>
    </div>
  `;

  return section;
}

// Simple syntax highlighting
function highlightSyntax() {
  document.querySelectorAll('.snippet-code code').forEach(block => {
    let html = block.innerHTML;

    // Highlight keywords
    const keywords = ['const', 'let', 'var', 'function', 'async', 'await', 'return', 'if', 'else', 'for', 'while', 'class', 'import', 'export', 'from', 'new', 'this', 'try', 'catch', 'throw'];
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      html = html.replace(regex, `<span class="keyword">${keyword}</span>`);
    });

    // Highlight strings
    html = html.replace(/(['"`])((?:\\.|(?!\1)[^\\])*)\1/g, '<span class="string">$1$2$1</span>');

    // Highlight comments
    html = html.replace(/\/\/(.*?)(?=<|$)/g, '<span class="comment">//$1</span>');
    html = html.replace(/\/\*(.*?)\*\//gs, '<span class="comment">/*$1*/</span>');

    // Highlight function names
    html = html.replace(/\b([a-zA-Z_]\w*)\s*\(/g, '<span class="function">$1</span>(');

    block.innerHTML = html;
  });
}

// Initialize project sections on page load
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');

  // Insert project sections before footer
  Object.entries(projectsData).forEach(([key, data]) => {
    const section = createProjectSection(key, data);
    document.body.insertBefore(section, footer);
  });

  // Apply syntax highlighting
  setTimeout(highlightSyntax, 100);

  // Initialize carousels after sections are created
  if (typeof initializeCarousels === 'function') {
    setTimeout(initializeCarousels, 150);
  }

  // Initialize navigation highlighting after sections are created
  if (typeof initializeNavHighlighting === 'function') {
    setTimeout(initializeNavHighlighting, 200);
  }
});
