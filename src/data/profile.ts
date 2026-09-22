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
  siteName: "Vinicius Furlan — Software Engineer",

  /** Also feeds the logo mark in the header, via its initials */
  name: "Vinicius Furlan",
  /** The line right under your name in the hero */
  role: "Software Engineer",
  /** One or two sentences. Keep it concrete — what you build and what you care about. */
  tagline:
    "Software engineer with 5+ years building interactive applications and games in C# and Unity. I currently work on real-time 3D medical imaging — turning volumetric scan data into something you can pick up and explore.",

  location: "Campinas, Brazil",
  /** Set to null to hide the availability pill in the hero */
  availability: "Open to new opportunities" as string | null,

  email: "mr.furlan98@gmail.com",

  /** Put resume.pdf in /public and this link works as-is. Set to null to hide the button. */
  resumeUrl: null as string | null,

  /** Paragraphs for the About section */
  about: [
    "I'm a software engineer with over five years of experience building interactive applications and games, mostly in C# and Unity. I hold a degree in Computer Engineering from UTFPR, with an exchange year at the University of Porto, and I'm finishing a postgraduate program in Full Stack Development.",
    "Right now I work on BioAtlas at Medical Harbour, a Unity application that renders volumetric medical data as interactive 3D — slicing, measurement and annotation tools that let a clinician explore a scan instead of paging through flat images. Before that I spent three years on mobile games at Kool Games Studio, including one that passed 100,000 downloads.",
    "The through-line is real-time systems that have to stay responsive under constraints: shaders and rendering, asset streaming, and performance work across WebGL and mobile. I also care about the architecture underneath — reusable systems and internal tools that keep a project maintainable after the first release.",
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/MrFurlan98", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vrfurlan/",
      icon: "linkedin",
    },
    { label: "Email", href: "mailto:mr.furlan98@gmail.com", icon: "mail" },
  ] as SocialLink[],
};

/** Grouped skills shown in the Stack section. Rename, reorder or delete freely. */
export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["C#", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Engines & Frameworks",
    items: [
      "Unity",
      ".NET",
      "Netcode for GameObjects",
      "Addressables",
      "AssetBundles",
    ],
  },
  {
    title: "3D & Graphics",
    items: [
      "Real-time 3D",
      "URP",
      "Shaders",
      "Rendering",
      "Performance optimization",
    ],
  },
  {
    title: "Platforms",
    items: ["WebGL", "Android", "iOS"],
  },
  {
    title: "Backend & APIs",
    items: ["REST APIs", "Authentication", "Firebase", "Node.js"],
  },
  {
    title: "Tools & Practices",
    items: ["Git", "CI/CD", "GitHub Actions", "Unit testing", "React", "Vite"],
  },
];

/** Shown beside Education. Levels are CEFR, as on the CV. */
export const languages: { name: string; level: string }[] = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "B2" },
];
