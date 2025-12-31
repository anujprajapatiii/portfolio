// Project storage and rendering
// Now just metadata - content is loaded from separate markdown files
const posts = [
    {
        id: 6,
        title: "Markdown Test Case Study",
        category: "Writing",
        date: "2025-12-29",
        featuredImage: "images/markdown-test/preview.webp",
        contentFile: "projects/markdown-test.md",
        altText: "Comprehensive markdown formatting test showcasing all text styles, links, and formatting options",
        preview: {
            image: "images/markdown-test/preview.webp",
            role: "Technical Writer",
            timeline: "2 days",
            tools: "Markdown, VS Code"
        }
    },
    {
        id: 5,
        title: "Ringadindons",
        category: "Concept",
        date: "2025-12-29",
        featuredImage: "images/ringadindons/preview.webp",
        contentFile: "projects/ringadindons.md",
        altText: "Character design illustrations showcasing whimsical Ringadindons characters in various poses and expressions",
        preview: {
            image: "images/ringadindons/01.webp",
            role: "Character Designer",
            timeline: "1 week",
            tools: "Procreate, Photoshop"
        }
    },
    {
        id: 4,
        title: "Gabe – Anthology",
        category: "Writing",
        date: "2025-12-29",
        featuredImage: "images/gaben/preview.webp",
        contentFile: "projects/gaben.md",
        altText: "Gabe Newell portrait - collection of quotes and wisdom about product development and iteration",
        preview: {
            video: "images/gaben/clip1.mp4",
            role: "Content Curator",
            timeline: "3 days",
            tools: "Research, Writing"
        }
    },
    {
        id: 3,
        title: "Winter leaves",
        category: "Concept",
        date: "2025-12-29",
        featuredImage: "images/winter-leaves/preview.webp",
        contentFile: "projects/winter-leaves.md",
        altText: "Animated winter leaves concept art with organic movement and natural textures",
        preview: {
            image: "images/winter-leaves/preview.webp",
            role: "Motion Designer",
            timeline: "2 weeks",
            tools: "After Effects, Lottie"
        }
    },
    {
        id: 2,
        title: "Helltaker: A masterclass in game design",
        category: "Concept",
        date: "2025-12-29",
        featuredImage: "images/helltaker/preview.webp",
        contentFile: "projects/helltaker.md",
        altText: "Helltaker game design analysis - pixel art demon characters and puzzle mechanics breakdown",
        preview: {
            image: "images/helltaker/preview.webp",
            role: "Game Design Analyst",
            timeline: "1 week",
            tools: "Analysis, Writing"
        }
    },
    {
        id: 1,
        title: "Welcome to my blog",
        category: "Writing",
        date: "2025-12-29",
        featuredImage: "images/welcome/preview.webp",
        contentFile: "projects/welcome.md",
        altText: "Welcome banner introducing the portfolio and blog section",
        preview: {
            image: "images/welcome/preview.webp",
            role: "Content Writer",
            timeline: "1 day",
            tools: "Markdown, Figma"
        }
    }
];

// About page content
const aboutContent = `I'm a visual/growth/brand/UX designer at BrowserStack, working across multiple design disciplines.

**What I do:**
I focus on creating thoughtful, user-centered designs that balance aesthetics with functionality. My work spans visual design, growth experiments, brand systems, and UX research.

**Design philosophy:**
Good design is invisible. The best interfaces feel natural, require minimal explanation, and genuinely improve people's lives. I believe in iterating quickly, testing assumptions, and letting data inform (but not dictate) creative decisions.

**Tools & craft:**
I work primarily in Figma for design and prototyping, with occasional ventures into motion design and creative coding. I'm always exploring new tools and techniques to expand my creative toolkit.

**Currently exploring:**
Micro-interactions, systematic design thinking, and the intersection of brand and product design.

**Outside of work:**
When I'm not designing, you'll find me analyzing game design patterns, sketching character concepts, or writing about design and creativity.

---

*This is a placeholder—I'll expand this section with more details soon.*`;

