/**
 * Everything personal about the site lives here.
 * Edit this file to update the hero, about section, socials and contact details.
 */

export type SocialLink = {
  label: string;
  href: string;
  /** Key used to pick the icon in src/components/Icon.tsx */
  icon: "github" | "linkedin" | "mail" | "x" | "globe";
};

export const profile = {
  /** Shown in the browser tab and in structured data */
  siteName: "Vinicius Furlan — Software Developer",

  /** Also feeds the logo mark in the header, via its initials */
  name: "Vinicius Furlan",
  /** The line right under your name in the hero */
  role: "Software Developer",
  /** One or two sentences. Keep it concrete — what you build and what you care about. */
  tagline:
    "I build games and the tools around them — multiplayer systems in Unity, and planners that turn a messy problem into something you can actually see.",

  location: "Brazil",
  /** Set to null to hide the availability pill in the hero */
  availability: "Open to new opportunities" as string | null,

  email: "mr.furlan98@gmail.com",

  /** Put resume.pdf in /public and this link works as-is. Set to null to hide the button. */
  resumeUrl: null as string | null,

  /** Paragraphs for the About section */
  about: [
    "I'm a developer working across game development and full-stack web, currently finishing a postgraduate degree in Full Stack Development.",
    "Most of what I build comes out of wanting the thing to exist: a multiplayer party game my friends could join from a browser with a room code, or a battle planner for a game mode where one bad turn ends the run. The interesting part is usually the architecture underneath — keeping game rules in plain, testable code that doesn't depend on the engine around it.",
    "Lately I've been working with Unity 6 and Netcode for GameObjects on the game side, and JavaScript and TypeScript on the web side.",
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/MrFurlan98", icon: "github" },
    // TODO: add your LinkedIn, or delete this line if you'd rather not link it.
    // { label: "LinkedIn", href: "https://linkedin.com/in/YOUR_HANDLE", icon: "linkedin" },
    { label: "Email", href: "mailto:mr.furlan98@gmail.com", icon: "mail" },
  ] as SocialLink[],
};

/** Grouped skills shown in the Stack section. Rename, reorder or delete freely. */
export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["C#", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "Game Development",
    items: [
      "Unity 6",
      "Netcode for GameObjects",
      "Unity Relay",
      "WebGL builds",
      "uGUI / TextMeshPro",
    ],
  },
  {
    title: "Web",
    items: ["React", "Vite", "Node.js", "REST APIs", "Canvas API"],
  },
  {
    title: "Practices",
    items: [
      "Git",
      "GitHub Actions",
      "Unit testing",
      "Layered architecture",
      "C4 Model",
    ],
  },
];
