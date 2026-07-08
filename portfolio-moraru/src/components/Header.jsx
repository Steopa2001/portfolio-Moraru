import { useEffect, useState } from "react";

export default function Header({ text }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", "about", "projects", "contact"];

    const handler = () => {
      const y = window.scrollY + 120;

      let current = "home";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }

      setActive(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navItems = [
    { id: "about", label: text.nav.about },
    { id: "projects", label: text.nav.projects },
    { id: "contact", label: text.nav.contact },
  ];

  return (
    <nav className="hero-nav">
      <button
        type="button"
        className={`hero-nav-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="hero-nav-panel"
        aria-label={text.toggleNavigationLabel}
      >
        <span className="hero-nav-toggle-bar" aria-hidden="true"></span>
        <span className="hero-nav-toggle-bar" aria-hidden="true"></span>
        <span className="hero-nav-toggle-bar" aria-hidden="true"></span>
      </button>
      <div id="hero-nav-panel" className={`hero-nav-panel ${isOpen ? "show" : ""}`}>
        <ul className="hero-nav-list">
          {navItems.map((item) => (
            <li key={item.id} className="hero-nav-item">
              <a
                href={`#${item.id}`}
                className={`hero-nav-link ${active === item.id ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
