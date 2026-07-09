import useReveal, { useRevealItems } from "../../hooks/useReveal";

export default function PathSection({ path }) {
  const [pathRef, pathVisible] = useReveal();
  const [pathItemRef, pathItemsVisible] = useRevealItems();

  return (
    <section id="path" className="py-5">
      <div
        ref={pathRef}
        className={`container reveal ${pathVisible ? "is-visible" : ""}`}
      >
        <div className="d-flex flex-column align-items-center text-center gap-2 mb-4">
          <div>
            <h2 className="h3 fw-bold mb-1">{path.title}</h2>
            <p className="text-muted mb-0">{path.subtitle}</p>
          </div>
        </div>

        <div className="path-timeline">
          {/* School */}
          <article
            ref={pathItemRef(0)}
            className={`path-item ${pathItemsVisible.has(0) ? "in-view" : ""}`}
          >
            <div className="path-dot" aria-hidden="true"></div>
            <div className="path-card">
              <div className="d-flex flex-wrap justify-content-between gap-2 mb-2">
                <span className="badge text-bg-light border">{path.school.period}</span>
                <span className="text-muted small">{path.school.meta}</span>
              </div>
              <h3 className="h5 mb-1">{path.school.title}</h3>
              <p className="text-muted mb-0">{path.school.description}</p>
            </div>
          </article>

          {/* Minuterie 3M */}
          <article
            ref={pathItemRef(1)}
            className={`path-item ${pathItemsVisible.has(1) ? "in-view" : ""}`}
          >
            <div className="path-dot" aria-hidden="true"></div>
            <div className="path-card">
              <div className="d-flex flex-wrap justify-content-between gap-2 mb-2">
                <span className="badge text-bg-light border">{path.work.period}</span>
                <span className="text-muted small">{path.work.meta}</span>
              </div>
              <h3 className="h5 mb-1">{path.work.title}</h3>
              <p className="text-muted mb-2">{path.work.description}</p>
              <ul className="path-list">
                {path.work.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          {/* Boolean */}
          <article
            ref={pathItemRef(2)}
            className={`path-item ${pathItemsVisible.has(2) ? "in-view" : ""}`}
          >
            <div className="path-dot" aria-hidden="true"></div>
            <div className="path-card">
              <div className="d-flex flex-wrap justify-content-between gap-2 mb-2">
                <span className="badge text-bg-light border">{path.booleanCourse.period}</span>
                <span className="text-muted small">{path.booleanCourse.meta}</span>
              </div>
              <h3 className="h5 mb-1">{path.booleanCourse.title}</h3>
              <p className="text-muted mb-2">{path.booleanCourse.description}</p>
              <ul className="path-list">
                {path.booleanCourse.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          {/* Beaver Lab */}
          <article
            ref={pathItemRef(3)}
            className={`path-item ${pathItemsVisible.has(3) ? "in-view" : ""}`}
          >
            <div className="path-dot" aria-hidden="true"></div>
            <div className="path-card">
              <div className="d-flex flex-wrap justify-content-between gap-2 mb-2">
                <span className="badge text-bg-light border">{path.beaverLab.period}</span>
                <span className="text-muted small">{path.beaverLab.meta}</span>
              </div>
              <h3 className="h5 mb-1">{path.beaverLab.title}</h3>
              <p className="text-muted mb-2">{path.beaverLab.description}</p>
              <ul className="path-list">
                {path.beaverLab.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
