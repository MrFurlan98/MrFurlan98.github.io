/** Sections in page order. Drives both the nav and the numbered headings. */
export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
] as const;

export const sectionIds = sections.map((s) => s.id);

/** Zero-padded index used in the nav and section headings, e.g. "02". */
export function sectionNumber(id: string): string {
  const index = sections.findIndex((s) => s.id === id);
  return String(index + 1).padStart(2, "0");
}
