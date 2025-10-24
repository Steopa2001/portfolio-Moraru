export default function Footer({ year }) {
  return (
    <footer className="py-4 bg-white border-top">
      <div className="container small text-muted d-flex flex-wrap gap-2 justify-content-between align-items-center">
        <span>© {year} Moraru Stefan • Portfolio Front-End Developer</span>
        <a href="#home" className="link-secondary text-decoration-none">
          Torna su ↑
        </a>
      </div>
    </footer>
  );
}
