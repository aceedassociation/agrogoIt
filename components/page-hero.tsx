import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, intro, aside }: { eyebrow: string; title: ReactNode; intro: string; aside?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="section-shell page-hero-grid">
        <div><div className="eyebrow light"><span /> {eyebrow}</div><h1>{title}</h1><p>{intro}</p></div>
        {aside ? <div className="page-hero-aside">{aside}</div> : null}
      </div>
    </section>
  );
}
