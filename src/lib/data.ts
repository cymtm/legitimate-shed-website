
import type { Game, App } from "./definitions";

// To add a new game, add a new object to this array.
// The slug should be unique and will be used in the URL.
export const games: Game[] = [
  {
    slug: "warrenwalker",
    title: "@cymtm/Warrenwalker",
    description: "Experience the adventure with Warren Walker, an engaging interactive game experience.",
    imageUrl: "/assets/game-warrenwalker.png",
    gameUrl: "https://cymtm.github.io/warrenwalker/",
    imageHint: "An adventure-themed game interface featuring Warren Walker character in an engaging environment"
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
