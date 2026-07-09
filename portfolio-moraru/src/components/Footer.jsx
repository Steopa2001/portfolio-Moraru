import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function Footer({ year, text, language, onLanguageChange, headerText }) {
  return (
    <footer className="py-4 border-top section-surface">
      <div className="container small text-muted d-flex flex-wrap gap-2 justify-content-between align-items-center site-3d site-3d-static">
        <span>
          © {year} Moraru Stefan • {text.portfolio}
        </span>
        <div className="footer-lang-desktop-only">
          <LanguageSwitcher
            language={language}
            onLanguageChange={onLanguageChange}
            headerText={headerText}
            wrapperClassName="footer-lang-switch"
          />
        </div>
      </div>
    </footer>
  );
}
