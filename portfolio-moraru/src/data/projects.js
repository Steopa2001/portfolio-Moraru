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
    title: "SmartphoneHub – Comparatore",
    description:
      "SPA sviluppata con React e Vite che permette di sfogliare, filtrare e confrontare smartphone, salvare i preferiti e visualizzare i dettagli di ogni modello. Front-end in React con backend JSON fittizio esposto via API.",
    tech: ["React", "Vite", "JavaScript", "Bootstrap", "CSS"],
    image: `${BASE}smartphonehub.png`, 
    demoUrl: "https://smartphonehub-front.onrender.com/",
    codeUrl:
      "https://github.com/Steopa2001/progetto-finale-spec-frontend-front",
  },
];
export default projectsData;
