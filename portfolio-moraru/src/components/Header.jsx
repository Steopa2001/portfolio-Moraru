import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          <i className="fa-solid fa-code me-2"></i>
          Moraru Stefan
        </a>

        {/* Bottone hamburger */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <i className="fa-solid fa-xmark fs-3"></i>
          ) : (
            <i className="fa-solid fa-bars fs-3"></i>
          )}
        </button>

        {/* Menu di navigazione */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="nav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-semibold">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={() => setIsOpen(false)}>
                Chi sono
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={() => setIsOpen(false)}>
                Progetti
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => setIsOpen(false)}>
                Contatti
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}