import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function Header({ text, language, onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const ids = ["home", "about", "path", "projects", "contact"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );

        setActive(topMost.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = () => {
      setIsScrolled(window.scrollY > 120);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const navItems = [
    { id: "about", label: text.nav.about },
    { id: "projects", label: text.nav.projects },
    { id: "contact", label: text.nav.contact },
  ];

  return (
    <nav className={`hero-nav ${isScrolled ? "is-scrolled" : ""}`}>
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
        <div className="hero-lang-mobile-only">
          <LanguageSwitcher
            language={language}
            onLanguageChange={onLanguageChange}
            headerText={text}
            wrapperClassName="hero-lang-switch"
          />
        </div>
      </div>
    </nav>
  );
}
