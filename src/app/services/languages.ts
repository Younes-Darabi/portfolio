import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Languages {

  english = {
    name: "Younes Darabi",
    title: "Fullstack Developer",
    menu: {
      contact: "Contact",
      myWork: "My Work",
      skills: "Skills",
      whyMe: "Why me"
    },
    whyMe: {
      intro: "I am a passionate Fullstack Developer who loves turning ideas into interactive, user-friendly web applications. I work across the full stack — from building dynamic frontends with Angular and TypeScript to developing robust backends with Python and Django. Coding is not just my profession; it's my way of creating meaningful digital experiences.",
      iAm: "I am",
      location: "located in Bremen",
      remote: "open to work remote",
      relocation: "open to relocate",
      contact: "Contact me"
    },
    mySkills: {
      title: "My Skill Set",
      description: "I have hands-on experience building full-stack web applications — from dynamic, responsive frontends with Angular, TypeScript, and JavaScript, to robust backends with Python and Django. I enjoy working across the entire stack, exploring new technologies, and delivering clean, scalable solutions.",
      technologies: [
        {
          name: 'Angular',
          image: '/assets/img/icons/my-skills/frontend/angular.svg'
        },
        {
          name: 'TypeScript',
          image: '/assets/img/icons/my-skills/frontend/ts.svg'
        },
        {
          name: 'JavaScript',
          image: '/assets/img/icons/my-skills/frontend/Javascript.svg'
        },
        {
          name: 'HTML',
          image: '/assets/img/icons/my-skills/frontend/html.svg'
        }, {
          name: 'CSS',
          image: '/assets/img/icons/my-skills/frontend/css.svg'
        },
        {
          name: 'REST-API',
          image: '/assets/img/icons/my-skills/frontend/api.svg'
        },
        {
          name: 'Firebase',
          image: '/assets/img/icons/my-skills/frontend/Firebase.svg'
        },
        {
          name: 'Git',
          image: '/assets/img/icons/my-skills/frontend/git.svg'
        }, {
          name: 'Scrum',
          image: '/assets/img/icons/my-skills/frontend/scrum.svg'
        },
        {
          name: 'Material design',
          image: '/assets/img/icons/my-skills/frontend/material-design.svg'
        },
        {
          name: 'RxJs',
          image: '/assets/img/icons/my-skills/frontend/RxJs.svg'
        },
        {
          name: 'Python',
          image: '/assets/img/icons/my-skills/backend/Python.svg'
        },
        {
          name: 'Django',
          image: '/assets/img/icons/my-skills/backend/Django.svg'
        },
        {
          name: 'Linux',
          image: '/assets/img/icons/my-skills/backend/Linux.svg'
        },
        {
          name: 'Redis',
          image: '/assets/img/icons/my-skills/backend/Redis.svg'
        },
        {
          name: 'PostgreSQL',
          image: '/assets/img/icons/my-skills/backend/PostgreSQL.svg'
        },
        {
          name: 'Docker',
          image: '/assets/img/icons/my-skills/backend/Docker.svg'
        },
        {
          name: 'Cloud',
          image: '/assets/img/icons/my-skills/backend/Cloud.svg'
        },
        {
          name: 'Challenge me',
          image: '/assets/img/icons/my-skills/frontend/challenge-me.svg'
        },
      ],
      challengeMe: "I am always motivated to improve my skills, embrace new challenges, and develop creative and efficient solutions."
    },
    myWorks: {
      projects: [{
        projectName: "Project Join",
        aboutTitle: "About the project",
        aboutProject:
          "A task management web app inspired by the Kanban System. Users can create, edit, and organize tasks using drag-and-drop features, assign team members, and track progress in real time. Designed to support clear team structure and efficient workflow.",
        technologiesTitle: "Technologies I have used",
        technologies: "Angular, TypeScript, HTML, SCSS, Firebase",
        mehrTitle: "What I have learned",
        mehrText:
          "I learned how to implement dynamic task handling with Firebase, improve my component structure in Angular, and maintain clean, scalable code across different modules.",
        imageUrl: "/assets/img/projects/join.jpg",
        githubUrl: "https://github.com/Younes-Darabi/join-project",
        liveUrl: "https://join.younes-darabi.de/index.html"
      },
      {
        projectName: "Project Sharkie",
        aboutTitle: "About the project",
        aboutProject:
          "An interactive 2D jump-and-run browser game developed with object-oriented JavaScript. The player controls Sharkie, a small fish, to collect coins, defeat enemies, and survive underwater challenges.",
        technologiesTitle: "Technologies I have used",
        technologies: "JavaScript, HTML, CSS",
        mehrTitle: "What I have learned",
        mehrText:
          "This project helped me strengthen my understanding of object-oriented programming, animation handling, and performance optimization in pure JavaScript.",
        imageUrl: "/assets/img/projects/sharkie.jpg",
        githubUrl: "https://github.com/Younes-Darabi/Sharkie",
        liveUrl: "https://sharkie.younes-darabi.de/index.html"
      },
      {
        projectName: "Project Pokédex",
        aboutTitle: "About the project",
        aboutProject:
          "A web application based on the PokéAPI that displays Pokémon information dynamically. Users can browse, search, and view detailed Pokémon stats in a responsive interface.",
        technologiesTitle: "Technologies I have used",
        technologies: "JavaScript, HTML, CSS, REST-API",
        mehrTitle: "What I have learned",
        mehrText:
          "I gained practical experience working with APIs, handling asynchronous data, and creating clean, reusable UI components.",
        imageUrl: "/assets/img/projects/pokemon.jpg",
        githubUrl: "https://github.com/Younes-Darabi/Pokemon",
        liveUrl: "https://pokedex.younes-darabi.de/index.html"
      },
      {
        projectName: "Project KanMind",
        aboutTitle: "About the project",
        aboutProject:
          "KanMind is a collaborative task and project management backend built with Django and Django REST Framework. It provides RESTful APIs for managing boards, tasks, and users.",
        technologiesTitle: "Technologies I have used",
        technologies: "Python, Django, SQLite",
        mehrTitle: "What I have learned",
        mehrText:
          "I gained experience building RESTful APIs, designing database schemas, handling authentication and permissions, and deploying Django applications with Gunicorn and Nginx.",
        imageUrl: "/assets/img/projects/kanmind.jpg",
        githubUrl: "https://github.com/Younes-Darabi/kanmind",
        liveUrl: "https://kanmind.younes-darabi.de"
      },
      {
        projectName: "Project Coderr",
        aboutTitle: "About the project",
        aboutProject:
          "Coderr is a backend system for managing code snippets, built with Django. It allows CRUD operations on snippets, user authentication, and categorization via REST APIs.",
        technologiesTitle: "Technologies I have used",
        technologies: "Python, Django, SQLite",
        mehrTitle: "What I have learned",
        mehrText:
          "I learned how to build secure REST APIs, manage database relationships, implement authentication and authorization, and deploy Django apps in production environments.",
        imageUrl: "/assets/img/projects/coderr.jpg",
        githubUrl: "https://github.com/Younes-Darabi/Coderr",
        liveUrl: "https://coderr.younes-darabi.de"
      },
      {
        projectName: "Project Videoflix",
        aboutTitle: "About the Project",
        aboutProject:
          "Videoflix is a Netflix-style streaming platform built with Django REST Framework. Videos are automatically converted and streamed in multiple resolutions via HLS.",
        technologiesTitle: "Technologies Used",
        technologies: "Python, Django, PostgreSQL, Redis, FFMPEG, Docker, Nginx",
        mehrTitle: "What I Learned",
        mehrText:
          "I implemented HLS streaming, async background tasks with RQ, and JWT authentication, then deployed the app to production using Docker and Nginx.",
        imageUrl: "/assets/img/projects/videoflix.jpg",
        githubUrl: "https://github.com/Younes-Darabi/videoflix",
        liveUrl: "https://videoflix.younes-darabi.de"
      }
      ],
      more: "Show me more",
      less: "Show me less",
      ongoingProject: {
        title: "Ongoing Project",
        description: "I am currently working on a new project that focuses on improving user experience through clean design and efficient performance. I use modern front-end technologies to build scalable and maintainable web applications. For me, good planning and precise execution are the key to achieving high-quality results.",
        talkTitle: "Let's talk",
      }
    },
    referencesPage: {
      title: "References",
      titleRes: "Need a teamplayer?",
      textRes: "Here what my colleagues said about me",
      references: [
        {
          name: 'Imra Skaliks',
          projectName: 'Project Sakura',
          comment: 'Younes played a major role in leading our project to success through his focused, reliable, and precise work approach. With his vast knowledge and friendly nature, he is an asset to any team.',
        }, {
          name: 'Anastasia Tsypkaykina',
          projectName: 'Project Join',
          comment: 'Younes was very helpful on our project, and I truly enjoyed working with him. He was always punctual and managed his time and work extremely well. He also communicated clearly and was a reliable team member throughout the project.',
        }, {
          name: 'Kevin Hase',
          projectName: 'Project Join',
          comment: 'Younes, your calm demeanor, commitment, and reliable support made our collaboration truly special.',
        }
        // , {
        //   name: 'Noah Mueller',
        //   projectName: 'Project Sharkie',
        //   comment: '‘Michael had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’',
        // }, {
        //   name: 'Noah Mueller',
        //   projectName: 'Project Sharkie',
        //   comment: '‘Michael had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’',
        // }, {
        //   name: 'Noah Mueller',
        //   projectName: 'Project Sharkie',
        //   comment: '‘Michael had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’',
        // }
      ]
    },
    contact: {
      title: "Contact me",
      form: {
        name: "Your name",
        email: "Your e-mail",
        message: "Your message",
        privacyText: "I've read the <a class='privacy_link' href='/privacy-policy' target='_blank'>privacy policy</a> and agree to the processing of my data as outlined.",
        sendButton: "Send",
        errorName: "Please enter a Name!",
        errorEmail: "Please enter a Email!",
        errorMessage: "Please enter a message!",
        errorPrivacy: "Please accept the privacy policy.",
        emailSent: "Thank you! Your message has been received successfully.",
      },
      invitationTitle: "Let us work together.",
      invitationText: "Feel free to get in touch if you would like to collaborate or learn more about my work. I am confident that my expertise and enthusiasm for continuous learning can make a valuable contribution to your team.",
      contactInfo: {
        email: "E-mail: info@younes-darabi.de",
        tel: "Tel: 0176 87853794"
      },
      links: {
        legalNotice: "Legal notice",
        privacyPolicy: "Privacy policy"
      },
      footer: "© Younes Darabi 2026",
    },
    legalNotice: {
      mainTitle: "Legal Notice",
      title: "Imprint",
      name: "Younes Darabi",
      address: "Langenhainer Str.1",
      city: "28307 Bremen",
      contact: "contact",
      phone: "0176 87853794",
      email: "info@younes-darabi.de",
      title1: "1. Acceptance of Terms",
      text1: "By using this website, you confirm that you have read and accepted the following terms and conditions. Please read these terms carefully before using the website. If you disagree with any of the terms, please refrain from using the website.",
      title2: "2. Ownership and Intellectual Property",
      text2: "All content on this website, including designs, texts, images, and other materials, is owned by Younes Darabi and is protected by copyright and intellectual property laws. You are not allowed to copy, modify, or commercially use the content of this website without express written permission.",
      title3: "3. Use of the Website",
      text3: "This website is intended for non-commercial and personal use only. You may use it to view the content and explore my work. Using the website for illegal purposes or in a way that harasses or threatens others is strictly prohibited.",
      title4: "4. Limitation of Liability",
      text4: "This website is provided 'as is.' I do not accept any responsibility for damages or issues arising from the use of this website. Using the website is at your own risk. I make no guarantees regarding the accuracy or functionality of the website's content.",
      title5: "5. Indemnification",
      text5: "You agree to indemnify and hold me harmless from any legal or financial liability arising from your use of this website.",
      title6: "6. Changes to the Terms",
      text6: "I reserve the right to update these terms and conditions from time to time. If significant changes are made, I will post them on this page. It is recommended to review the terms regularly.",
      title7: "7. Contact",
      text7: "If you have any questions or wish to contact me, please feel free to email me at info@younes-darabi.de"
    },
    privacyPolicy: {
      mainTitle: "Privacy Policy",
      introTitle: "General Information",
      introText: "Protecting your personal data is very important to me. I treat your personal data confidentially and in accordance with the legal data protection regulations and this privacy policy.",
      dataCollectionTitle: "Collection and Processing of Personal Data",
      dataCollectionText: "Personal data is collected on this website only to the extent necessary. If you contact me via email, your information will be stored for the purpose of processing your request and in case of follow-up questions. This data will not be shared without your consent.",
      cookiesTitle: "Cookies",
      cookiesText: "This website does not use cookies for analytics or tracking purposes.However, technically necessary cookies may be set to ensure the proper functioning of the website.",
      thirdPartyTitle: "Disclosure of Data to Third Parties",
      thirdPartyText: "Your data will only be transferred to third parties if required by law or if you have explicitly consented to it.",
      rightsTitle: "Your Rights",
      rightsText: "You have the right to request information about your stored personal data at any time, as well as the right to correct, block, or delete this data.For this purpose, and for further questions about data protection, you can contact me at any time using the address provided in the legal notice.",
      contactTitle: "Contact",
      contactText: "For questions regarding data protection, please contact: Younes Darabi, Email: info@younes-darabi.de",
      date: "Last updated: May 2026"
    }
  }

  deutsch = {
    name: "Younes Darabi",
    title: "Fullstack-Entwickler",
    menu: {
      contact: "Kontakt",
      myWork: "Projekte",
      skills: "Fähigkeiten",
      whyMe: "Über mich"
    },
    whyMe: {
      intro: "Ich bin ein leidenschaftlicher Fullstack-Entwickler, der es liebt, Ideen in interaktive, benutzerfreundliche Webanwendungen umzusetzen. Ich arbeite sowohl im Frontend mit Angular und TypeScript als auch im Backend mit Python und Django. Programmieren ist für mich nicht nur ein Beruf, sondern mein Weg, bedeutungsvolle digitale Erlebnisse zu schaffen.",
      iAm: "Ich bin",
      location: "ansässig in Bremen",
      remote: "offen für Remote-Arbeit",
      relocation: "offen für Umzug",
      contact: "Kontakt"
    },
    mySkills: {
      title: "Meine Fähigkeiten",
      description: "Ich habe praktische Erfahrung in der Entwicklung von Full-Stack-Webanwendungen — vom dynamischen, responsiven Frontend mit Angular, TypeScript und JavaScript bis hin zum robusten Backend mit Python und Django. Ich arbeite gerne über den gesamten Stack hinweg, erkunde neue Technologien und liefere saubere, skalierbare Lösungen.",
      technologies: [
        {
          name: 'Angular',
          image: '/assets/img/icons/my-skills/frontend/angular.svg'
        },
        {
          name: 'TypeScript',
          image: '/assets/img/icons/my-skills/frontend/ts.svg'
        },
        {
          name: 'JavaScript',
          image: '/assets/img/icons/my-skills/frontend/Javascript.svg'
        },
        {
          name: 'HTML',
          image: '/assets/img/icons/my-skills/frontend/html.svg'
        },
        {
          name: 'CSS',
          image: '/assets/img/icons/my-skills/frontend/css.svg'
        },
        {
          name: 'REST-API',
          image: '/assets/img/icons/my-skills/frontend/api.svg'
        },
        {
          name: 'Firebase',
          image: '/assets/img/icons/my-skills/frontend/Firebase.svg'
        },
        {
          name: 'Git',
          image: '/assets/img/icons/my-skills/frontend/git.svg'
        },
        {
          name: 'Scrum',
          image: '/assets/img/icons/my-skills/frontend/scrum.svg'
        },
        {
          name: 'Material Design',
          image: '/assets/img/icons/my-skills/frontend/material-design.svg'
        },
        {
          name: 'RxJs',
          image: '/assets/img/icons/my-skills/frontend/RxJs.svg'
        },
        {
          name: 'Python',
          image: '/assets/img/icons/my-skills/backend/Python.svg'
        },
        {
          name: 'Django',
          image: '/assets/img/icons/my-skills/backend/Django.svg'
        },
        {
          name: 'Linux',
          image: '/assets/img/icons/my-skills/backend/Linux.svg'
        },
        {
          name: 'Redis',
          image: '/assets/img/icons/my-skills/backend/Redis.svg'
        },
        {
          name: 'PostgreSQL',
          image: '/assets/img/icons/my-skills/backend/PostgreSQL.svg'
        },
        {
          name: 'Docker',
          image: '/assets/img/icons/my-skills/backend/Docker.svg'
        },
        {
          name: 'Cloud',
          image: '/assets/img/icons/my-skills/backend/Cloud.svg'
        },
        {
          name: 'Fordere mich heraus',
          image: '/assets/img/icons/my-skills/frontend/challenge-me.svg'
        },
      ],
      challengeMe: "Ich bin stets motiviert, meine Fähigkeiten zu verbessern, neue Herausforderungen anzunehmen und kreative sowie effiziente Lösungen zu entwickeln."
    },
    myWorks: {
      projects: [{
        projectName: "Projekt Join",
        aboutTitle: "Über das Projekt",
        aboutProject:
          "Eine Aufgabenverwaltungs-App, inspiriert vom Kanban-System. Benutzer können Aufgaben erstellen, bearbeiten und per Drag & Drop organisieren, Teammitglieder zuweisen und den Fortschritt übersichtlich in Echtzeit verfolgen.",
        technologiesTitle: "Verwendete Technologien",
        technologies: "Angular, TypeScript, HTML, SCSS, Firebase",
        mehrTitle: "Was ich gelernt habe",
        mehrText:
          "Ich habe gelernt, wie man dynamische Aufgabenverwaltung mit Firebase implementiert, die Komponentenstruktur in Angular verbessert und sauberen, skalierbaren Code über verschiedene Module hinweg pflegt.",
        imageUrl: "/assets/img/projects/join.jpg",
        githubUrl: "https://github.com/Younes-Darabi/join-project",
        liveUrl: "https://join.younes-darabi.de/index.html"
      },
      {
        projectName: "Projekt Sharkie",
        aboutTitle: "Über das Projekt",
        aboutProject:
          "Ein interaktives 2D-Jump-and-Run-Browserspiel, entwickelt mit objektorientiertem JavaScript. Der Spieler steuert Sharkie, einen kleinen Fisch, sammelt Münzen, besiegt Gegner und überlebt Unterwasser-Herausforderungen.",
        technologiesTitle: "Verwendete Technologien",
        technologies: "JavaScript (OOP), HTML, CSS",
        mehrTitle: "Was ich gelernt habe",
        mehrText:
          "In diesem Projekt konnte ich mein Verständnis für objektorientierte Programmierung, Animationssteuerung und Performance-Optimierung in reinem JavaScript vertiefen.",
        imageUrl: "/assets/img/projects/sharkie.jpg",
        githubUrl: "https://github.com/Younes-Darabi/Sharkie",
        liveUrl: "https://sharkie.younes-darabi.de/index.html"
      },
      {
        projectName: "Projekt Pokédex",
        aboutTitle: "Über das Projekt",
        aboutProject:
          "Eine Webanwendung basierend auf der PokéAPI, die Pokémon-Informationen dynamisch anzeigt. Benutzer können Pokémon durchsuchen, suchen und detaillierte Statistiken in einer responsiven Oberfläche anzeigen lassen.",
        technologiesTitle: "Verwendete Technologien",
        technologies: "JavaScript, HTML, CSS, REST-API",
        mehrTitle: "Was ich gelernt habe",
        mehrText:
          "Ich habe praktische Erfahrung im Umgang mit APIs, der asynchronen Datenverarbeitung und der Erstellung sauberer, wiederverwendbarer UI-Komponenten gesammelt.",
        imageUrl: "/assets/img/projects/pokemon.jpg",
        githubUrl: "https://github.com/Younes-Darabi/Pokemon",
        liveUrl: "https://pokedex.younes-darabi.de/index.html"
      },
      {
        projectName: "Projekt KanMind",
        aboutTitle: "Über das Projekt",
        aboutProject:
          "KanMind ist ein Backend für kollaboratives Aufgaben- und Projektmanagement, entwickelt mit Django und Django REST Framework. Es bietet RESTful APIs zum Verwalten von Boards, Aufgaben und Benutzern.",
        technologiesTitle: "Verwendete Technologien",
        technologies: "Python, Django, SQLite",
        mehrTitle: "Was ich gelernt habe",
        mehrText:
          "Ich habe Erfahrung im Aufbau von RESTful APIs, im Entwerfen von Datenbankschemata, im Umgang mit Authentifizierung und Berechtigungen sowie im Deployment von Django-Anwendungen mit Gunicorn und Nginx gesammelt.",
        imageUrl: "/assets/img/projects/kanmind.jpg",
        githubUrl: "https://github.com/Younes-Darabi/kanmind",
        liveUrl: "https://kanmind.younes-darabi.de"
      },
      {
        projectName: "Projekt Coderr",
        aboutTitle: "Über das Projekt",
        aboutProject:
          "Coderr ist ein Backend-System zur Verwaltung von Code-Snippets, entwickelt mit Django. Es ermöglicht CRUD-Operationen für Snippets, Benutzer-Authentifizierung und Kategorisierung über REST APIs.",
        technologiesTitle: "Verwendete Technologien",
        technologies: "Python, Django, SQLite",
        mehrTitle: "Was ich gelernt habe",
        mehrText:
          "Ich habe gelernt, sichere REST APIs zu erstellen, Datenbankbeziehungen zu verwalten, Authentifizierung und Autorisierung zu implementieren und Django-Anwendungen produktionsreif bereitzustellen.",
        imageUrl: "/assets/img/projects/coderr.jpg",
        githubUrl: "https://github.com/Younes-Darabi/Coderr",
        liveUrl: "https://coderr.younes-darabi.de"
      },
      {
        projectName: "Projekt Videoflix",
        aboutTitle: "Über das Projekt",
        aboutProject:
          "Videoflix ist eine Netflix-ähnliche Videoplattform mit Django REST Framework. Videos werden automatisch in mehreren Qualitätsstufen per HLS gestreamt.",
        technologiesTitle: "Verwendete Technologien",
        technologies: "Python, Django, PostgreSQL, Redis, FFMPEG, Docker, Nginx",
        mehrTitle: "Was ich gelernt habe",
        mehrText:
          "Ich habe HLS-Streaming, asynchrone Tasks mit RQ und JWT-Authentifizierung implementiert sowie die App mit Docker und Nginx deployed.",
        imageUrl: "/assets/img/projects/videoflix.jpg",
        githubUrl: "https://github.com/Younes-Darabi/videoflix",
        liveUrl: "https://videoflix.younes-darabi.de"
      }],
      more: "Mehr anzeigen",
      less: "Weniger anzeigen",
      ongoingProject: {
        title: "Laufendes Projekt",
        description: "Derzeit arbeite ich an einem neuen Projekt, das den Fokus auf Benutzerfreundlichkeit, klares Design und effiziente Performance legt. Ich nutze moderne Frontend-Technologien, um skalierbare und wartbare Webanwendungen zu entwickeln. Für mich sind gute Planung und präzise Umsetzung entscheidend, um hochwertige Ergebnisse zu erzielen.",
        talkTitle: "Kontakt",
      }
    },
    referencesPage: {
      title: "Referenzen",
      titleRes: "Sie brauchen einen Teamplayer?",
      textRes: "Hier ist, was meine Kollegen über mich gesagt haben",
      references: [
        {
          name: 'Imra Skaliks',
          projectName: 'Project Sakura',
          comment: 'Younes hat einen großen Anteil daran gehabt, unser Projekt zum Erfolg zu führen, durch seine fokussierte, verlässliche und präzise Arbeitsweise. Durch sein großes Wissen und seine freundliche Art ist er ein Gewinn für jedes Team.',
        }, {
          name: 'Anastasia Tsypkaykina',
          projectName: 'Project Join',
          comment: 'Younes war sehr hilfsbereit in unserem Projekt, und ich habe es wirklich genossen, mit ihm zusammenzuarbeiten. Er war immer pünktlich und hat seine Zeit und Arbeit extrem gut gemanagt. Außerdem kommunizierte er klar und war während des gesamten Projekts ein zuverlässiges Teammitglied.',
        }, {
          name: 'Kevin Hase',
          projectName: 'Project Join',
          comment: 'Younes, deine ruhige Art, dein Einsatz und dein verlässlicher Support haben unsere Zusammenarbeit wirklich besonders gemacht.',
        }
        // , {
        //   name: 'Noah Mueller',
        //   projectName: 'Project Sharkie',
        //   comment: '‘Michael had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’',
        // }, {
        //   name: 'Noah Mueller',
        //   projectName: 'Project Sharkie',
        //   comment: '‘Michael had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’',
        // }, {
        //   name: 'Noah Mueller',
        //   projectName: 'Project Sharkie',
        //   comment: '‘Michael had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’',
        // }
      ]
    },
    contact: {
      title: "Kontakt",
      form: {
        name: "Ihr Name",
        email: "Ihre E-Mail",
        message: "Ihre Nachricht",
        privacyText: "Ich habe die <a class='privacy_link' href='/privacy-policy' target='_blank'>Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten gemäß den dort beschriebenen Bedingungen zu.",
        sendButton: "Senden",
        errorName: "Bitte geben Sie Ihren Namen ein!",
        errorEmail: "Bitte geben Sie Ihre E-Mail-Adresse ein!",
        errorMessage: "Bitte geben Sie eine Nachricht ein!",
        errorPrivacy: "Bitte akzeptieren Sie die Datenschutzrichtlinie.",
        emailSent: "Danke! Ihre Nachricht ist erfolgreich angekommen.",
      },
      invitationTitle: "Lass uns zusammenarbeiten.",
      invitationText: "Kontaktieren Sie mich gerne, wenn Sie an einer Zusammenarbeit interessiert sind oder mehr über meine Arbeit erfahren möchten. Ich bin überzeugt, dass ich mit meinem Fachwissen und meiner Begeisterung für kontinuierliche Weiterentwicklung einen wertvollen Beitrag zu Ihrem Team leisten kann.",
      contactInfo: {
        email: "E-Mail: info@younes-darabi.de",
        tel: "Tel: 0176 87853794"
      },
      links: {
        legalNotice: "Impressum",
        privacyPolicy: "Datenschutzerklärung"
      },
      footer: "© Younes Darabi 2026",
    },
    legalNotice: {
      mainTitle: "Legal Notice",
      title: "Impressum",
      name: "Younes Darabi",
      address: "Langenhainer Str.1",
      city: "28307 Bremen",
      contact: "Kontakt",
      phone: "0176 87853794",
      email: "info@younes-darabi.de",
      title1: "1. Akzeptanz der Nutzungsbedingungen",
      text1: "Durch die Nutzung dieser Website bestätigen Sie, dass Sie die folgenden Bedingungen gelesen und akzeptiert haben. Bitte lesen Sie diese Bedingungen sorgfältig durch, bevor Sie die Website nutzen. Wenn Sie mit einer der Bedingungen nicht einverstanden sind, unterlassen Sie bitte die Nutzung der Website.",
      title2: "2. Eigentum und geistiges Eigentum",
      text2: "Alle Inhalte dieser Website, einschließlich Designs, Texte, Bilder und andere Materialien, sind das Eigentum von Younes Darabi und unterliegen dem Urheberrecht sowie geistigen Eigentumsrechten. Sie dürfen die Inhalte der Website nicht ohne ausdrückliche schriftliche Genehmigung kopieren, ändern oder kommerziell nutzen.",
      title3: "3. Nutzung der Website",
      text3: "Diese Website wurde für nicht-kommerzielle und persönliche Zwecke entwickelt. Sie dürfen sie nutzen, um die Inhalte anzusehen und meine Arbeiten zu erkunden. Die Nutzung der Website für illegale Zwecke oder auf eine Weise, die andere belästigt oder bedroht, ist strengstens untersagt.",
      title4: "4. Haftungsbeschränkung",
      text4: "Diese Website wird 'wie sie ist' bereitgestellt. Ich übernehme keine Verantwortung für Schäden oder Probleme, die aus der Nutzung der Website entstehen. Die Nutzung der Website erfolgt auf eigenes Risiko. Ich gebe keine Garantien bezüglich der Genauigkeit oder Funktionalität der Inhalte der Website.",
      title5: "5. Schadensersatz",
      text5: "Sie erklären sich damit einverstanden, mich von jeglicher rechtlichen oder finanziellen Verantwortung freizustellen und zu entschädigen, die aus der Nutzung dieser Website durch Sie entstehen könnte.",
      title6: "6. Änderungen der Bedingungen",
      text6: "Ich behalte mir vor, diese Nutzungsbedingungen von Zeit zu Zeit zu aktualisieren. Wenn wesentliche Änderungen an diesen Bedingungen vorgenommen werden, werde ich diese auf dieser Seite veröffentlichen. Es wird empfohlen, die Bedingungen regelmäßig zu überprüfen.",
      title7: "7. Kontakt",
      text7: "Wenn Sie Fragen haben oder mit mir in Kontakt treten möchten, können Sie mir gerne eine E-Mail an info@younes-darabi.de senden."
    },
    privacyPolicy: {
      mainTitle: "Datenschutzerklärung",
      introTitle: "Allgemeine Hinweise",
      introText: "Diese Website ist ein persönliches Portfolio. Es werden keine personenbezogenen Daten erhoben, gespeichert oder weitergegeben. Es werden keine Cookies oder Analysetools verwendet.",
      dataCollectionTitle: "Erhebung und Verarbeitung personenbezogener Daten",
      dataCollectionText: "Personenbezogene Daten werden auf dieser Website nur im notwendigen Umfang verarbeitet. Wenn Sie mir per E-Mail Anfragen senden, werden diese Daten nur zur Bearbeitung Ihrer Anfrage verwendet und nicht weitergegeben.",
      cookiesTitle: "Cookies",
      cookiesText: "Diese Website verwendet keine Cookies für Analyse- oder Trackingzwecke. Technisch notwendige Cookies können jedoch gesetzt werden, um die Funktion der Website sicherzustellen.",
      thirdPartyTitle: "Weitergabe an Dritte",
      thirdPartyText: "Ihre Daten werden nur dann an Dritte weitergegeben, wenn dies gesetzlich vorgeschrieben ist oder Sie ausdrücklich eingewilligt haben.",
      rightsTitle: "Ihre Rechte",
      rightsText: "Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten sowie das Recht auf Berichtigung, Sperrung oder Löschung. Für Fragen zum Datenschutz können Sie sich jederzeit über die im Impressum angegebene Adresse an mich wenden.",
      contactTitle: "Kontakt",
      contactText: "Für Fragen zum Datenschutz kontaktieren Sie bitte: Younes Darabi, E-Mail: info@younes-darabi.de",
      date: "Letzte Aktualisierung: Mai 2026"
    }
  };

  websiteLanguage: any = this.english;

  setLanguage(value: string) {
    if (value == "de") {
      this.websiteLanguage = this.deutsch;
    } else {
      this.websiteLanguage = this.english;
    }
  }
}