// Design system content
const designSystemContent = `
<div class="design-system">
    <h1>Design System</h1>
    <div class="meta">A comprehensive guide to the visual language and components</div>

    <h2>Typography</h2>
    <div class="typography-samples">
        <div class="sample">
            <h1>Heading 1 — 32px/600</h1>
            <code>font-size: 32px; font-weight: 600;</code>
        </div>
        <div class="sample">
            <h2>Heading 2 — 24px/600</h2>
            <code>font-size: 24px; font-weight: 600;</code>
        </div>
        <div class="sample">
            <h3>Heading 3 — 20px/600</h3>
            <code>font-size: 20px; font-weight: 600;</code>
        </div>
        <div class="sample">
            <p style="font-size: 18px; margin: 0;">Body Large — 18px/500</p>
            <code>font-size: 18px; font-weight: 500;</code>
        </div>
        <div class="sample">
            <p style="font-size: 16px; margin: 0;">Body — 16px/400</p>
            <code>font-size: 16px; font-weight: 400;</code>
        </div>
        <div class="sample">
            <p style="font-size: 14px; margin: 0; color: #a1a1aa;">Body Small — 14px/500</p>
            <code>font-size: 14px; font-weight: 500; color: #a1a1aa;</code>
        </div>
        <div class="sample">
            <p style="font-size: 13px; margin: 0; color: #a1a1aa;">Caption — 13px/500</p>
            <code>font-size: 13px; font-weight: 500; color: #a1a1aa;</code>
        </div>
    </div>

    <h2>Colors</h2>
    <div class="color-palette">
        <div class="color-swatch">
            <div class="swatch" style="background: #09090b;"></div>
            <div class="color-name">Background</div>
            <div class="color-value">#09090b</div>
        </div>
        <div class="color-swatch">
            <div class="swatch" style="background: #18181b;"></div>
            <div class="color-name">Surface</div>
            <div class="color-value">#18181b</div>
        </div>
        <div class="color-swatch">
            <div class="swatch" style="background: #27272a;"></div>
            <div class="color-name">Border</div>
            <div class="color-value">#27272a</div>
        </div>
        <div class="color-swatch">
            <div class="swatch" style="background: #3f3f46;"></div>
            <div class="color-name">Border Hover</div>
            <div class="color-value">#3f3f46</div>
        </div>
        <div class="color-swatch">
            <div class="swatch" style="background: #52525b;"></div>
            <div class="color-name">Border Focus</div>
            <div class="color-value">#52525b</div>
        </div>
        <div class="color-swatch">
            <div class="swatch" style="background: #71717a;"></div>
            <div class="color-name">Text Muted</div>
            <div class="color-value">#71717a</div>
        </div>
        <div class="color-swatch">
            <div class="swatch" style="background: #a1a1aa;"></div>
            <div class="color-name">Text Secondary</div>
            <div class="color-value">#a1a1aa</div>
        </div>
        <div class="color-swatch">
            <div class="swatch" style="background: #e4e4e7;"></div>
            <div class="color-name">Text Body</div>
            <div class="color-value">#e4e4e7</div>
        </div>
        <div class="color-swatch">
            <div class="swatch" style="background: #fafafa;"></div>
            <div class="color-name">Text Primary</div>
            <div class="color-value">#fafafa</div>
        </div>
    </div>

    <h2>Buttons</h2>
    <div class="component-group">
        <button class="btn-primary">Primary Button</button>
        <code>background: #fafafa; color: #09090b;</code>
    </div>
    <div class="component-group">
        <button class="btn-secondary">Secondary Button</button>
        <code>background: #18181b; border: 1px solid #27272a;</code>
    </div>
    <div class="component-group">
        <button class="btn-ghost">Ghost Button</button>
        <code>background: transparent; border: 1px solid #27272a;</code>
    </div>

    <h2>Form Elements</h2>
    <div class="component-group">
        <select class="category-filter">
            <option>Dropdown Menu</option>
            <option>Option 1</option>
            <option>Option 2</option>
        </select>
        <code>Custom select with SVG chevron icon</code>
    </div>

    <h2>Cards</h2>
    <div class="component-group">
        <div class="project-card demo-card">
            <div class="project-image">
                <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #27272a 0%, #18181b 100%); display: flex; align-items: center; justify-content: center; color: #71717a; font-size: 14px;">Preview Image</div>
            </div>
            <div class="project-info">
                <h2 class="project-title">Project Title</h2>
                <div class="project-category">Category</div>
                <div class="project-year">2025</div>
            </div>
        </div>
        <code>Hover for lift effect and image zoom</code>
    </div>

    <h2>Spacing Scale</h2>
    <div class="spacing-scale">
        <div class="spacing-item"><div class="spacing-box" style="width: 4px;"></div><code>4px</code></div>
        <div class="spacing-item"><div class="spacing-box" style="width: 8px;"></div><code>8px</code></div>
        <div class="spacing-item"><div class="spacing-box" style="width: 12px;"></div><code>12px</code></div>
        <div class="spacing-item"><div class="spacing-box" style="width: 16px;"></div><code>16px</code></div>
        <div class="spacing-item"><div class="spacing-box" style="width: 20px;"></div><code>20px</code></div>
        <div class="spacing-item"><div class="spacing-box" style="width: 24px;"></div><code>24px</code></div>
        <div class="spacing-item"><div class="spacing-box" style="width: 32px;"></div><code>32px</code></div>
        <div class="spacing-item"><div class="spacing-box" style="width: 40px;"></div><code>40px</code></div>
        <div class="spacing-item"><div class="spacing-box" style="width: 48px;"></div><code>48px</code></div>
    </div>

    <h2>Transitions</h2>
    <div class="component-group">
        <div class="transition-demo">Hover me</div>
        <code>transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);</code>
    </div>
</div>
`;

