# Portfolio Website

A minimal, clean portfolio website with external content files for better organization.

## Structure

```
Website/
├── index.html              # Main HTML file
├── styles.css              # All styling
├── script.js               # Project list and rendering logic
├── netlify.toml            # Netlify configuration
├── HOW-TO-POST.md          # Guide for adding new projects
├── README.md               # This file
├── projects/               # Case study content files
│   ├── _TEMPLATE.md        # Copy this to start a new case study
│   ├── ringadindons.md
│   ├── gaben.md
│   ├── winter-leaves.md
│   ├── helltaker.md
│   └── welcome.md
└── images/                 # All images (organized by project)
    ├── ringadindons/
    │   ├── preview.png
    │   ├── 01.png
    │   └── 02.png
    ├── gaben/
    │   └── preview.png
    └── ...
```

## Pages

- **Home (/)** - Shows 4 featured projects
- **Projects (#projects)** - Full project grid with category filtering
- **About (#about)** - About section
- **Design System (#design-system)** - Visual design documentation

## Adding a New Project

1. **Create image folder:** `images/your-project/`
2. **Add preview image:** `images/your-project/preview.png` (or .jpg)
3. **Create content file:** Copy `projects/_TEMPLATE.md` → `projects/your-project.md`
4. **Write your case study** in the new markdown file
5. **Add project metadata** to the `posts` array in `script.js`:
   ```javascript
   {
       id: 6,  // Increment from last ID
       title: "Your Project",
       category: "Concept", // or "Writing"
       date: "2025-12-29",
       featuredImage: "images/your-project/preview.png",
       contentFile: "projects/your-project.md"
   }
   ```
6. **Upload to Netlify** - your project will appear on both home and projects pages!

## Why This Structure?

- **Organized:** Each case study is its own file
- **Clean:** `script.js` only has metadata
- **Easy to edit:** Just edit markdown files, no need to escape quotes or format carefully
- **Scalable:** Can handle dozens of detailed case studies without bloating `script.js`

## Markdown Features

Your case studies support:
- **Headings:** `## Heading`
- **Bold:** `**text**`
- **Italic:** `*text*`
- **Links:** `[text](url)`
- **Images:** `![alt](path)`
- **YouTube:** `[youtube:VIDEO_ID]`
- **Vimeo:** `[vimeo:VIDEO_ID]`
- **Lottie:** `[lottie:path.json]`

See `HOW-TO-POST.md` for full details.

## Design System

The site uses a consistent design system based on shadcn's zinc color palette. View it at `#design-system` to see all typography, colors, and components.