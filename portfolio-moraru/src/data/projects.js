const BASE = import.meta.env.BASE_URL;

const projectsData = [
  {
    title: "Spotify Clone",
    description:
      "Replica minimale dell’interfaccia di Spotify con responsive layout e player fittizio.",
    tech: ["HTML", "CSS"],
    image: `${BASE}spotify-clone.png`,
    demoUrl: "https://steopa2001.github.io/html-css-spotifyweb/",
    codeUrl: "https://github.com/Steopa2001/html-css-spotifyweb",
  },
  {
    title: "Project Work - Arcadia",
    description:
      "E-commerce di giochi da tavolo sviluppato in team durante il corso Boolean. Mi sono occupato della parte front-end, realizzando i componenti principali in React e gestendo le funzionalità interattive con Axios e Bootstrap, in integrazione con un back-end Node.js/Express/MySQL.",
    tech: ["React", "Axios", "Javascript", "Bootstrap", "CSS"],
    image: `${BASE}Arcadia-project-work.png`,
    demoUrl: "https://arcadia-react-production.up.railway.app/",
    codeUrl: "https://github.com/Steopa2001/Arcadia-react",
  },
  {
    title: "WhatsApp Clone with AI Chat",
    description:
      "Web app responsive ispirata a WhatsApp Web, sviluppata con HTML, CSS e JavaScript. Integra un sistema di risposte automatiche basato sulle API Gemini di Google, che genera messaggi in tempo reale simulando una conversazione tra amici.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Gemini API"],
    image: `${BASE}whatsapp-clone.png`,
    demoUrl: "https://whatsapp-clone-m3wz.onrender.com/",
    codeUrl: "https://github.com/Steopa2001/whatsapp-clone",
  },
];
export default projectsData;