// Check if we're on about page
function isAboutPage() {
    return window.location.hash === '#about';
}

// Check if we're on design system page
function isDesignSystemPage() {
    return window.location.hash === '#design-system';
}

// Check if we're on projects page
function isProjectsPage() {
    return window.location.hash === '#projects';
}

// Content cache for loaded markdown files
const contentCache = new Map();

// Eye icon SVG constant to avoid duplication
const EYE_ICON_SVG = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4C4.5 4 2 10 2 10s2.5 6 8 6 8-6 8-6-2.5-6-8-6z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="10" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/>
    </svg>
`;

// Sanitize HTML to prevent XSS attacks
function sanitizeHTML(html) {
    const tempDiv = document.createElement('div');
    tempDiv.textContent = html;
    return tempDiv.innerHTML;
}

// Render a single project card (extracted to avoid duplication)
function renderProjectCard(post) {
    const year = new Date(post.date).getFullYear();
    return `
        <div class="project-card-wrapper">
            <a href="?post=${post.id}" class="project-card">
                <div class="project-image">
                    <img src="${post.featuredImage}" alt="${post.altText || post.title}" loading="lazy">
                    ${post.preview ? `
                        <button class="preview-eye-icon" data-post-id="${post.id}" aria-label="Preview project details">
                            ${EYE_ICON_SVG}
                        </button>
                    ` : ''}
                </div>
                <div class="project-info">
                    <h2 class="project-title">${post.title}</h2>
                    <div class="project-meta">
                        <div class="project-category">${post.category}</div>
                        <div class="project-year">${year}</div>
                    </div>
                </div>
            </a>
            ${post.preview ? `
                <div class="preview-card" data-preview-id="${post.id}">
                    ${post.preview.video ? `
                        <video src="${post.preview.video}" class="preview-image" autoplay loop muted playsinline preload="none"></video>
                    ` : `
                        <img src="${post.preview.image}" alt="${post.title} preview" class="preview-image" loading="lazy">
                    `}
                    <div class="preview-content">
                        <div class="preview-row">
                            <span class="preview-label">Role</span>
                            <span class="preview-value">${post.preview.role}</span>
                        </div>
                        <div class="preview-row">
                            <span class="preview-label">Timeline</span>
                            <span class="preview-value">${post.preview.timeline}</span>
                        </div>
                        <div class="preview-row">
                            <span class="preview-label">Tools</span>
                            <span class="preview-value">${post.preview.tools}</span>
                        </div>
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

// Simple markdown-like text formatting
function formatText(text) {
    // First, handle block-level elements (headings, images, videos)
    let formatted = text
        // YouTube videos: [youtube:VIDEO_ID]
        .replace(/\[youtube:([^\]]+)\]/g, '\n<div class="video-container"><iframe src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>\n')
        // Vimeo videos: [vimeo:VIDEO_ID]
        .replace(/\[vimeo:([^\]]+)\]/g, '\n<div class="video-container"><iframe src="https://player.vimeo.com/video/$1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>\n')
        // Lottie animations: [lottie:URL]
        .replace(/\[lottie:([^\]]+)\]/g, '\n<div class="lottie-container" data-lottie-url="$1"></div>\n')
        // Images with optional caption
        .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '\n<img src="$2" alt="$1" loading="lazy">\n')
        // Headers (must come before bold/italic to avoid conflicts)
        .replace(/^### (.*$)/gim, '\n<h3>$1</h3>\n')
        .replace(/^## (.*$)/gim, '\n<h2>$1</h2>\n')
        .replace(/^# (.*$)/gim, '\n<h1>$1</h1>\n')
        // Bold and italic combined (must come before individual bold/italic)
        // Use non-greedy match and don't cross line boundaries
        .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
        // Bold - don't match across newlines
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        // Italic - don't match across newlines or quotes
        .replace(/\*([^\*\n]+?)\*/g, '<em>$1</em>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Split into blocks (paragraphs separated by double newlines)
    const blocks = formatted.split(/\n\n+/);

    // Process each block
    const processedBlocks = blocks.map(block => {
        block = block.trim();
        if (!block) return '';

        // Check if this is a list block (lines starting with -)
        if (block.match(/^- /m)) {
            const listItems = block.split('\n')
                .filter(line => line.trim().startsWith('- '))
                .map(line => '<li>' + line.replace(/^- /, '') + '</li>')
                .join('\n');
            return '<ul>\n' + listItems + '\n</ul>';
        }

        // Don't wrap block-level elements in <p> tags
        if (block.startsWith('<h1>') || block.startsWith('<h2>') || block.startsWith('<h3>') ||
            block.startsWith('<img') || block.startsWith('<div') || block.startsWith('<iframe') ||
            block.startsWith('<ul>')) {
            return block;
        }

        // Wrap everything else in <p> tags and convert single newlines to <br>
        return '<p>' + block.replace(/\n/g, '<br>') + '</p>';
    });

    return processedBlocks.join('\n');
}

// Render about page
function renderAbout() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    const formattedContent = formatText(aboutContent);

    container.innerHTML = `
        <article class="post-content">
            <div class="post-body">${formattedContent}</div>
        </article>
    `;

    updateNavActive('about');
}

// Render design system page
function renderDesignSystem() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    container.innerHTML = `
        <article class="post-content">
            ${designSystemContent}
        </article>
    `;

    updateNavActive('design-system');
}

// Get all unique categories
function getCategories() {
    const categories = [...new Set(posts.map(post => post.category))];
    return categories.sort();
}

// Current filter state
let currentFilter = 'all';

// Render homepage with featured projects
function renderHome() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
    const featuredPosts = sortedPosts.slice(0, 4); // Only show first 4 projects

    container.innerHTML = `
        <div class="projects-header">
            <div class="projects-title">Featured Work</div>
        </div>
        <div class="projects-grid">
            ${featuredPosts.map(post => renderProjectCard(post)).join('')}
        </div>
    `;

    updateNavActive('home');

    // Add preview hover listeners
    initPreviewHovers();
}

// Render full project grid on projects page
function renderProjectsPage() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
    const filteredPosts = currentFilter === 'all'
        ? sortedPosts
        : sortedPosts.filter(post => post.category === currentFilter);

    const categories = getCategories();

    // Count posts per category
    const categoryCounts = {
        all: sortedPosts.length,
        ...categories.reduce((acc, cat) => {
            acc[cat] = sortedPosts.filter(p => p.category === cat).length;
            return acc;
        }, {})
    };

    container.innerHTML = `
        <div class="projects-header">
            <div class="projects-title">Projects</div>
            <div class="filter-pills" role="group" aria-label="Filter projects by category">
                <button class="filter-pill ${currentFilter === 'all' ? 'active' : ''}" data-filter="all" aria-pressed="${currentFilter === 'all'}">
                    All <span class="pill-count">${categoryCounts.all}</span>
                </button>
                ${categories.map(cat => `
                    <button class="filter-pill ${currentFilter === cat ? 'active' : ''}" data-filter="${cat}" aria-pressed="${currentFilter === cat}">
                        ${cat} <span class="pill-count">${categoryCounts[cat]}</span>
                    </button>
                `).join('')}
            </div>
        </div>
        <div class="projects-grid">
            ${filteredPosts.map(post => renderProjectCard(post)).join('')}
        </div>
    `;

    updateNavActive('projects');

    // Add filter event listeners
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            currentFilter = pill.getAttribute('data-filter');
            renderProjectsPage();
        });
    });

    // Add preview hover listeners
    initPreviewHovers();
}

// Initialize preview card hover interactions using event delegation
// This prevents memory leaks from accumulating event listeners
let previewHoverInitialized = false;

function initPreviewHovers() {
    // Only initialize once using event delegation
    if (previewHoverInitialized) return;

    const container = document.getElementById('posts-container');
    if (!container) return;

    // Use event delegation to handle all preview interactions
    container.addEventListener('mouseenter', (e) => {
        const eyeIcon = e.target.closest('.preview-eye-icon');
        if (!eyeIcon) return;

        e.preventDefault();
        e.stopPropagation();

        const postId = eyeIcon.getAttribute('data-post-id');
        const previewCard = document.querySelector(`[data-preview-id="${postId}"]`);
        if (!previewCard) return;

        // Position preview below eye icon
        const iconRect = eyeIcon.getBoundingClientRect();
        const cardRect = previewCard.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Calculate position below eye icon
        let top = iconRect.bottom + 8;
        let left = iconRect.left + (iconRect.width / 2) - (cardRect.width / 2);

        // Edge detection - right side
        if (left + cardRect.width > viewportWidth - 20) {
            left = viewportWidth - cardRect.width - 20;
        }

        // Edge detection - left side
        if (left < 20) {
            left = 20;
        }

        // Edge detection - bottom
        if (top + cardRect.height > viewportHeight - 20) {
            top = iconRect.top - cardRect.height - 8; // Show above icon instead
        }

        previewCard.style.top = `${top}px`;
        previewCard.style.left = `${left}px`;
        previewCard.classList.add('visible');
    }, true);

    container.addEventListener('mouseleave', (e) => {
        const eyeIcon = e.target.closest('.preview-eye-icon');
        if (!eyeIcon) return;

        const postId = eyeIcon.getAttribute('data-post-id');
        const previewCard = document.querySelector(`[data-preview-id="${postId}"]`);
        if (previewCard) {
            previewCard.classList.remove('visible');
        }
    }, true);

    // Handle preview card hover
    container.addEventListener('mouseenter', (e) => {
        const previewCard = e.target.closest('.preview-card');
        if (previewCard) {
            previewCard.classList.add('visible');
        }
    }, true);

    container.addEventListener('mouseleave', (e) => {
        const previewCard = e.target.closest('.preview-card');
        if (previewCard) {
            previewCard.classList.remove('visible');
        }
    }, true);

    previewHoverInitialized = true;
}

// Render individual post
async function renderPost(postId) {
    const container = document.getElementById('posts-container');
    if (!container) return;

    const post = posts.find(p => p.id === parseInt(postId));
    if (!post) {
        renderPostsList();
        return;
    }

    // Show loading state
    container.innerHTML = `
        <a href="?" class="back-link">← Back</a>
        <article class="post-content">
            <h1>${post.title}</h1>
            <div class="meta">${formatDate(post.date)}</div>
            <p>Loading...</p>
        </article>
    `;

    try {
        let formattedContent;

        // Check cache first
        if (contentCache.has(post.id)) {
            formattedContent = contentCache.get(post.id);
        } else {
            // Load content from markdown file
            // Use absolute path from root to ensure it works on all hosting platforms
            const contentPath = post.contentFile.startsWith('/') ? post.contentFile : `/${post.contentFile}`;
            const response = await fetch(contentPath);
            if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            const content = await response.text();
            formattedContent = formatText(content);

            // Cache the formatted content
            contentCache.set(post.id, formattedContent);
        }

        container.innerHTML = `
            <a href="?" class="back-link">← Back</a>
            <article class="post-content">
                <h1>${post.title}</h1>
                <div class="meta">${formatDate(post.date)}</div>
                <div class="post-body">${formattedContent}</div>
            </article>
        `;

        // Don't highlight any nav item when viewing individual posts
        updateNavActive(null);

        // Initialize Lottie animations after rendering
        initLottieAnimations();
    } catch (error) {
        container.innerHTML = `
            <a href="?" class="back-link">← Back</a>
            <article class="post-content">
                <h1>${post.title}</h1>
                <div class="meta">${formatDate(post.date)}</div>
                <p>Error loading content. Please try again later.</p>
            </article>
        `;
    }
}

// Update navigation active state
function updateNavActive(section) {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });

    const activeLink = section === 'about'
        ? document.querySelector('nav a[href="#about"]')
        : section === 'design-system'
        ? document.querySelector('nav a[href="#design-system"]')
        : section === 'projects'
        ? document.querySelector('nav a[href="#projects"]')
        : document.querySelector('nav a[href="?"]');

    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Format date nicely
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Initialize Lottie animations
function initLottieAnimations() {
    if (typeof lottie === 'undefined') return;

    const lottieContainers = document.querySelectorAll('.lottie-container');
    lottieContainers.forEach(container => {
        const url = container.getAttribute('data-lottie-url');
        if (url) {
            lottie.loadAnimation({
                container: container,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: url
            });
        }
    });
}

// Handle routing
function router() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post');

    if (isDesignSystemPage()) {
        renderDesignSystem();
    } else if (isAboutPage()) {
        renderAbout();
    } else if (isProjectsPage()) {
        renderProjectsPage();
    } else if (postId) {
        renderPost(postId);
    } else {
        renderHome();
    }
}

// Initialize
window.addEventListener('load', router);
window.addEventListener('popstate', router);
window.addEventListener('hashchange', router);
