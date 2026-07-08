import { useEffect, useRef, useState } from "react";
import useReveal from "../../hooks/useReveal";

const BASE = import.meta.env.BASE_URL;

export default function HeroSection({ text }) {
  const [heroRef, heroVisible] = useReveal();
  const [typedHeroText, setTypedHeroText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [showWave, setShowWave] = useState(false);
  const hasStartedTyping = useRef(false);
  const lastGreetingRef = useRef(text.heroGreeting);

  useEffect(() => {
    if (lastGreetingRef.current !== text.heroGreeting) {
      hasStartedTyping.current = false;
      lastGreetingRef.current = text.heroGreeting;
    }
  }, [text.heroGreeting]);

  useEffect(() => {
    if (!heroVisible || hasStartedTyping.current) return;
    hasStartedTyping.current = true;
    setTypedHeroText("");
    setTypingDone(false);
    setShowWave(false);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedHeroText(text.heroGreeting);
      setTypingDone(true);
      setShowWave(true);
      return;
    }

    let charIndex = 0;
    let typingTimeoutId = 0;

    const getTypingDelay = (nextChar) => {
      if (nextChar === ",") return 190 + Math.random() * 90;
      if (nextChar === " ") return 80 + Math.random() * 40;
      return 42 + Math.random() * 82;
    };

    const typeNextChar = () => {
      charIndex += 1;
      setTypedHeroText(text.heroGreeting.slice(0, charIndex));
      if (charIndex >= text.heroGreeting.length) {
        setTypingDone(true);
        setShowWave(true);
        return;
      }
      const nextChar = text.heroGreeting.charAt(charIndex);
      typingTimeoutId = window.setTimeout(typeNextChar, getTypingDelay(nextChar));
    };

    const startId = window.setTimeout(() => typeNextChar(), 250);
    return () => {
      window.clearTimeout(startId);
      if (typingTimeoutId) window.clearTimeout(typingTimeoutId);
    };
  }, [text.heroGreeting, heroVisible]);

  const typedGreeting = typedHeroText.slice(0, text.greetingPrefix.length);
  const typedName = typedHeroText.slice(text.greetingPrefix.length);

  return (
    <header id="home" className="py-5 section-surface">
      <div className="hero-bg-decor" aria-hidden="true"></div>
      <div ref={heroRef} className="container py-4">
        <div className="row align-items-center g-4">
          <div className="img-col col-12 col-lg-5 text-center align-self-lg-end">
            <img
              className="stefan-img img-fluid"
              src={`${BASE}cv-image.webp`}
              alt={text.portraitAlt}
            />
          </div>

          <div className={`col-12 col-lg-7 reveal ${heroVisible ? "is-visible" : ""}`}>
            <p className="text-uppercase text-muted small mb-2">{text.role}</p>
            <h1
              className="display-5 fw-bold mb-3 hero-typing-title"
              aria-label={text.heroGreeting}
            >
              {typedGreeting}
              <span className={typedName ? "text-primary" : ""}>
                {typedName}
                {showWave && typedName && (
                  <span className="wave-emoji" aria-hidden="true"> 👋</span>
                )}
              </span>
              {!typingDone && (
                <span className="typing-cursor" aria-hidden="true">|</span>
              )}
            </h1>
            <p className="lead text-muted">{text.heroLead}</p>
            <div className="d-flex gap-3 mt-4">
              <a href="#projects" className="btn btn-primary">
                <i className="fa-solid fa-folder-open me-2"></i>
                {text.ctaProjects}
              </a>
              <a
                href="#"
                className="btn btn-outline-primary disabled"
                aria-disabled="true"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa-solid fa-file-arrow-down me-2"></i>
                {text.ctaDownloadCv}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
