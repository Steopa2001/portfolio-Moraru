import projectsData from "../data/projects";
import { useEffect, useState } from "react";

const BASE = import.meta.env.BASE_URL;

export default function Homepage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* HERO */}
      <header id="home" className="py-5 bg-light">
        <div
          className={`container py-4 fade-section ${visible ? "visible" : ""}`}
        >
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-7">
              <p className="text-uppercase text-muted small mb-2">
                Junior Full‑Stack Web Developer
              </p>
              <h1 className="display-5 fw-bold mb-3">
                Ciao, sono <span className="text-primary">Moraru Stefan</span>{" "}
              </h1>
              <p className="lead text-muted">
                Full‑Stack Web Developer con focus sul front‑end. Lavoro con
                React, HTML, CSS e JavaScript per creare interfacce moderne e
                responsive, integrando applicazioni con API REST e back‑end in
                Node.js, Express e MySQL.
              </p>
              <div className="d-flex gap-3 mt-4">
                <a href="#projects" className="btn btn-primary">
                  <i className="fa-solid fa-folder-open me-2"></i>
                  Guarda i progetti
                </a>
                <a
                  href={`${BASE}cv-Stefan-Moraru-definitivo.pdf`}
                  className="btn btn-outline-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-file-arrow-down me-2"></i>
                  Scarica CV
                </a>
              </div>
            </div>
            <div className="img-col col-12 col-lg-5 text-center">
              <img
                className="stefan-img img-fluid rounded-4 shadow-sm"
                src={`${BASE}cv-image.png`}
                alt="Ritratto del developer"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="h3 fw-bold mb-3">Chi sono</h2>
          <p className="text-muted">
            Sono uno sviluppatore web junior con competenze full‑stack e un
            forte orientamento allo sviluppo front‑end. Mi occupo di creare
            applicazioni web responsive e accessibili, dalla UI all’integrazione
            con il back‑end. Ho completato un corso intensivo di 700 ore come
            Full‑Stack Web Developer con Boolean, durante il quale ho realizzato
            diversi progetti pratici utilizzando HTML, CSS, JavaScript, React
            per il front‑end e Node.js, Express e MySQL per il back‑end.
          </p>
          <div className="mt-4">
            <h3 className="h6 text-uppercase text-muted mb-3">Competenze</h3>
            <div className="d-flex flex-wrap gap-2">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "Bootstrap",
                "Node.js",
                "Express",
                "React",
                "MySQL",
                "Git/GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="badge rounded-pill text-bg-light border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-5 bg-light border-top border-bottom">
        <div className="container">
          <h2 className="h3 fw-bold mb-4">Progetti</h2>
          <div className="row g-4">
            {projectsData.map((p, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={p.image}
                    className="card-img-top"
                    alt={`Screenshot ${p.title}`}
                  />
                  <div className="card-body d-flex flex-column">
                    <h3 className="h5 card-title">{p.title}</h3>
                    <p className="card-text text-muted small flex-grow-1">
                      {p.description}
                    </p>
                    <div className="mb-3 d-flex flex-wrap gap-1">
                      {p.tech.map((t) => (
                        <span key={t} className="badge text-bg-light border">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm w-50"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                        Demo
                      </a>
                      <a
                        href={p.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-primary btn-sm w-50"
                      >
                        <i className="fa-brands fa-github me-2"></i>
                        Codice
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="h3 fw-bold mb-3">Contatti</h2>
          <p className="mb-4">Vuoi collaborare o hai domande? Scrivimi pure.</p>
          <div className="d-flex flex-wrap gap-3">
            <a
              className="btn btn-outline-dark"
              href="mailto:moraru495@gmail.com"
            >
              <i className="fa-solid fa-envelope me-2"></i>Email
            </a>
            <a
              className="btn btn-outline-dark"
              href="https://www.linkedin.com/in/stefan-moraru-6230641b8/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin me-2"></i>LinkedIn
            </a>
            <a
              className="btn btn-outline-dark"
              href="https://github.com/Steopa2001"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github me-2"></i>GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
