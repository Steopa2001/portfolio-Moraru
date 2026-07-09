export const LANGUAGE_OPTIONS = [
  { code: "it", short: "IT", label: "Italiano", flag: "🇮🇹" },
  { code: "en", short: "EN", label: "English", flag: "🇬🇧" },
  { code: "es", short: "ES", label: "Espanol", flag: "🇪🇸" },
  { code: "ro", short: "RO", label: "Romana", flag: "🇷🇴" },
];

export const SITE_TEXT = {
  it: {
    header: {
      brandRole: "Junior Web Developer",
      toggleNavigationLabel: "Apri o chiudi menu",
      nav: {
        home: "Home",
        about: "Chi sono",
        projects: "Progetti",
        contact: "Contatti",
      },
      languageLabel: "Lingua",
      languageSwitcherAriaLabel: "Seleziona lingua sito",
    },
    footer: {
      portfolio: "Portfolio",
      backToTop: "Torna su",
    },
    backToTop: {
      label: "Torna su",
    },
    homepage: {
      heroGreeting: "Ciao, sono Moraru Stefan",
      greetingPrefix: "Ciao, sono ",
      role: "Junior Web Developer",
      heroLead:
        "Creo interfacce web moderne, responsive e intuitive, con grande attenzione all'esperienza utente.",
      ctaProjects: "Guarda i progetti",
      ctaDownloadCv: "Scarica CV",
      portraitAlt: "Ritratto del developer",
      about: {
        kicker: "Profilo",
        title: "Chi sono",
        description:
          "Sono uno sviluppatore web junior con competenze full-stack e un forte orientamento al front-end. Ho completato un corso intensivo di oltre 600 ore come Full-Stack Web Developer con Boolean, durante il quale ho realizzato diversi progetti concreti. Ho maturato esperienza concreta con WordPress e PHP, e sono alla ricerca di opportunità professionali come sviluppatore front-end, con la voglia di continuare a crescere su framework moderni come React, Vue e Angular.",
        tech: ["HTML", "CSS", "Javascript", "React", "Node.js", "Express", "MySQL", "WordPress", "PHP"],
      },
      path: {
        title: "Il mio percorso",
        subtitle:
          "Un percorso costruito tra formazione tecnica, esperienza professionale e la svolta verso lo sviluppo web.",
        school: {
          period: "2015 • 2020",
          meta: "Lecco, Lombardia",
          title: "Istituto Superiore Statale 'P.A. Fiocchi'",
          description:
            "Diploma di Istituto Tecnico e Professionale, con una formazione orientata alla pratica e alla risoluzione di problemi reali.",
        },
        work: {
          period: "2021 • 2025",
          meta: "Minuterie 3M · Lecco",
          title: "Tecnico di produzione",
          description:
            "Esperienza nel settore metalmeccanico con attività operative. Sviluppate competenze trasversali come lavoro in team, gestione del tempo e attenzione alla qualità.",
          bullets: ["Teamwork", "Problem solving", "Adattabilita"],
        },
        booleanCourse: {
          period: "Mag 2025 • Gen 2026",
          meta: "Da remoto · Boolean",
          title: "Junior Web Developer Trainee",
          description:
            "Percorso full-time di formazione da sviluppatore, con progetti individuali e di gruppo realizzati seguendo un workflow professionale.",
          bullets: [
            "Sviluppo frontend con HTML, CSS, JavaScript e React",
            "Versionamento del codice con Git e GitHub",
            "Collaborazione in team su progetti reali",
          ],
        },
        beaverLab: {
          period: "Mar 2026 • Presente",
          meta: "Seregno, Lombardia · Beaver Lab",
          title: "Junior Web Developer",
          description:
            "Sviluppo siti web professionali con WordPress, creando layout dinamici tramite ACF e gestendo i contenuti con PHP. Collaboro in team su progetti reali, curando interfacce responsive e template email con MJML.",
          bullets: [
            "WordPress e ACF per layout dinamici",
            "PHP per gestione e personalizzazione dei contenuti",
            "Layout responsive ottimizzati per ogni dispositivo",
            "MJML per template email professionali",
          ],
        },
      },
      showcase: {
        title: "I miei lavori",
        subtitle: "Progetti, certificati e tech stack.",
        liveProjects: "Progetti Live",
        technologies: "Tecnologie",
        tabs: {
          projects: "Progetti",
          certificates: "Certificati",
          stack: "Tecnologie",
        },
        featured: "In evidenza",
        liveDemo: "Live Demo",
        code: "Codice",
        demo: "Demo",
        placeholderTitle: "In fase di lavorazione",
        placeholderDesc: "Questo progetto sarà disponibile a breve.",
        projects: [
          {
            title: "Garavaglia Auto",
            description:
              "Sito vetrina per una concessionaria di automobili. Ho replicato il design da Figma in WordPress, utilizzando ACF per i componenti dinamici e PHP per la logica personalizzata. Realizzato in coppia con un collega.",
            tech: ["WordPress", "ACF", "PHP", "Figma"],
            image: "garavagliaauto.webp",
            demoUrl: "https://www.garavagliaauto.it/",
          },
          {
            title: "MySafeDOC",
            description:
              "Landing page per un servizio di conformità normativa. Ho trasformato l'homepage da HTML/CSS statico a un sito WordPress dinamico, strutturando i contenuti con ACF flexible content per garantire al cliente piena autonomia nella gestione dei testi.",
            tech: ["WordPress", "ACF", "PHP"],
            image: "mysafedoc.webp",
            demoUrl: "https://mysafedoc.cloud/",
          },
        ],
      },
      certificates: {
        openLabel: "Apri",
        imageAlt: "Certificato",
        openPdf: "Apri PDF",
      },
      contact: {
        title: "Contatti",
        lead:
          "Vuoi collaborare o hai domande? Compila il form oppure scrivimi via email.",
        send: "Invia",
        hint:
          "*Dopo l'invio si aprirà la tua email per confermare e spedire il messaggio.",
        form: {
          name: "Nome",
          namePlaceholder: "Il tuo nome",
          email: "Email",
          emailPlaceholder: "nome@email.com",
          subject: "Oggetto",
          subjectPlaceholder: "Es. Collaborazione / Info",
          message: "Messaggio",
          messagePlaceholder: "Scrivimi qui...",
          defaultSubject: "Nuovo messaggio",
          mailName: "Nome",
          mailEmail: "Email",
          mailMessage: "Messaggio",
        },
      },
    },
  },
  en: {
    header: {
      brandRole: "Junior Web Developer",
      toggleNavigationLabel: "Open or close navigation",
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
      },
      languageLabel: "Language",
      languageSwitcherAriaLabel: "Choose website language",
    },
    footer: {
      portfolio: "Portfolio",
      backToTop: "Back to top",
    },
    backToTop: {
      label: "Back to top",
    },
    homepage: {
      heroGreeting: "Hi, I'm Moraru Stefan",
      greetingPrefix: "Hi, I'm ",
      role: "Junior Web Developer",
      heroLead:
        "I build modern, responsive, and intuitive web interfaces, with strong attention to user experience.",
      ctaProjects: "View projects",
      ctaDownloadCv: "Download CV",
      portraitAlt: "Developer portrait",
      about: {
        kicker: "Profile",
        title: "About me",
        description:
          "I am a junior web developer with full-stack skills and a strong front-end focus. I completed an intensive 600+ hour Full-Stack Web Developer program at Boolean, where I built multiple real-world projects. I've gained hands-on experience with WordPress and PHP, and I'm now looking for professional opportunities as a front-end developer, eager to keep growing with modern frameworks like React, Vue, and Angular.",
        tech: ["HTML", "CSS", "Javascript", "React", "Node.js", "Express", "MySQL", "WordPress", "PHP"],
      },
      path: {
        title: "My Journey",
        subtitle:
          "A path built on technical training, professional experience, and the shift toward web development.",
        school: {
          period: "2015 • 2020",
          meta: "Lecco, Lombardy",
          title: "State High School 'P.A. Fiocchi'",
          description:
            "Technical and Vocational High School Diploma, with hands-on training focused on solving real-world problems.",
        },
        work: {
          period: "2021 • 2025",
          meta: "Minuterie 3M · Lecco",
          title: "Production Technician",
          description:
            "Experience in the metalworking industry with hands-on operations. I developed transversal skills such as teamwork, time management, and attention to quality.",
          bullets: ["Teamwork", "Problem solving", "Adaptability"],
        },
        booleanCourse: {
          period: "May 2025 • Jan 2026",
          meta: "Remote · Boolean",
          title: "Junior Web Developer Trainee",
          description:
            "Full-time developer training program, with individual and team projects built following a professional workflow.",
          bullets: [
            "Frontend development with HTML, CSS, JavaScript and React",
            "Code versioning with Git and GitHub",
            "Team collaboration on real projects",
          ],
        },
        beaverLab: {
          period: "Mar 2026 • Present",
          meta: "Seregno, Lombardy · Beaver Lab",
          title: "Junior Web Developer",
          description:
            "Building professional websites with WordPress, creating dynamic layouts via ACF and managing content with PHP. Collaborating in a team on real projects, crafting responsive interfaces and email templates with MJML.",
          bullets: [
            "WordPress and ACF for dynamic layouts",
            "PHP for content management and customization",
            "Responsive layouts optimized for every device",
            "MJML for professional email templates",
          ],
        },
      },
      showcase: {
        title: "My Work",
        subtitle: "Projects, certificates, and tech stack.",
        liveProjects: "Live Projects",
        technologies: "Technologies",
        tabs: {
          projects: "Projects",
          certificates: "Certificates",
          stack: "Technologies",
        },
        featured: "Featured",
        liveDemo: "Live Demo",
        code: "Code",
        demo: "Demo",
        placeholderTitle: "Work in progress",
        placeholderDesc: "This project will be available soon.",
        projects: [
          {
            title: "Garavaglia Auto",
            description:
              "Showcase website for a car dealership. I implemented the Figma design in WordPress, using ACF for dynamic components and PHP for custom logic. Built together with a colleague.",
            tech: ["WordPress", "ACF", "PHP", "Figma"],
            image: "garavagliaauto.webp",
            demoUrl: "https://www.garavagliaauto.it/",
          },
          {
            title: "MySafeDOC",
            description:
              "Landing page for a regulatory compliance service. I converted the homepage from static HTML/CSS into a dynamic WordPress site, structuring the content with ACF flexible content to give the client full autonomy in managing and updating the copy.",
            tech: ["WordPress", "ACF", "PHP"],
            image: "mysafedoc.webp",
            demoUrl: "https://mysafedoc.cloud/",
          },
        ],
      },
      certificates: {
        openLabel: "Open",
        imageAlt: "Certificate",
        openPdf: "Open PDF",
      },
      contact: {
        title: "Contact",
        lead:
          "Want to collaborate or have questions? Fill out the form or write me an email.",
        send: "Send",
        hint:
          "*After clicking send, your email client will open so you can confirm and send the message.",
        form: {
          name: "Name",
          namePlaceholder: "Your name",
          email: "Email",
          emailPlaceholder: "name@email.com",
          subject: "Subject",
          subjectPlaceholder: "e.g. Collaboration / Info",
          message: "Message",
          messagePlaceholder: "Write your message here...",
          defaultSubject: "New message",
          mailName: "Name",
          mailEmail: "Email",
          mailMessage: "Message",
        },
      },
    },
  },
  es: {
    header: {
      brandRole: "Desarrollador Web Junior",
      toggleNavigationLabel: "Abrir o cerrar navegacion",
      nav: {
        home: "Inicio",
        about: "Sobre mi",
        projects: "Proyectos",
        contact: "Contacto",
      },
      languageLabel: "Idioma",
      languageSwitcherAriaLabel: "Seleccionar idioma del sitio",
    },
    footer: {
      portfolio: "Portafolio",
      backToTop: "Volver arriba",
    },
    backToTop: {
      label: "Volver arriba",
    },
    homepage: {
      heroGreeting: "Hola, soy Moraru Stefan",
      greetingPrefix: "Hola, soy ",
      role: "Desarrollador Web Junior",
      heroLead:
        "Creo interfaces web modernas, responsive e intuitivas, con gran atencion a la experiencia de usuario.",
      ctaProjects: "Ver proyectos",
      ctaDownloadCv: "Descargar CV",
      portraitAlt: "Retrato del desarrollador",
      about: {
        kicker: "Perfil",
        title: "Sobre mi",
        description:
          "Soy un desarrollador web junior con competencias full-stack y una fuerte orientacion al front-end. Complete un curso intensivo de mas de 600 horas como Full-Stack Web Developer en Boolean, donde realice varios proyectos reales. He adquirido experiencia concreta con WordPress y PHP, y actualmente busco oportunidades profesionales como desarrollador front-end, con ganas de seguir creciendo en frameworks modernos como React, Vue y Angular.",
        tech: ["HTML", "CSS", "Javascript", "React", "Node.js", "Express", "MySQL", "WordPress", "PHP"],
      },
      path: {
        title: "Mi recorrido",
        subtitle:
          "Un recorrido construido entre formacion tecnica, experiencia profesional y el giro hacia el desarrollo web.",
        school: {
          period: "2015 • 2020",
          meta: "Lecco, Lombardia",
          title: "Instituto Estatal 'P.A. Fiocchi'",
          description:
            "Diploma tecnico y profesional, con una formacion orientada a la practica y a la resolucion de problemas reales.",
        },
        work: {
          period: "2021 • 2025",
          meta: "Minuterie 3M · Lecco",
          title: "Tecnico de produccion",
          description:
            "Experiencia en el sector metalmecanico con actividades operativas. Desarrolle competencias transversales como trabajo en equipo, gestion del tiempo y atencion a la calidad.",
          bullets: ["Trabajo en equipo", "Resolucion de problemas", "Adaptabilidad"],
        },
        booleanCourse: {
          period: "May 2025 • Ene 2026",
          meta: "Remoto · Boolean",
          title: "Junior Web Developer Trainee",
          description:
            "Programa full-time de formacion como desarrollador, con proyectos individuales y en equipo desarrollados siguiendo un flujo de trabajo profesional.",
          bullets: [
            "Desarrollo frontend con HTML, CSS, JavaScript y React",
            "Control de versiones con Git y GitHub",
            "Colaboracion en equipo en proyectos reales",
          ],
        },
        beaverLab: {
          period: "Mar 2026 • Presente",
          meta: "Seregno, Lombardia · Beaver Lab",
          title: "Junior Web Developer",
          description:
            "Desarrollo de sitios web profesionales con WordPress, creando layouts dinamicos mediante ACF y gestionando contenidos con PHP. Colaboro en equipo en proyectos reales, cuidando interfaces responsive y plantillas de email con MJML.",
          bullets: [
            "WordPress y ACF para layouts dinamicos",
            "PHP para gestion y personalizacion de contenidos",
            "Layouts responsive optimizados para cada dispositivo",
            "MJML para plantillas de email profesionales",
          ],
        },
      },
      showcase: {
        title: "Mis trabajos",
        subtitle: "Proyectos, certificados y stack tecnologico.",
        liveProjects: "Proyectos en vivo",
        technologies: "Tecnologias",
        tabs: {
          projects: "Proyectos",
          certificates: "Certificados",
          stack: "Tecnologias",
        },
        featured: "Destacado",
        liveDemo: "Demo en vivo",
        code: "Codigo",
        demo: "Demo",
        placeholderTitle: "En construccion",
        placeholderDesc: "Este proyecto estará disponible pronto.",
        projects: [
          {
            title: "Garavaglia Auto",
            description:
              "Sitio web para un concesionario de automoviles. Replique el diseno de Figma en WordPress, usando ACF para los componentes dinamicos y PHP para la logica personalizada. Realizado junto a un companero.",
            tech: ["WordPress", "ACF", "PHP", "Figma"],
            image: "garavagliaauto.webp",
            demoUrl: "https://www.garavagliaauto.it/",
          },
          {
            title: "MySafeDOC",
            description:
              "Landing page para un servicio de cumplimiento normativo. Transforme la homepage de HTML/CSS estatico a un sitio WordPress dinamico, estructurando el contenido con ACF flexible content para brindar al cliente plena autonomia en la gestion de los textos.",
            tech: ["WordPress", "ACF", "PHP"],
            image: "mysafedoc.webp",
            demoUrl: "https://mysafedoc.cloud/",
          },
        ],
      },
      certificates: {
        openLabel: "Abrir",
        imageAlt: "Certificado",
        openPdf: "Abrir PDF",
      },
      contact: {
        title: "Contacto",
        lead:
          "Quieres colaborar o tienes preguntas? Completa el formulario o escribeme por email.",
        send: "Enviar",
        hint:
          "*Despues del envio se abrira tu correo para confirmar y enviar el mensaje.",
        form: {
          name: "Nombre",
          namePlaceholder: "Tu nombre",
          email: "Email",
          emailPlaceholder: "nombre@email.com",
          subject: "Asunto",
          subjectPlaceholder: "Ej. Colaboracion / Info",
          message: "Mensaje",
          messagePlaceholder: "Escribe aqui...",
          defaultSubject: "Nuevo mensaje",
          mailName: "Nombre",
          mailEmail: "Email",
          mailMessage: "Mensaje",
        },
      },
    },
  },
  ro: {
    header: {
      brandRole: "Dezvoltator Web Junior",
      toggleNavigationLabel: "Deschide sau inchide meniul",
      nav: {
        home: "Acasa",
        about: "Despre mine",
        projects: "Proiecte",
        contact: "Contact",
      },
      languageLabel: "Limba",
      languageSwitcherAriaLabel: "Selecteaza limba site-ului",
    },
    footer: {
      portfolio: "Portofoliu",
      backToTop: "Sus",
    },
    backToTop: {
      label: "Sus",
    },
    homepage: {
      heroGreeting: "Salut, sunt Moraru Stefan",
      greetingPrefix: "Salut, sunt ",
      role: "Dezvoltator Web Junior",
      heroLead:
        "Construiesc interfete web moderne, responsive si intuitive, cu atentie puternica la experienta utilizatorului.",
      ctaProjects: "Vezi proiectele",
      ctaDownloadCv: "Descarca CV",
      portraitAlt: "Portret dezvoltator",
      about: {
        kicker: "Profil",
        title: "Despre mine",
        description:
          "Sunt dezvoltator web junior cu competente full-stack si focus puternic pe front-end. Am finalizat un curs intensiv de peste 600 de ore ca Full-Stack Web Developer la Boolean, unde am realizat mai multe proiecte reale. Am acumulat experienta concreta cu WordPress si PHP, iar acum caut oportunitati profesionale ca dezvoltator front-end, cu dorinta de a continua sa cresc pe framework-uri moderne precum React, Vue si Angular.",
        tech: ["HTML", "CSS", "Javascript", "React", "Node.js", "Express", "MySQL", "WordPress", "PHP"],
      },
      path: {
        title: "Parcursul meu",
        subtitle:
          "Un parcurs construit din formare tehnica, experienta profesionala si trecerea catre dezvoltarea web.",
        school: {
          period: "2015 • 2020",
          meta: "Lecco, Lombardia",
          title: "Liceul de Stat 'P.A. Fiocchi'",
          description:
            "Diploma tehnica si profesionala, cu o pregatire orientata spre practica si rezolvarea problemelor reale.",
        },
        work: {
          period: "2021 • 2025",
          meta: "Minuterie 3M · Lecco",
          title: "Tehnician de productie",
          description:
            "Experienta in sectorul metalmecanic cu activitati operationale. Am dezvoltat competente transversale precum lucrul in echipa, gestionarea timpului si atentia la calitate.",
          bullets: ["Teamwork", "Rezolvare de probleme", "Adaptabilitate"],
        },
        booleanCourse: {
          period: "Mai 2025 • Ian 2026",
          meta: "Remote · Boolean",
          title: "Junior Web Developer Trainee",
          description:
            "Program full-time de formare ca dezvoltator, cu proiecte individuale si in echipa realizate urmand un flux de lucru profesional.",
          bullets: [
            "Dezvoltare frontend cu HTML, CSS, JavaScript si React",
            "Versionare a codului cu Git si GitHub",
            "Colaborare in echipa pe proiecte reale",
          ],
        },
        beaverLab: {
          period: "Mar 2026 • Prezent",
          meta: "Seregno, Lombardia · Beaver Lab",
          title: "Junior Web Developer",
          description:
            "Dezvoltare de site-uri web profesionale cu WordPress, crearea de layouturi dinamice prin ACF si gestionarea continutului cu PHP. Colaborez in echipa pe proiecte reale, ingrijind interfete responsive si template-uri de email cu MJML.",
          bullets: [
            "WordPress si ACF pentru layouturi dinamice",
            "PHP pentru gestionarea si personalizarea continutului",
            "Layouturi responsive optimizate pentru fiecare dispozitiv",
            "MJML pentru template-uri de email profesionale",
          ],
        },
      },
      showcase: {
        title: "Lucrarile mele",
        subtitle: "Proiecte, certificate si tehnologii.",
        liveProjects: "Proiecte live",
        technologies: "Tehnologii",
        tabs: {
          projects: "Proiecte",
          certificates: "Certificate",
          stack: "Tehnologii",
        },
        featured: "In evidenta",
        liveDemo: "Demo live",
        code: "Cod",
        demo: "Demo",
        placeholderTitle: "În lucru",
        placeholderDesc: "Acest proiect va fi disponibil în curând.",
        projects: [
          {
            title: "Garavaglia Auto",
            description:
              "Site de prezentare pentru un dealer auto. Am replicat design-ul din Figma in WordPress, folosind ACF pentru componentele dinamice si PHP pentru logica personalizata. Realizat impreuna cu un coleg.",
            tech: ["WordPress", "ACF", "PHP", "Figma"],
            image: "garavagliaauto.webp",
            demoUrl: "https://www.garavagliaauto.it/",
          },
          {
            title: "MySafeDOC",
            description:
              "Landing page pentru un serviciu de conformitate legislativa. Am transformat homepage-ul din HTML/CSS static intr-un site WordPress dinamic, structurand continutul cu ACF flexible content pentru a oferi clientului autonomie completa in gestionarea textelor.",
            tech: ["WordPress", "ACF", "PHP"],
            image: "mysafedoc.webp",
            demoUrl: "https://mysafedoc.cloud/",
          },
        ],
      },
      certificates: {
        openLabel: "Deschide",
        imageAlt: "Certificat",
        openPdf: "Deschide PDF",
      },
      contact: {
        title: "Contact",
        lead:
          "Vrei sa colaboram sau ai intrebari? Completeaza formularul sau scrie-mi pe email.",
        send: "Trimite",
        hint:
          "*Dupa trimitere se va deschide clientul tau de email pentru confirmare si expediere.",
        form: {
          name: "Nume",
          namePlaceholder: "Numele tau",
          email: "Email",
          emailPlaceholder: "nume@email.com",
          subject: "Subiect",
          subjectPlaceholder: "Ex. Colaborare / Info",
          message: "Mesaj",
          messagePlaceholder: "Scrie-mi aici...",
          defaultSubject: "Mesaj nou",
          mailName: "Nume",
          mailEmail: "Email",
          mailMessage: "Mesaj",
        },
      },
    },
  },
};
