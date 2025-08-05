# How to Upload Your Game to Legitimate Shed Website

Welcome to the Legitimate Shed Devs community! This guide will walk you through the process of adding your web game to our website.

## How Games Are Displayed

Currently, games are displayed as cards on the `/games` page in a responsive grid layout. When users click on a game card, they are redirected directly to the `gameUrl` (your hosted game) in the same tab. 

**Note**: Individual game pages (like `/games/your-slug`) are not currently implemented, but the `slug` field is reserved for future functionality. For now, focus on having a great `gameUrl` that provides the full game experience.

## Prerequisites

Before uploading your game, make sure you have:

- A web-based game (HTML5, JavaScript, WebGL, etc.) that runs in a browser
- Game hosted on a publicly accessible URL (GitHub Pages, itch.io, your own server, etc.)
- A preview image for your game (recommended: 600x400px, PNG or JPG)
- Basic knowledge of Git and GitHub (for contributing to the repository)

## Step-by-Step Upload Process

### 1. Prepare Your Game

Ensure your game is:
- **Web-compatible**: Runs in modern browsers without plugins
- **Publicly hosted**: Accessible via a direct URL
- **Mobile-friendly**: Responsive design is recommended
- **Tested**: Works across different browsers and devices

### 2. Prepare Your Assets

You'll need:
- **Game URL**: Direct link to play your game
- **Preview Image**: A screenshot or promotional image
  - Recommended size: 600x400px
  - Formats: PNG, JPG, or WebP
  - Host on a reliable service (GitHub, Imgur, etc.)
- **Game Information**: Title, description, and a unique identifier

### 3. Fork and Clone the Repository

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/legitimate-shed-website.git
   cd legitimate-shed-website
   ```

### 4. Add Your Game to the Data File

Open `src/lib/data.ts` and add your game to the `games` array:

```typescript
export const games: Game[] = [
  {
    slug: "your-game-slug",                    // Unique identifier (URL-friendly)
    title: "Your Amazing Game",                // Display name
    description: "A brief description of your game that entices players to try it.", // Short description
    imageUrl: "https://example.com/your-game-preview.png", // Preview image URL
    gameUrl: "https://your-game-site.com/play",           // Direct link to play
    imageHint: "Screenshot showing the main gameplay"      // Alt text for accessibility
  },
  // Add your game object here, keeping any existing games
];
```

#### Field Explanations

- **`slug`**: A unique, URL-friendly identifier (lowercase, hyphens instead of spaces)
  - Example: `"space-adventure"`, `"puzzle-master"`
  - Currently used in the card links but no individual game pages exist yet
  - Reserve this for future individual game page functionality
  
- **`title`**: The display name of your game
  - Keep it concise but descriptive
  - Example: `"Space Adventure RPG"`

- **`description`**: A brief, engaging description
  - 1-2 sentences that make players want to try your game
  - Focus on what makes your game fun or unique

- **`imageUrl`**: Direct URL to your preview image
  - Must be publicly accessible
  - Recommended: 600x400px aspect ratio
  - Good services: GitHub (raw file URL), Imgur, or your own hosting

- **`gameUrl`**: Direct link where players can play your game
  - Should open directly to the game, not a landing page
  - Test this URL in an incognito browser window
  - Currently, clicking a game card redirects directly to this URL (external link)

- **`imageHint`**: Accessibility text describing the image
  - Helps screen readers understand what the image shows
  - Example: `"Screenshot of the player character jumping over obstacles"`

### 5. Test Your Changes Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:9002 in your browser

4. Navigate to the Games page and verify:
   - Your game appears in the grid
   - The preview image loads correctly  
   - The title and description display properly
   - Clicking the card redirects to your game URL (opens in a new tab)

### 6. Build and Verify

Test that your changes don't break the build:

```bash
npm run build
```

If the build succeeds, you're ready to submit your changes.

### 7. Submit Your Game

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Add [Your Game Name] to games collection"
   ```

2. Push to your fork:
   ```bash
   git push origin main
   ```

3. Create a Pull Request on GitHub with:
   - Clear title: "Add [Your Game Name]"
   - Description including game details and testing notes

## Best Practices

### Game Hosting
- **GitHub Pages**: Free, reliable, perfect for HTML5 games
- **itch.io**: Great for indie games with embed options
- **Netlify/Vercel**: Excellent for more complex web apps
- **Your own domain**: Full control but ensure good uptime

### Preview Images
- Use actual gameplay screenshots when possible
- Avoid text-heavy images (description field is for text)
- Ensure images look good at different sizes
- Use consistent aspect ratios (600x400px recommended)

### Descriptions
- Focus on gameplay and what makes your game unique
- Mention the genre (puzzle, platformer, RPG, etc.)
- Keep it under 200 characters for best display
- Use active, engaging language

### Slugs
- Use lowercase letters, numbers, and hyphens only
- Make it memorable and related to your game title
- Check existing games to avoid duplicates
- Example: "Super Mario Bros" → `"super-mario-bros"`

## Troubleshooting

### Common Issues

**Build fails after adding my game:**
- Check for syntax errors in `data.ts`
- Ensure all required fields are present
- Verify proper TypeScript syntax

**My game image doesn't load:**
- Verify the URL is publicly accessible
- Try the URL in an incognito browser window
- Check for HTTPS requirements (some hosting needs HTTPS)

**Game URL doesn't work:**
- Test the URL in a clean browser session
- Ensure it's a direct link to the game, not a landing page
- Check for any authentication or region restrictions

**My game doesn't appear:**
- Verify you added it to the correct array in `data.ts`
- Check the development console for JavaScript errors
- Ensure the slug is unique

### Getting Help

If you encounter issues:

1. Check the existing games in `data.ts` for reference
2. Review this guide for missed steps
3. Open an issue on GitHub with:
   - Description of the problem
   - Your game data object
   - Any error messages
   - Screenshots if relevant

## Example Game Entry

Here's a complete example of a well-formatted game entry:

```typescript
{
  slug: "retro-snake-game",
  title: "Retro Snake Adventure",
  description: "Classic snake game with modern twists, power-ups, and multiple levels. Collect apples and avoid obstacles!",
  imageUrl: "https://raw.githubusercontent.com/username/snake-game/main/screenshot.png",
  gameUrl: "https://username.github.io/snake-game/",
  imageHint: "Gameplay screenshot showing the snake eating an apple on a green grid"
}
```

## Contributing Beyond Games

Interested in contributing to the website itself? Check out:
- `src/app/games/page.tsx` - Games page layout
- `src/lib/definitions.ts` - Type definitions
- `README.md` - General project information

---

Happy gaming! 🎮

*Last updated: January 2025*
*For issues with this guide, please open a GitHub issue.*