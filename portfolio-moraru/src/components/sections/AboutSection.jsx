import useReveal from "../../hooks/useReveal";

export default function AboutSection({ about }) {
  const [aboutRef, aboutVisible] = useReveal();

  return (
    <section id="about" className="py-5">
      <div
        ref={aboutRef}
        className={`container reveal ${aboutVisible ? "is-visible" : ""}`}
      >
        <div className="about-plain">
          <p className="about-kicker text-uppercase mb-2">{about.kicker}</p>
          <h2 className="h3 fw-bold mb-3">{about.title}</h2>
          <p className="text-muted mb-3">{about.description}</p>
          <div className="about-tech">
            {about.tech.map((tech) => (
              <span key={tech} className="about-tech-pill">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
