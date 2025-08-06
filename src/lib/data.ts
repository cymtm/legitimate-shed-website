
import type { Game, App } from "./definitions";

// To add a new game, add a new object to this array.
// The slug should be unique and will be used in the URL.
export const games: Game[] = [
  {
    slug: "click-target",
    title: "Click Target Challenge",
    description: "Test your reflexes and precision in this fast-paced clicking game. Can you hit the moving target?",
    imageUrl: "/assets/game-click-target.png",
    gameUrl: "/game",
    imageHint: "A colorful game interface with a red circular target on a gradient background"
  },
  {
    slug: "memory-match",
    title: "Memory Match",
    description: "Challenge your memory with this classic card matching game. Flip cards to find matching pairs.",
    imageUrl: "/assets/game-memory.png",
    gameUrl: "/games/memory-match",
    imageHint: "A grid of face-down playing cards in a memory matching game layout"
  },
  {
    slug: "word-puzzle",
    title: "Word Puzzle Master",
    description: "Solve word puzzles and test your vocabulary. Find hidden words in letter grids.",
    imageUrl: "/assets/game-word-puzzle.png",
    gameUrl: "/games/word-puzzle",
    imageHint: "A letter grid with words highlighted in different colors"
  }
];

// To add a new app, add a new object to this array.
// The slug should be unique and will be used in the URL.
export const apps: App[] = [
  {
    slug: "task-manager",
    title: "Task Manager Pro",
    description: "Organize your tasks and boost productivity with our intuitive task management application.",
    imageUrl: "/assets/app-task-manager.png",
    appUrl: "/apps/task-manager",
    imageHint: "A clean task management interface with checkboxes, due dates, and priority levels"
  },
  {
    slug: "color-picker",
    title: "Color Palette Generator",
    description: "Generate beautiful color palettes for your design projects with our advanced color picker tool.",
    imageUrl: "/assets/app-color-picker.png",
    appUrl: "/apps/color-picker",
    imageHint: "A modern color picker interface with color wheel, hex codes, and palette swatches"
  },
  {
    slug: "text-formatter",
    title: "Text Formatter",
    description: "Format and transform text with various tools including case conversion, word count, and more.",
    imageUrl: "/assets/app-text-formatter.png",
    appUrl: "/apps/text-formatter",
    imageHint: "A text formatting interface with input and output areas and formatting options"
  }
];
