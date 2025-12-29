# How to Add New Projects

Adding a new project to your portfolio is simple. You need to create a content file and add it to your project list.

## Step-by-Step:

### 1. Create Your Content File

1. Go to the `projects` folder
2. Copy the file called `_TEMPLATE.md` and rename it (like `my-project.md`)
3. Open your new file in any text editor
4. Fill in your case study content using the template as a guide
5. Save the file

**Tip:** Use the template sections that make sense for your project. You don't need to use all of them!

### 2. Add to Project List

1. Open `script.js` in a text editor
2. Find the posts section at the top - it looks like this:
   ```javascript
   const posts = [
       {
           id: 1,
           title: "Project Name",
           category: "Branding",
           date: "2025-12-29",
           featuredImage: "images/project.jpg",
           contentFile: "projects/project-name.md"
       }
   ];
   ```

3. Add your project by copying this and pasting it AFTER the first post:
   ```javascript
   ,
   {
       id: 2,
       title: "Your Project Title",
       category: "Design",
       date: "2025-12-29",
       featuredImage: "images/your-project/hero.jpg",
       contentFile: "projects/my-project.md"
   }
   ```

4. **Important:**
   - Each project needs a unique `id` number (1, 2, 3, etc.)
   - **category**: Choose from "Branding", "Concept", "Design", "Development", or create your own
   - **featuredImage**: Path to the hero image shown in the grid
   - **contentFile**: Path to your markdown file in the projects folder
   - The date format is YYYY-MM-DD (like 2025-12-29)
   - Don't forget the comma `,` before each new project

## Example with Multiple Projects:

```javascript
const posts = [
    {
        id: 1,
        title: "Brand Refresh 2024",
        category: "Branding",
        date: "2024-11-15",
        featuredImage: "images/brand-refresh/hero.jpg",
        contentFile: "projects/brand-refresh.md"
    },
    {
        id: 2,
        title: "Mobile App Design",
        category: "Design",
        date: "2024-10-20",
        featuredImage: "images/mobile-app/hero.jpg",
        contentFile: "projects/mobile-app.md"
    },
    {
        id: 3,
        title: "Portfolio Concept",
        category: "Concept",
        date: "2024-09-10",
        featuredImage: "images/portfolio/hero.jpg",
        contentFile: "projects/portfolio.md"
    }
];
```

## Organizing Your Images

**Recommended folder structure:**

```
Website/
  images/
    project-name/
      hero.jpg          (featured image for grid)
      challenge.jpg
      research.jpg
      sketches.jpg
      final.jpg
      etc.
```

This keeps each project's images organized together!

## Adding Media (Images, Videos, Lottie)

### Images

Add images using this format:
```
![Description of image](path/to/image.jpg)
```

**Two ways to use images:**

1. **Store locally:** Create an `images` folder in your Website folder, put your images there
   ```
   ![My photo](images/photo.jpg)
   ```

2. **Use URLs:** Use any image URL from the web
   ```
   ![My photo](https://example.com/photo.jpg)
   ```

### YouTube Videos

To embed a YouTube video, find the video ID (the part after `v=` in the URL) and use:
```
[youtube:VIDEO_ID]
```

Example: For `https://youtube.com/watch?v=dQw4w9WgXcQ`
```
[youtube:dQw4w9WgXcQ]
```

### Vimeo Videos

For Vimeo videos, use the video ID:
```
[vimeo:VIDEO_ID]
```

Example: For `https://vimeo.com/123456789`
```
[vimeo:123456789]
```

### Lottie Animations

To add a Lottie animation, you need the URL to a `.json` Lottie file:
```
[lottie:https://assets.example.com/animation.json]
```

You can find free Lottie animations at [LottieFiles.com](https://lottiefiles.com)

### Example Post with Media

```javascript
{
    id: 2,
    title: "My Visual Post",
    date: "2025-12-29",
    content: `Here's a cool photo I took:

![Sunset photo](images/sunset.jpg)

And here's a video I made:

[youtube:dQw4w9WgXcQ]

Check out this animation:

[lottie:https://assets.example.com/animation.json]`
}
```

## That's it!

Save the file, refresh your browser, and your new post will appear on the homepage. Posts are automatically sorted by date, with newest first.
