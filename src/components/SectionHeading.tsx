import { sectionNumber } from "../data/sections";

type Props = {
  id: string;
  title: string;
  /** Contact uses a centered variant without the trailing rule */
  showRule?: boolean;
};

export function SectionHeading({ id, title, showRule = true }: Props) {
  return (
    <div className="section-head">
      <span className="index" aria-hidden="true">
        {sectionNumber(id)}.
      </span>
      <h2>{title}</h2>
      {showRule ? <span className="rule" aria-hidden="true" /> : null}
    </div>
  );
}
