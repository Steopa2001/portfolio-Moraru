import Footer from "./components/Footer.jsx";
import Homepage from "./pages/Homepage.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { useEffect, useState } from "react";
import { SITE_TEXT } from "./data/translations.js";


export default function App() {
  const year = new Date().getFullYear();
  const [language, setLanguage] = useState("it");
  const text = SITE_TEXT[language] || SITE_TEXT.it;

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    if (savedLanguage && SITE_TEXT[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  useEffect(() => {
    if (!window.location.hash) return;

    let raf1 = 0;
    let raf2 = 0;

    const alignHashTarget = () => {
      const target = document.querySelector(window.location.hash);
      if (!target) return;

      const anchorOffset = parseFloat(
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--anchor-offset"),
      );
      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        (Number.isFinite(anchorOffset) ? anchorOffset : 96);

      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    };

    raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(alignHashTarget);
    });

    return () => {
      if (raf1) window.cancelAnimationFrame(raf1);
      if (raf2) window.cancelAnimationFrame(raf2);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    let rafId = 0;
    let currentProgress = 0;
    let targetProgress = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const readProgress = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      return Math.min(window.scrollY / maxScroll, 1);
    };

    const render = () => {
      currentProgress += (targetProgress - currentProgress) * 0.085;
      currentMouseX += (targetMouseX - currentMouseX) * 0.11;
      currentMouseY += (targetMouseY - currentMouseY) * 0.11;

      if (Math.abs(targetProgress - currentProgress) < 0.00035) {
        currentProgress = targetProgress;
      }
      if (Math.abs(targetMouseX - currentMouseX) < 0.00035) {
        currentMouseX = targetMouseX;
      }
      if (Math.abs(targetMouseY - currentMouseY) < 0.00035) {
        currentMouseY = targetMouseY;
      }

      const intensity = 1 - (1 - currentProgress) ** 1.7;
      root.style.setProperty("--scroll-progress", currentProgress.toFixed(4));
      root.style.setProperty("--fx-intensity", intensity.toFixed(4));
      root.style.setProperty("--mouse-x", currentMouseX.toFixed(4));
      root.style.setProperty("--mouse-y", currentMouseY.toFixed(4));

      if (
        currentProgress !== targetProgress ||
        currentMouseX !== targetMouseX ||
        currentMouseY !== targetMouseY
      ) {
        rafId = window.requestAnimationFrame(render);
      } else {
        rafId = 0;
      }
    };

    const requestRender = () => {
      targetProgress = readProgress();
      if (!rafId) rafId = window.requestAnimationFrame(render);
    };

    const updateMouseTarget = (clientX, clientY) => {
      const nx = clientX / window.innerWidth - 0.5;
      const ny = clientY / window.innerHeight - 0.5;
      targetMouseX = Math.max(-0.5, Math.min(0.5, nx));
      targetMouseY = Math.max(-0.5, Math.min(0.5, ny));
      requestRender();
    };

    requestRender();
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      root.style.removeProperty("--scroll-progress");
      root.style.removeProperty("--fx-intensity");
      root.style.removeProperty("--mouse-x");
      root.style.removeProperty("--mouse-y");
    };

    function onPointerMove(e) {
      updateMouseTarget(e.clientX, e.clientY);
    }

    function onPointerLeave() {
      targetMouseX = 0;
      targetMouseY = 0;
      requestRender();
    }
  }, []);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!supportsFinePointer.matches || prefersReducedMotion.matches) return;

    const tiltSelector =
      ".project-card, .path-card, .cert-card2, .stack-item, .contact-card, .about-3d-card";
    let activeCard = null;
    let rafId = 0;
    let lastClientX = 0;
    let lastClientY = 0;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const resetCard = (card) => {
      card.classList.remove("is-tilting");
      card.style.removeProperty("--tilt-rx");
      card.style.removeProperty("--tilt-ry");
      card.style.removeProperty("--tilt-glow-x");
      card.style.removeProperty("--tilt-glow-y");
      card.style.removeProperty("--tilt-lift");
      card.style.removeProperty("--tilt-scale");
    };

    const updateCard = (card, clientX, clientY) => {
      const rect = card.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const px = clamp((clientX - rect.left) / rect.width, 0, 1);
      const py = clamp((clientY - rect.top) / rect.height, 0, 1);
      const rotateX = (0.5 - py) * 9;
      const rotateY = (px - 0.5) * 11;

      card.style.setProperty("--tilt-rx", `${rotateX.toFixed(2)}deg`);
      card.style.setProperty("--tilt-ry", `${rotateY.toFixed(2)}deg`);
      card.style.setProperty("--tilt-glow-x", `${(px * 100).toFixed(2)}%`);
      card.style.setProperty("--tilt-glow-y", `${(py * 100).toFixed(2)}%`);
      card.style.setProperty("--tilt-lift", "6px");
      card.style.setProperty("--tilt-scale", "1.012");
    };

    const flushTilt = () => {
      rafId = 0;
      if (!activeCard) return;
      updateCard(activeCard, lastClientX, lastClientY);
    };

    const syncActiveCard = (eventTarget) => {
      const source = eventTarget instanceof Element ? eventTarget : null;
      const nextCard = source ? source.closest(tiltSelector) : null;
      if (nextCard === activeCard) return;

      if (activeCard) {
        resetCard(activeCard);
      }
      activeCard = nextCard;
      if (activeCard) {
        activeCard.classList.add("is-tilting");
      }
    };

    const onPointerMove = (e) => {
      syncActiveCard(e.target);
      if (!activeCard) return;

      lastClientX = e.clientX;
      lastClientY = e.clientY;
      if (!rafId) {
        rafId = window.requestAnimationFrame(flushTilt);
      }
    };

    const clearActiveCard = () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
      if (activeCard) {
        resetCard(activeCard);
        activeCard = null;
      }
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", clearActiveCard);
    window.addEventListener("blur", clearActiveCard);

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", clearActiveCard);
      window.removeEventListener("blur", clearActiveCard);
      clearActiveCard();
    };
  }, []);

  return (
    <>
      <div className="scroll-beam" aria-hidden="true">
        <div className="scroll-beam-fill"></div>
      </div>
      <div className="bg-grain" aria-hidden="true"></div>
      <main>
        <Homepage
          language={language}
          onLanguageChange={setLanguage}
          headerText={text.header}
          text={text.homepage}
        />
      </main>
      <BackToTop text={text.backToTop} />
      <Footer year={year} text={text.footer} />
    </>
  );
}
