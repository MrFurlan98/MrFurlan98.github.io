/**
 * Your projects. Order matters — the first ones are shown first.
 *
 * `featured: true` gives the project a large card at the top of the section.
 * Everything else renders in the compact grid below.
 */

export type Project = {
  /** Stable id, used as the React key */
  id: string;
  title: string;
  /** One line shown on the card. Lead with what it does, not what it's built with. */
  summary: string;
  /** Optional longer blurb shown on featured cards only */
  detail?: string;
  /** Tech tags — these also generate the filter buttons */
  tags: string[];
  /** Repository URL, or null if the code is private */
  repo: string | null;
  /** Live demo URL, or null */
  demo: string | null;
  /** Screenshot in /public/projects/<file>. Optional but strongly recommended. */
  image?: string;
  /**
   * Intrinsic pixel size of `image`. Used to reserve the right space while it
   * loads, so the card doesn't jump once it arrives. Defaults to 16:9 — set
   * both whenever your screenshot isn't that shape.
   */
  imageWidth?: number;
  imageHeight?: number;
  featured?: boolean;
  /** Free-text, e.g. "2025" or "2024 — present" */
  year?: string;
};

export const projects: Project[] = [
  {
    id: "color-guesser",
    title: "Adivinhe a Cor",
    summary:
      "An online multiplayer party game where players race to pinpoint a secret color from a one-word clue.",
    detail:
      "One player sees a secret color and gives a single-word hint; everyone else hunts for it across a grid of 480 shades, scoring on how close they land. Built on host-authoritative Netcode for GameObjects with Relay-backed room codes, so friends join over the web with nothing but a six-character code. The game rules live in a pure C# core behind a layered architecture, which keeps them independent of Unity and unit-testable.",
    tags: ["C#", "Unity", "Netcode", "Multiplayer", "WebGL"],
    repo: "https://github.com/MrFurlan98/ColorGuesser",
    demo: "https://mrfurlan98.github.io/ColorGuesserWebGL/",
    image: "/projects/adivinhe-a-cor.webp",
    imageWidth: 1600,
    imageHeight: 900,
    featured: true,
    year: "2026",
  },
  {
    id: "pk-line-planner",
    title: "Platinum Kaizo Line Planner",
    summary:
      "A visual planner for Nuzlocke battles, where one wrong move is permanent and every fight has to be worked out in advance.",
    detail:
      "In a Nuzlocke a faint is forever, so fights get planned rather than improvised. This adds a canvas to the Platinum Kaizo damage calculator where each turn is a card, joined by labelled arrows that branch when the plan goes off-script — with both movesets side by side, so a move is chosen by weighing what you can do against what's coming back. Built as a fork of the community calculator by anastarawneh.",
    tags: ["JavaScript", "Canvas", "Tooling"],
    repo: "https://github.com/MrFurlan98/pk-line-planner",
    demo: "https://mrfurlan98.github.io/pk-line-planner/",
    image: "/projects/pk-line-planner.webp",
    imageWidth: 1600,
    imageHeight: 1014,
    featured: true,
    year: "2026",
  },
];
