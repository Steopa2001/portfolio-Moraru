import { useEffect, useState } from "react";
import { LANGUAGE_OPTIONS } from "../data/translations.js";

export default function LanguageSwitcher({ language, onLanguageChange, headerText, wrapperClassName }) {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const currentLanguage =
    LANGUAGE_OPTIONS.find((option) => option.code === language) ||
    LANGUAGE_OPTIONS[0];

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

  return (
    <div className={`lang-menu ${wrapperClassName}`}>
      <button
        type="button"
        className={`lang-menu-toggle ${isLangMenuOpen ? "open" : ""}`}
        onClick={() => setIsLangMenuOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={isLangMenuOpen}
        aria-label={headerText.languageSwitcherAriaLabel}
        title={currentLanguage.label}
      >
        <span className="lang-menu-flag" aria-hidden="true">
          {currentLanguage.flag}
        </span>
        <span className="lang-menu-code">{currentLanguage.short}</span>
        <i className="fa-solid fa-chevron-down lang-menu-caret" aria-hidden="true"></i>
      </button>

      {isLangMenuOpen && (
        <div className="lang-menu-list" role="menu" aria-label={headerText.languageSwitcherAriaLabel}>
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
}
