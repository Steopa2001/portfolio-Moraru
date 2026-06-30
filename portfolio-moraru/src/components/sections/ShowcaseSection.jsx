import { useState } from "react";
import useReveal, { useRevealItems } from "../../hooks/useReveal";
import { setCardGlow } from "../../utils/cardGlow";

const BASE = import.meta.env.BASE_URL;

export default function ShowcaseSection({ showcase, certificatesText }) {
  const [projectsRef, projectsVisible] = useReveal();
  const [projectItemRef, projectItemsVisible] = useRevealItems();
  const [showcaseTab, setShowcaseTab] = useState("projects");
  const [tabAnim, setTabAnim] = useState(true);

  const changeTab = (next) => {
    if (next === showcaseTab) return;
    setTabAnim(false);
    setShowcaseTab(next);
    requestAnimationFrame(() => setTabAnim(true));
  };

  return (
    <section id="projects" className="py-5 border-top border-bottom section-surface">
      <div
        ref={projectsRef}
        className={`container reveal ${projectsVisible ? "is-visible" : ""}`}
      >
        <div className="d-flex flex-column align-items-center text-center gap-3 mb-4">
          <div>
            <h2 className="h3 fw-bold mb-1">{showcase.title}</h2>
            <p className="text-muted mb-0">{showcase.subtitle}</p>
          </div>

          <div className="showcase-tabs d-flex flex-wrap gap-2 justify-content-center">
            {["projects", "certificates", "stack"].map((tab) => (
              <button
                key={tab}
                type="button"
                className={`btn btn-sm ${showcaseTab === tab ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => changeTab(tab)}
              >
                {showcase.tabs[tab]}
              </button>
            ))}
          </div>
        </div>

        <div className="showcase-panel">
          {showcaseTab === "projects" && (
            <div className={`reveal ${tabAnim ? "is-visible" : ""}`}>
              <div className="projects-layout">
                {showcase.projects.map((p, i) => (
                  <article
                    key={p.title}
                    ref={projectItemRef(i)}
                    className={`project-card project-mini ${projectItemsVisible.has(i) ? "in-view" : ""}`}
                    onMouseMove={setCardGlow}
                  >
                    <img
                      src={`${BASE}${p.image}`}
                      className="project-thumb project-mini-thumb"
                      alt={`Screenshot - ${p.title}`}
                    />
                    <div className="project-mini-body">
                      <h3 className="h5 card-title mb-2">{p.title}</h3>
                      <p className="text-muted small mb-3 project-mini-desc">{p.description}</p>
                      <div className="project-tags project-tags-mini mb-3">
                        {p.tech.map((t) => (
                          <span key={t} className="project-tag">{t}</span>
                        ))}
                      </div>
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm w-100"
                      >
                        {showcase.demo}
                      </a>
                    </div>
                  </article>
                ))}

                {Array.from({ length: Math.max(0, 3 - showcase.projects.length) }).map(
                  (_, idx) => {
                    const i = showcase.projects.length + idx;
                    return (
                      <article
                        key={`placeholder-${i}`}
                        ref={projectItemRef(i)}
                        className={`project-card project-mini project-placeholder ${projectItemsVisible.has(i) ? "in-view" : ""}`}
                        onMouseMove={setCardGlow}
                      >
                        <div className="project-placeholder-thumb">
                          <span className="project-placeholder-icon" aria-hidden="true">🚧</span>
                        </div>
                        <div className="project-mini-body d-flex flex-column align-items-center justify-content-center text-center gap-2 py-3">
                          <h3 className="h5 card-title mb-1">{showcase.placeholderTitle}</h3>
                          <p className="text-muted small mb-0">{showcase.placeholderDesc}</p>
                        </div>
                      </article>
                    );
                  },
                )}
              </div>
            </div>
          )}

          {showcaseTab === "certificates" && (
            <div className={`reveal ${tabAnim ? "is-visible" : ""}`}>
              <div className="row g-4">
                {[
                  {
                    title: "Boolean • Full-Stack Web Developer",
                    year: "2026",
                    img: `${BASE}Boolean-img.webp`,
                    file: `${BASE}Certificato-Boolean.pdf`,
                  },
                ].map((c) => (
                  <div className="col-12 col-md-6 col-lg-4" key={c.title}>
                    <div
                      className="project-card cert-card2 rounded-4 border shadow-sm h-100 overflow-hidden"
                      onMouseMove={setCardGlow}
                    >
                      <a
                        href={c.file}
                        target={c.file !== "#" ? "_blank" : undefined}
                        rel={c.file !== "#" ? "noreferrer" : undefined}
                        onClick={(e) => c.file === "#" && e.preventDefault()}
                        className="cert-media"
                        aria-label={`${certificatesText.openLabel} ${c.title}`}
                        title={`${certificatesText.openLabel} ${c.title}`}
                      >
                        <img src={c.img} alt={`${certificatesText.imageAlt}: ${c.title}`} />
                      </a>
                      <div className="p-4">
                        <div className="d-flex justify-content-between align-items-start gap-2">
                          <h3 className="h6 fw-bold mb-1">{c.title}</h3>
                          <span className="badge text-bg-light border">{c.year}</span>
                        </div>
                        <div className="d-flex gap-2 mt-3">
                          <a
                            className="btn btn-primary btn-sm"
                            href={c.file}
                            target={c.file !== "#" ? "_blank" : undefined}
                            rel={c.file !== "#" ? "noreferrer" : undefined}
                            onClick={(e) => c.file === "#" && e.preventDefault()}
                          >
                            {certificatesText.openPdf}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showcaseTab === "stack" && (
            <div className={`reveal ${tabAnim ? "is-visible" : ""}`}>
              <div className="stack-grid">
                {[
                  { alt: "HTML5", src: `${BASE}HTML5.png` },
                  { alt: "CSS3", src: `${BASE}CSS3.png` },
                  { alt: "JavaScript", src: `${BASE}Javascript.webp` },
                  { alt: "React", src: `${BASE}react.png` },
                  { alt: "Bootstrap", src: `${BASE}Bootstrap.png` },
                  { alt: "Tailwind", src: `${BASE}tailwindcss.png` },
                  { alt: "Node.js", src: `${BASE}NodeJS.png` },
                  { alt: "Express", src: `${BASE}express-log.png` },
                  { alt: "MySQL", src: `${BASE}mySQL.png` },
                  { alt: "Git", src: `${BASE}git.png` },
                ].map((t) => (
                  <div className="stack-item" key={t.alt} title={t.alt}>
                    <img src={t.src} alt={t.alt} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
