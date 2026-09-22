/**
 * Professional experience, newest first.
 *
 * This is the section recruiters read first, so keep `highlights` concrete:
 * what you built, what it was for, and what changed because of it. Numbers
 * beat adjectives.
 */

export type Role = {
  /** Stable id, used as the React key */
  id: string;
  company: string;
  /** Company website, or null for no link */
  companyUrl?: string | null;
  role: string;
  /** e.g. "Mar 2024" */
  start: string;
  /** e.g. "Present" */
  end: string;
  /** e.g. "Remote" or "Campinas, BR". Optional. */
  location?: string;
  /** One line of context: what the company does, or the scope of your role. */
  summary?: string;
  /** 2–5 bullets. What you built and what it achieved. */
  highlights: string[];
  /** Tech used in this role */
  tags: string[];
  /** Anything public you can point at — a live product, a case study, a repo. */
  links?: { label: string; href: string }[];
};

export const experience: Role[] = [
  {
    id: "medical-harbour",
    company: "Medical Harbour",
    companyUrl: "https://medicalharbour.com",
    role: "Software Engineer",
    start: "2025",
    end: "Present",
    summary:
      "Building BioAtlas, a Unity-based 3D medical imaging application for exploring volumetric scan data interactively.",
    highlights: [
      "Develop BioAtlas, a Unity application that renders volumetric medical data as interactive 3D, so clinicians can explore a scan rather than page through flat slices.",
      "Built the interactive toolset on top of it — slicing, measurements, annotations, adjustable visualization parameters and custom rendering.",
      "Own the application architecture and UI systems across both WebGL and mobile, keeping one codebase viable on two very different runtime budgets.",
      "Integrated REST APIs, authentication flows, asynchronous content loading and per-user application data.",
      "Work across Unity Addressables, AssetBundles, URP, shaders and performance optimization, plus reusable systems and internal tools that keep the project maintainable.",
    ],
    tags: ["C#", "Unity", "Shaders", "Real-time 3D", "WebGL", "REST APIs"],
    // BioAtlas ships on web, Android and iOS from the one codebase — the three
    // links are the clearest evidence of the cross-platform work above.
    links: [
      { label: "Try BioAtlas", href: "https://bioatlas.medicalharbour.com/" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.medicalharbour.bioatlas",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/bioatlas-for-institutions/id1632056156",
      },
    ],
  },
  {
    id: "kool-games",
    company: "Kool Games Studio",
    companyUrl: null,
    role: "Software Engineer / Game Developer",
    start: "2022",
    end: "2025",
    summary:
      "Mobile games and the internal tooling behind them.",
    highlights: [
      "Contributed to My Amusement Park, which passed 100,000 downloads on Google Play.",
      "Designed and implemented gameplay systems, UI, progression and the reusable architecture underneath them.",
      "Integrated analytics, monetization and backend services — Firebase, AppLovin MAX and REST APIs.",
      "Built tools and workflows for content creation and level generation, shortening the loop between designers and a playable build.",
      "Optimized runtime performance and memory across a wide spread of mobile hardware.",
    ],
    tags: ["C#", "Unity", "Addressables", "Firebase", "Mobile", "Analytics"],
    // The game is still live on iOS, now published by Coco Play — same title,
    // same store copy, and still shipping under the original
    // com.koolgames.myamusementpark bundle id. The Android listing was
    // delisted, so that one points at an archive: it's what evidences the
    // 100K+ downloads under Kool Games Studio.
    links: [
      {
        label: "My Amusement Park on the App Store",
        href: "https://apps.apple.com/us/app/my-amusement-park/id6474623706",
      },
      {
        label: "Original Play Store listing (archived)",
        href: "https://web.archive.org/web/20250104163654/https://play.google.com/store/apps/details?id=com.koolgames.myamusementpark",
      },
    ],
  },
];
