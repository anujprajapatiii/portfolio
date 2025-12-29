// Project storage and rendering
// Now just metadata - content is loaded from separate markdown files
const posts = [
    {
        id: 5,
        title: "Ringadindons",
        category: "Concept",
        date: "2025-12-29",
        featuredImage: "images/ringadindons/preview.webp",
        contentFile: "projects/ringadindons.md"
    },
    {
        id: 4,
        title: "Gabe – Anthology",
        category: "Writing",
        date: "2025-12-29",
        featuredImage: "images/gaben/preview.webp",
        contentFile: "projects/gaben.md"
    },
    {
        id: 3,
        title: "Winter leaves",
        category: "Concept",
        date: "2025-12-29",
        featuredImage: "images/winter-leaves/preview.webp",
        contentFile: "projects/winter-leaves.md"
    },
    {
        id: 2,
        title: "Helltaker: A masterclass in game design",
        category: "Concept",
        date: "2025-12-29",
        featuredImage: "images/helltaker/preview.webp",
        contentFile: "projects/helltaker.md"
    },
    {
        id: 1,
        title: "Welcome to my blog",
        category: "Writing",
        date: "2025-12-29",
        featuredImage: "images/welcome/preview.webp",
        contentFile: "projects/welcome.md"
    }
];

// About page content
const aboutContent = `I'm a visual/growth/brand/UX designer at BrowserStack, working across multiple design disciplines.

This is my personal space for writing and sharing thoughts.`;

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

// Simple markdown-like text formatting
function formatText(text) {
    return text
        // YouTube videos: [youtube:VIDEO_ID]
        .replace(/\[youtube:([^\]]+)\]/g, '<div class="video-container"><iframe src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
        // Vimeo videos: [vimeo:VIDEO_ID]
        .replace(/\[vimeo:([^\]]+)\]/g, '<div class="video-container"><iframe src="https://player.vimeo.com/video/$1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>')
        // Lottie animations: [lottie:URL]
        .replace(/\[lottie:([^\]]+)\]/g, '<div class="lottie-container" data-lottie-url="$1"></div>')
        // Images (must come after links to avoid conflicts)
        .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">')
        // Headers
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
        // Paragraphs
        .replace(/\n\n/g, '</p><p>')
        // Line breaks
        .replace(/\n/g, '<br>');
}

// Render about page
function renderAbout() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    const formattedContent = formatText(aboutContent);

    container.innerHTML = `
        <article class="post-content">
            <p>${formattedContent}</p>
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
            ${featuredPosts.map(post => {
                const year = new Date(post.date).getFullYear();
                return `
                    <a href="?post=${post.id}" class="project-card">
                        <div class="project-image">
                            <img src="${post.featuredImage}" alt="${post.title}" loading="lazy">
                        </div>
                        <div class="project-info">
                            <h2 class="project-title">${post.title}</h2>
                            <div class="project-category">${post.category}</div>
                            <div class="project-year">${year}</div>
                        </div>
                    </a>
                `;
            }).join('')}
        </div>
    `;

    updateNavActive('home');
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
            <div class="filter-pills">
                <button class="filter-pill ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">
                    All <span class="pill-count">${categoryCounts.all}</span>
                </button>
                ${categories.map(cat => `
                    <button class="filter-pill ${currentFilter === cat ? 'active' : ''}" data-filter="${cat}">
                        ${cat} <span class="pill-count">${categoryCounts[cat]}</span>
                    </button>
                `).join('')}
            </div>
        </div>
        <div class="projects-grid">
            ${filteredPosts.map(post => {
                const year = new Date(post.date).getFullYear();
                return `
                    <a href="?post=${post.id}" class="project-card">
                        <div class="project-image">
                            <img src="${post.featuredImage}" alt="${post.title}" loading="lazy">
                        </div>
                        <div class="project-info">
                            <h2 class="project-title">${post.title}</h2>
                            <div class="project-category">${post.category}</div>
                            <div class="project-year">${year}</div>
                        </div>
                    </a>
                `;
            }).join('')}
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
        // Load content from markdown file
        // Use absolute path from root to ensure it works on all hosting platforms
        const contentPath = post.contentFile.startsWith('/') ? post.contentFile : `/${post.contentFile}`;
        const response = await fetch(contentPath);
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        const content = await response.text();
        const formattedContent = formatText(content);

        container.innerHTML = `
            <a href="?" class="back-link">← Back</a>
            <article class="post-content">
                <h1>${post.title}</h1>
                <div class="meta">${formatDate(post.date)}</div>
                <p>${formattedContent}</p>
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
