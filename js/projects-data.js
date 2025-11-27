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
        file: "jobMatching.service.js",
        language: "JavaScript",
        description: "AI-powered job matching engine with parallel processing and multi-factor scoring algorithm",
        code: `  /**
   * 🐝 JOBIZZ - AI-POWERED JOB MATCHING ENGINE
   *
   * Rate multiple jobs using parallel processing & OpenAI embeddings
   * Implements sophisticated multi-factor scoring algorithm with concurrency control
   */

  async function batchRateJobs(userId, jobs) {
    console.log(\`🐝 Rating \${jobs.length} jobs for user \${userId}...\`);

    // Parallel processing with concurrency limit (prevents API overwhelming)
    const CONCURRENCY = 5;
    const ratedJobs = [];

    // Process jobs in batches for optimal performance
    for (let i = 0; i < jobs.length; i += CONCURRENCY) {
      const batch = jobs.slice(i, i + CONCURRENCY);
      const batchNum = Math.floor(i / CONCURRENCY) + 1;
      const totalBatches = Math.ceil(jobs.length / CONCURRENCY);

      console.log(\`📦 Batch \${batchNum}/\${totalBatches} (\${batch.length} jobs)...\`);

      // 🚀 Process batch concurrently with Promise.all
      const batchResults = await Promise.all(
        batch.map(async (job) => {
          try {
            // AI-powered scoring with multiple factors
            const scores = await calculateMatchScore(userId, job);

            // Filter out jobs below minimum threshold
            if (scores === null) return null;

            return {
              ...job,
              ...scores,  // Inject calculated match scores
            };
          } catch (error) {
            console.error(\`Failed to rate job \${job.id}:\`, error.message);
            return null;
          }
        })
      );

      // Filter out failed ratings and add to results
      ratedJobs.push(...batchResults.filter(Boolean));
    }

    // Sort by match score (best matches first)
    ratedJobs.sort((a, b) => b.match_score - a.match_score);

    console.log(\`✅ Rated \${ratedJobs.length} jobs successfully\`);
    return ratedJobs;
  }

  /**
   * 🧠 MULTI-FACTOR SCORING ALGORITHM
   *
   * Weighted scoring system combining:
   * • Skills Match (35%) - AI-powered semantic matching
   * • Title Match (25%) - Jaccard similarity + word overlap
   * • Location (20%) - Distance-based with geocoding
   * • Preferences (10%) - Job type & remote preference
   * • AI Similarity (10%) - OpenAI embedding cosine similarity
   */

  async function calculateMatchScore(userId, job) {
    // Fetch user profile & preferences
    const profile = await getUserProfile(userId);
    const prefs = await getUserPreferences(userId);

    // 1️⃣ AI-Powered Skills Matching (Dynamic synonym detection)
    const skillsScore = await calculateSkillsMatchDynamic(
      profile.skills,
      job.skills_required
    );

    // 2️⃣ Title Matching (Jaccard similarity algorithm)
    const titleScore = calculateTitleMatch(
      prefs.desired_job_title,
      job.title
    );

    // 🚫 MINIMUM THRESHOLD: Reject irrelevant jobs early
    if (skillsScore === 0 && titleScore === 0) {
      return null;  // No match on core criteria
    }

    // 3️⃣ Location Scoring (Haversine distance + geocoding)
    const locationScore = calculateLocationMatchWithDistance(
      profile.latitude,
      profile.longitude,
      job.latitude,
      job.longitude,
      job.location,
      prefs.remote_only
    );

    // 4️⃣ Preferences (Job type compatibility)
    const preferencesScore = calculatePreferencesMatch(
      prefs.job_type,
      job.job_type,
      prefs.remote_only,
      job.location
    );

    // 5️⃣ AI Embedding Similarity (OpenAI semantic understanding)
    const profileEmbedding = await getOrGenerateProfileEmbedding(userId);
    const jobEmbedding = await getOrGenerateJobEmbedding(
      job.id,
      job.description,
      job.title,
      job.skills_required
    );
    const embeddingSimilarity = cosineSimilarity(profileEmbedding, jobEmbedding);

    // 🎯 Calculate weighted overall score
    const match_score = Math.round(
      skillsScore * 0.35 +
      titleScore * 0.25 +
      locationScore * 0.20 +
      preferencesScore * 0.10 +
      embeddingSimilarity * 100 * 0.10
    );

    return {
      match_score,
      skills_match_score: skillsScore,
      title_match_score: titleScore,
      location_match_score: locationScore,
      preferences_match_score: preferencesScore,
      embedding_similarity: embeddingSimilarity,
    };
  }`
      }
    ],
    screenshots: [
      { src: "screenshots/jobizz-1.png", alt: "Job Search Page with Advanced Filters" },
      { src: "screenshots/jobizz-4.png", alt: "AI-Powered Job Listings with Match Scores" },
      { src: "screenshots/jobizz-2.png", alt: "Application Tracking Dashboard" },
      { src: "screenshots/jobizz-5.png", alt: "User Profile with Skills and Preferences" },
      { src: "screenshots/jobizz-6.png", alt: "CV Upload and Preview Interface" },
      { src: "screenshots/jobizz-3.png", alt: "Detailed Match Score Breakdown (86% Match)" }
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
        file: "appointments.js",
        language: "JavaScript",
        description: "Day-to-date conversion logic for weekly appointment slot generation",
        code: `  // Convert day names to actual dates for the current week
  Object.keys(slots).forEach((dayKey) => {
    const times = slots[dayKey];
    if (times && times.length > 0) {
      const currDay = today.getDay();  // Current day index (0-6)
      const dayIndex = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ].indexOf(dayKey);

      // Calculate day offset with wraparound
      let diff = dayIndex - currDay;
      if (diff < 0) diff += 7;  // Wrap to next week

      const date = new Date(today);
      date.setDate(today.getDate() + diff);
      const dateStr = date.toISOString().slice(0, 10);

      times.forEach((time) => {
        // Insert slots into database...
      });
    }
  });`
      }
    ],
    screenshots: [
      { src: "screenshots/mia-1.png", alt: "Homepage with Tax Consultant Introduction" },
      { src: "screenshots/mia-2.png", alt: "Services Overview with Tax Consultation Options" },
      { src: "screenshots/mia-3.png", alt: "Detailed Licensed Accountant Service Description" },
      { src: "screenshots/mia-4.png", alt: "Service Selection for Appointment Booking" },
      { src: "screenshots/mia-5.png", alt: "Interactive Appointment Calendar" },
      { src: "screenshots/mia-6.png", alt: "Time Slot Selection and Booking Form" },
      { src: "screenshots/mia-7.png", alt: "Client Personal Area with Appointment Tracking" },
      { src: "screenshots/mia-8.png", alt: "Document Management and File Upload Sections" },
      { src: "screenshots/mia-9.png", alt: "Admin Dashboard for Appointment Management" },
      { src: "screenshots/mia-10.png", alt: "Admin Calendar for Managing Available Time Slots" }
    ],
    links: {
      github: "https://github.com/NeoZi12/MiaWebProject.git",
      demo: null
    }
  },

  eventy: {
    number: "PROJECT_03",
    title: "Eventy",
    tagline: "Modern event management for creators and attendees",
    description: "Eventy is a modern full-stack web application that revolutionizes event management. Create and manage events, connect with attendees, and build communities through shared experiences. Features include real-time friend chat, personal statistics dashboards, and comprehensive admin tools for event organizers.",
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
        file: "CityAutocomplete.jsx",
        language: "JavaScript",
        description: "Smart autocomplete component with keyboard navigation and race condition prevention",
        code: ` export default function CityAutocomplete({ options = [], value = "", onChange }) {
    const [input, setInput] = useState(value || "");
    const [open, setOpen] = useState(false);
    const [hi, setHi] = useState(-1); // highlighted index

    const filtered = useMemo(
      () => options.filter(o => norm(o).includes(norm(input))).slice(0, 50),
      [options, input]
    );

    function handleKeyDown(e) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHi(i => Math.min((i < 0 ? -1 : i) + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHi(i => Math.max((i < 0 ? 0 : i) - 1, 0));
      } else if (e.key === "Enter" && open && hi >= 0) {
        e.preventDefault();
        choose(filtered[hi]);
      }
    }

    function handleBlur() {
      setTimeout(() => {
        const exists = options.some(o => norm(o) === norm(input));
        if (!exists) {
          setInput(value || "");
          setError("בחר עיר מהרשימה");
        }
      }, 120); // Delay prevents blur race condition
    }

    function handleOptionMouseDown(e, opt) {
      e.preventDefault(); // Critical: prevents input blur before selection
      choose(opt);
    }`
      }
    ],
    screenshots: [
      { src: "screenshots/eventy-1.png", alt: "Featured Events Page with Search and Map Integration" },
      { src: "screenshots/eventy-2.png", alt: "Interactive Map with Event Location Markers" },
      { src: "screenshots/eventy-3.png", alt: "Personal Area with User Profile and Friends Management" },
      { src: "screenshots/eventy-4.png", alt: "Contact Admin Page with Message History" },
      { src: "screenshots/eventy-5.png", alt: "Event Detail Page with Participants and Comments" }
    ],
    links: {
      github: "https://github.com/LeoNet2024/Eventy.git",
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
        <h3 class="block-title">Description</h3>
        <p class="block-text">${data.description}</p>
      </div>

      <!-- Tech Stack -->
      <div class="content-block tech-block">
        <h3 class="block-title">Tech Stack</h3>
        <div class="tech-grid">
          ${data.techStack.map(tech => `
            <span class="tech-badge">${tech}</span>
          `).join('')}
        </div>
      </div>

      <!-- Key Features -->
      <div class="content-block features-block">
        <h3 class="block-title">Key Features</h3>
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
        <h3 class="block-title">Code Highlights</h3>
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

  // Apply syntax highlighting (disabled for cleaner code display)
  // setTimeout(highlightSyntax, 100);

  // Initialize carousels after sections are created
  if (typeof initializeCarousels === 'function') {
    setTimeout(initializeCarousels, 150);
  }

  // Initialize navigation highlighting after sections are created
  if (typeof initializeNavHighlighting === 'function') {
    setTimeout(initializeNavHighlighting, 200);
  }
});
