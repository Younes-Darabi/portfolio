import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Languages {

  english = {
    name: "Younes Darabi",
    title: "Frontend Developer",
    menu: {
      contact: "Contact",
      myWork: "My Work",
      skills: "Skills",
      whyMe: "Why me"
    },
    whyMe: {
      intro: "I am a passionate Frontend Developer who loves turning ideas into interactive, user-friendly web applications. Coding is not just my profession; it’s my way of creating meaningful digital experiences. I continuously learn new frameworks and technologies to improve my skills and stay up-to-date with modern web development trends. My inspiration comes from solving real-world problems and building applications that make life easier for users.",
      iAm: "I am",
      location: "located in Bremen",
      remote: "open to work remote",
      relocation: "open to relocate",
      contact: "Contact me"
    },
    mySkills: {
      title: "My Skill Set",
      description: "I have hands-on experience working on various projects using modern front-end technologies such as Angular, TypeScript, and JavaScript. I am skilled in building responsive and user-friendly web applications with HTML, CSS, and REST APIs. I enjoy exploring new frameworks, improving my coding practices, and staying up-to-date with the latest technologies to deliver innovative digital solutions.",
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
          name: 'Challange me',
          image: '/assets/img/icons/my-skills/frontend/challange-me.svg'
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
        githubUrl: "#",
        liveUrl: "#"
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
        liveUrl: "https://younes-darabi.de/assets/projects/Sharkie/index.html"
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
        liveUrl: "https://younes-darabi.de/assets/projects/Pokedex/index.html"
      }],
      ongoingProject: {
        title: "Ongoing Project",
        description: "I am currently working on a new project that focuses on improving user experience through clean design and efficient performance. I use modern front-end technologies to build scalable and maintainable web applications. For me, good planning and precise execution are the key to achieving high-quality results.",
        talkTitle: "Let's talk",
      }
    },
    referencesPage: {
      title: "References",
      references: [
        {
          name: 'James Rugman',
          projectName: 'Project Join',
          comment: '‘‘Michael is a reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague.’’',
        }, {
          name: 'Evelyn Marx',
          projectName: 'Project DA Bubble',
          comment: '‘’ He is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code. ‘’',
        }, {
          name: 'Noah Mueller',
          projectName: 'Project Sharkie',
          comment: '‘Michael had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’',
        }, {
          name: 'Noah Mueller',
          projectName: 'Project Sharkie',
          comment: '‘Michael had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’',
        }, {
          name: 'Noah Mueller',
          projectName: 'Project Sharkie',
          comment: '‘Michael had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’',
        }, {
          name: 'Noah Mueller',
          projectName: 'Project Sharkie',
          comment: '‘Michael had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’',
        }
      ]
    },
    contact: {
      title: "Contact me",
      form: {
        name: "Your name",
        email: "Your e-mail",
        message: "Your message",
        privacyText: "I've read the privacy policy and agree to the processing of my data as outlined.",
        sendButton: "Send",
        errorName: "*Please enter a Name!",
        errorEmail: "*Please enter a Email!",
        errorMessage: "*Please enter a message!",
        emailSent: "Thank you! Your message has been received successfully.",
      },
      invitationTitle: "Let us work together.",
      invitationText: "Feel free to get in touch if you would like to collaborate or learn more about my work. I am confident that my expertise and enthusiasm for continuous learning can make a valuable contribution to your team.",
      contactInfo: {
        email: "E-mail: info@younes-darabi.de",
        tel: "Tel: 017687853794"
      },
      links: {
        legalNotice: "Legal notice",
        privacyPolicy: "Privacy policy"
      },
      footer: "© Younes Darabi 2025",
    },
    legalNotice: {
      mainTitle: "Legal Notice",
      title: "Imprint",
      owner: {
        name: "Younes Darabi",
        address: "Langenhainer Str. 1",
        city: "28307 Bremen",
        phone: "+49 176 87853794",
        email: "info@younes-darabi.de",
      },
      representation: "Represented by:",
      responsibleContent: "Responsible for content according to § 55 Abs. 2 RStV: Younes Darabi, Langenhainer Str. 1, 28307 Bremen, Germany",
      disclaimerTitle: "Disclaimer",
      disclaimerText: "The contents of this website were created with great care. However, I cannot guarantee the accuracy, completeness, or timeliness of the content.",
      liabilityTitle: "Liability for Links",
      liabilityText: "This website contains links to external websites of third parties over whose contents I have no control. Therefore, I cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages.",
      copyrightTitle: "copyright",
      copyrightText: "The content and works created by the site operator are subject to German copyright law. Reproduction, editing, distribution, or any use beyond the limits of copyright law requires the written consent of the respective author."
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
      contactText: "For questions regarding data protection, please contact: Younes Darabi, Langenhainer Str. 1, 28307 Bremen, Germany – Email: info@younes-darabi.de",
      date: "Last updated: October 2025"
    }
  }

  deutsch = {
    name: "Younes Darabi",
    title: "Frontend-Entwickler",
    menu: {
      contact: "Kontakt",
      myWork: "Projekte",
      skills: "Fähigkeiten",
      whyMe: "Über mich"
    },
    whyMe: {
      intro: "Ich bin ein leidenschaftlicher Frontend-Entwickler, der es liebt, Ideen in interaktive, benutzerfreundliche Webanwendungen umzusetzen. Programmieren ist für mich nicht nur ein Beruf, sondern mein Weg, bedeutungsvolle digitale Erlebnisse zu schaffen. Ich lerne kontinuierlich neue Frameworks und Technologien, um meine Fähigkeiten zu verbessern und mit den neuesten Trends in der Webentwicklung Schritt zu halten. Meine Inspiration ziehe ich daraus, reale Probleme zu lösen und Anwendungen zu entwickeln, die das Leben der Nutzer erleichtern.",
      iAm: "Ich bin",
      location: "ansässig in Bremen",
      remote: "offen für Remote-Arbeit",
      relocation: "offen für Umzug",
      contact: "Kontakt"
    },
    mySkills: {
      title: "Meine Fähigkeiten",
      description: "Ich habe praktische Erfahrung in der Arbeit an verschiedenen Projekten mit modernen Frontend-Technologien wie Angular, TypeScript und JavaScript. Ich entwickle responsive und benutzerfreundliche Webanwendungen mit HTML, CSS und REST-APIs. Es bereitet mir Freude, neue Frameworks zu erkunden, meine Programmierpraktiken zu verbessern und stets mit den neuesten Technologien Schritt zu halten, um innovative digitale Lösungen zu schaffen.",
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
          name: 'Fordere mich heraus',
          image: '/assets/img/icons/my-skills/frontend/challange-me.svg'
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
        githubUrl: "#",
        liveUrl: "#"
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
        githubUrl: "#",
        liveUrl: "#"
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
        githubUrl: "#",
        liveUrl: "#"
      }],
      ongoingProject: {
        title: "Laufendes Projekt",
        description: "Derzeit arbeite ich an einem neuen Projekt, das den Fokus auf Benutzerfreundlichkeit, klares Design und effiziente Performance legt. Ich nutze moderne Frontend-Technologien, um skalierbare und wartbare Webanwendungen zu entwickeln. Für mich sind gute Planung und präzise Umsetzung entscheidend, um hochwertige Ergebnisse zu erzielen.",
        talkTitle: "Kontakt",
      }
    },
    referencesPage: {
      title: "Referenzen",
      references: [
        {
          name: 'James Rugman',
          projectName: 'Project Join',
          comment: '‘‘Michael is a reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague.’’',
        }, {
          name: 'Evelyn Marx',
          projectName: 'Project DA Bubble',
          comment: '‘’ He is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code. ‘’',
        }, {
          name: 'Noah Mueller',
          projectName: 'Project Sharkie',
          comment: '‘Michael had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’',
        }, {
          name: 'Noah Mueller',
          projectName: 'Project Sharkie',
          comment: '‘Michael had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’',
        }, {
          name: 'Noah Mueller',
          projectName: 'Project Sharkie',
          comment: '‘Michael had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’',
        }, {
          name: 'Noah Mueller',
          projectName: 'Project Sharkie',
          comment: '‘Michael had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’',
        }
      ]
    },
    contact: {
      title: "Kontakt",
      form: {
        name: "Ihr Name",
        email: "Ihre E-Mail",
        message: "Ihre Nachricht",
        privacyText: "Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten gemäß den dort beschriebenen Bedingungen zu.",
        sendButton: "Senden",
        errorName: "*Bitte geben Sie Ihren Namen ein!*",
        errorEmail: "*Bitte geben Sie Ihre E-Mail-Adresse ein!*",
        errorMessage: "*Bitte geben Sie eine Nachricht ein!*",
        emailSent: "Danke! Ihre Nachricht ist erfolgreich angekommen.",
      },
      invitationTitle: "Lass uns zusammenarbeiten.",
      invitationText: "Kontaktieren Sie mich gerne, wenn Sie an einer Zusammenarbeit interessiert sind oder mehr über meine Arbeit erfahren möchten. Ich bin überzeugt, dass ich mit meinem Fachwissen und meiner Begeisterung für kontinuierliche Weiterentwicklung einen wertvollen Beitrag zu Ihrem Team leisten kann.",
      contactInfo: {
        email: "E-Mail: info@younes-darabi.de",
        tel: "Tel: 017687853794"
      },
      links: {
        legalNotice: "Impressum",
        privacyPolicy: "Datenschutzerklärung"
      },
      footer: "© Younes Darabi 2025",
    },
    legalNotice: {
      mainTitle: "Rechtlicher Hinweis",
      title: "Impressum",
      owner: {
        name: "Younes Darabi",
        address: "Langenhainer Str. 1",
        city: "28307 Bremen",
        phone: "+49 176 87853794",
        email: "info@younes-darabi.de"
      },
      representation: "Vertreten durch:",
      responsibleContent: "Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV: Younes Darabi, Langenhainer Str. 1, 28307 Bremen, Deutschland",
      disclaimerTitle: "Haftungsausschluss",
      disclaimerText: "Die Inhalte dieser Webseite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen.",
      liabilityTitle: "Haftung für Links",
      liabilityText: "Diese Webseite enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe. Daher kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
      copyrightTitle: "Urheberrecht",
      copyrightText: "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Webseite unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors."
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
      contactText: "Für Fragen zum Datenschutz kontaktieren Sie bitte: Younes Darabi, Langenhainer Str. 1, 28307 Bremen, Deutschland – E-Mail: info@younes-darabi.de",
      date: "Letzte Aktualisierung: Oktober 2025"
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
