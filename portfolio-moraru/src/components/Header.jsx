import { useEffect, useState } from "react";
import { LANGUAGE_OPTIONS } from "../data/translations.js";

export default function Header({ language, onLanguageChange, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const currentLanguage =
    LANGUAGE_OPTIONS.find((option) => option.code === language) ||
    LANGUAGE_OPTIONS[0];

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

  useEffect(() => {
    const closeLanguageMenu = (event) => {
      if (!event.target.closest(".lang-menu")) {
        setIsLangMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsLangMenuOpen(false);
    };

    document.addEventListener("pointerdown", closeLanguageMenu);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", closeLanguageMenu);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleLanguageSelect = (nextLanguage) => {
    onLanguageChange(nextLanguage);
    setIsLangMenuOpen(false);
  };

  const renderLanguageMenu = (wrapperClassName) => (
    <div className={`lang-menu ${wrapperClassName}`}>
      <button
        type="button"
        className={`lang-menu-toggle ${isLangMenuOpen ? "open" : ""}`}
        onClick={() => setIsLangMenuOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={isLangMenuOpen}
        aria-label={text.languageSwitcherAriaLabel}
        title={currentLanguage.label}
      >
        <span className="lang-menu-flag" aria-hidden="true">
          {currentLanguage.flag}
        </span>
        <span className="lang-menu-code">{currentLanguage.short}</span>
        <i className="fa-solid fa-chevron-down lang-menu-caret" aria-hidden="true"></i>
      </button>

      {isLangMenuOpen && (
        <div className="lang-menu-list" role="menu" aria-label={text.languageSwitcherAriaLabel}>
          {LANGUAGE_OPTIONS.map((option) => (
            <button
              key={option.code}
              type="button"
              role="menuitemradio"
              aria-checked={language === option.code}
              className={`lang-menu-item ${language === option.code ? "active" : ""}`}
              onClick={() => handleLanguageSelect(option.code)}
            >
              <span className="lang-menu-flag" aria-hidden="true">
                {option.flag}
              </span>
              <span className="lang-menu-name">{option.label}</span>
              {language === option.code && (
                <i className="fa-solid fa-check lang-menu-check" aria-hidden="true"></i>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );

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
        {renderLanguageMenu("hero-lang-switch")}
      </div>
    </nav>
  );
}
