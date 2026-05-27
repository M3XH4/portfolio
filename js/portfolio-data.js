/* Editable portfolio content.
   Add or update projects, certificates, skills, and attended learning items here. */

window.portfolioData = {
  projects: [
    {
      id: 'pawlse-system',
      title: 'PAWLSE: An AI Assisted Animal Welfare and Engagement Management System',
      description: 'A unified web-based animal welfare management platform, integrating rescue reporting, AI-assisted animal identification, adoption management, volunteer coordination, donation tracking, and community engagement within a centralized system.',
      archiveDescription: 'An AI-assisted stray animal welfare platform featuring rescue coordination, adoption workflows, volunteer management, donation transparency, audit logging, and a powerful Super Admin control system for operational oversight.',
      image: 'assets/images/projects/pawlse-cover.png',
      imageAlt: 'PAWLSE project preview',
      category: 'Full Stack',
      filters: ['web', 'fullstack'],
      status: ['In Progress', 'Case Study'],
      tech: ['React', 'Laravel', 'TailwindCSS', 'TypeScript', 'Inertia.js', 'MySQL', 'AI Integration'],
      githubUrl: 'https://github.com/M3XH4/pawlse/',
      detailsUrl: 'project-details.html?id=pawlse-system',
      detailsLabel: 'Case Study',
      featured: true,
      bentoSize: 'large',
      slug: 'pawlse-system',
      shortDescription: 'A full-stack animal welfare platform for rescue coordination, adoption workflows, volunteer management, and community engagement.',
      fullDescription: 'PAWLSE centralizes animal welfare workflows into a practical digital system for reporting, adoption, volunteers, donations, and operational oversight.',
      problem: 'Animal welfare organizations often manage rescue reports, adoption records, donations, and volunteers across disconnected tools.',
      solution: 'The system provides role-based management flows, structured reporting, and a centralized dashboard for welfare operations.',
      technologies: ['React', 'Laravel', 'TailwindCSS', 'TypeScript', 'Inertia.js', 'MySQL'],
      features: ['Rescue report tracking', 'Adoption management', 'Volunteer coordination', 'Donation transparency', 'Audit-friendly administrative workflows'],
      challenges: ['Coordinating multiple operational roles without making the interface feel heavy', 'Keeping animal, adopter, volunteer, and donation records traceable', 'Designing dashboards that support quick decisions for welfare operations'],
      learnings: ['Practical systems need clear permissions and audit-friendly workflows', 'Operational dashboards are strongest when they mirror real field processes', 'AI-assisted features still need transparent human review paths'],
      screenshots: [
        { src: 'assets/images/projects/pawlse-cover.png', alt: 'PAWLSE animal welfare platform preview' }
      ],
      github: 'https://github.com/M3XH4/pawlse/',
      liveDemo: '#',
      architecture: {
        description: 'React and Inertia power the interface while Laravel handles application logic, authentication, and database workflows.',
        diagram: '[React/Inertia UI] -> [Laravel Application] -> [MySQL Database]'
      },
      timeline: '2026',
      role: 'Full-stack developer responsible for interface design, data modeling, Laravel workflows, and project architecture.',
      client: 'Academic / Portfolio Case Study',
      platform: 'Web application',
      database: 'MySQL',
      api: 'Laravel application services',
      deployment: 'Staged web deployment',
      achievements: ['Unified several animal welfare workflows into one system concept', 'Designed admin flows for operational oversight and transparency'],
      tags: ['Animal Welfare', 'Operations', 'AI-Assisted Workflow'],
      thumbnail: 'assets/images/projects/pawlse-cover.png',
      heroImage: 'assets/images/projects/pawlse-cover.png'
    },
    {
      id: 'invyte-system',
      title: 'Invyte: A RSVP & Event Management System',
      description: 'A mobile-first RSVP and event management platform with QR invitations, guest management, attendance tracking, analytics, and real-time event workflows.',
      archiveDescription: 'Full-stack RSVP and event management ecosystem featuring QR-based invitations, guest RSVP flows, attendance tracking, analytics dashboards, notifications, event themes, public RSVP pages, and role-based event management.',
      image: 'assets/images/projects/invyte-cover.png',
      imageAlt: 'Invyte Android app project preview',
      category: 'Android/Mobile',
      filters: ['mobile'],
      status: ['Completed'],
      tech: ['React Native', 'React', 'Laravel', 'PostgreSQL', 'TailwindCSS', 'TypeScript'],
      githubUrl: 'https://github.com/M3XH4/invyte/',
      detailsUrl: 'project-details.html?id=invyte-system',
      detailsLabel: 'View Details',
      archiveDetailsLabel: 'View Details',
      featured: true,
      bentoSize: 'medium',
      slug: 'invyte-system',
      shortDescription: 'A mobile-first RSVP and event management system with QR invitations, guest tracking, analytics, and real-time workflows.',
      fullDescription: 'Invyte helps event organizers manage invitations, RSVPs, guest attendance, and event analytics in one workflow.',
      problem: 'Event coordination becomes difficult when RSVPs, attendance, and guest communication are scattered across different tools.',
      solution: 'Invyte combines QR-based invitations, guest flows, attendance tracking, and dashboards into one event management experience.',
      technologies: ['React Native', 'React', 'Laravel', 'PostgreSQL', 'TailwindCSS'],
      features: ['QR invitation flow', 'Guest RSVP management', 'Attendance tracking', 'Analytics dashboard', 'Public RSVP pages'],
      challenges: ['Keeping the RSVP flow quick while still supporting organizer-level event controls', 'Designing mobile-first screens that remain useful for event staff during check-in'],
      learnings: ['Mobile-first event tools need fast guest flows and clean organizer dashboards', 'QR workflows benefit from clear success, pending, and invalid states'],
      screenshots: [
        { src: 'assets/images/projects/invyte-cover.png', alt: 'Invyte RSVP and event management project preview' }
      ],
      github: 'https://github.com/M3XH4/invyte/',
      liveDemo: '#',
      architecture: {
        description: 'Mobile and web clients communicate with a Laravel backend and PostgreSQL database.',
        diagram: '[Mobile/Web Client] -> [Laravel Backend] -> [PostgreSQL]'
      },
      timeline: '2026',
      role: 'Full-stack and mobile developer focused on guest workflows, organizer dashboards, and backend data flows.',
      client: 'Portfolio Product Concept',
      platform: 'Mobile and web',
      database: 'PostgreSQL',
      api: 'Laravel REST-style endpoints',
      deployment: 'Mobile/web prototype',
      achievements: ['Created a complete event workflow from invitation to attendance tracking'],
      tags: ['Events', 'QR Workflow', 'Mobile First'],
      thumbnail: 'assets/images/projects/invyte-cover.png',
      heroImage: 'assets/images/projects/invyte-cover.png'
    },
    {
      id: 'cineplex-system',
      title: 'Cineplex: A Cinema Management System',
      description: 'A cinema management and movie recommendation web system with booking, seat selection, and admin analytics.',
      archiveDescription: 'MERN-based cinema platform for managing movies, showtimes, bookings, recommendations, payments, and cinema operations.',
      image: 'assets/images/projects/cineplex-cover.png',
      imageAlt: 'Cineplex cinema management system project preview',
      category: 'Full Stack',
      filters: ['web', 'fullstack'],
      status: ['Completed'],
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      githubUrl: 'https://github.com/M3XH4/cineplex/',
      detailsUrl: 'project-details.html?id=cineplex-system',
      detailsLabel: 'View Details',
      featured: true,
      bentoSize: 'medium',
      slug: 'cineplex-system',
      shortDescription: 'A cinema management and movie recommendation web system with booking, seat selection, and admin analytics.',
      fullDescription: 'Cineplex supports movie browsing, showtime management, booking flows, seat selection, and cinema operations.',
      problem: 'Cinema platforms need a clear customer booking flow and a separate operational workflow for managing movies and showtimes.',
      solution: 'The system combines a customer-facing movie interface with backend management tools for cinema operations.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      features: ['Movie browsing', 'Seat selection', 'Booking management', 'Admin analytics', 'Showtime management'],
      challenges: ['Keeping booking state clear while supporting admin management features', 'Modeling rooms, showtimes, seats, and reservations cleanly'],
      learnings: ['Booking systems need careful data modeling around time, capacity, and reservation state', 'Admin tools should make operational status visible at a glance'],
      screenshots: [
        { src: 'assets/images/projects/cineplex-cover.png', alt: 'Cineplex cinema management project preview' }
      ],
      github: 'https://github.com/M3XH4/cineplex/',
      liveDemo: 'https://cineplex-two.vercel.app/',
      architecture: {
        description: 'A MERN stack application connects customer and admin interfaces through API-driven booking workflows.',
        diagram: '[React Client] -> [Express API] -> [MongoDB]'
      },
      timeline: '2023',
      role: 'Full-stack developer responsible for customer booking flows, admin screens, and data modeling.',
      client: 'Academic / Portfolio Project',
      platform: 'Web application',
      database: 'MongoDB',
      api: 'Express.js API',
      deployment: 'Deployed on Vercel',
      achievements: ['Built a cinema workflow that connects movie discovery with operational management'],
      tags: ['Cinema', 'Booking', 'MERN'],
      thumbnail: 'assets/images/projects/cineplex-cover.png',
      heroImage: 'assets/images/projects/cineplex-cover.png'
    },
    {
      id: 'libro-system',
      title: 'Libro: A Library Management System',
      description: 'A modern library management platform with book cataloging, borrowing workflows, reservations, analytics, and responsive dashboards for administrators, librarians, and members.',
      image: 'assets/images/projects/libro-cover.png',
      imageAlt: 'Libro Library Management System preview',
      category: 'Full Stack',
      filters: ['web', 'fullstack'],
      status: ['Completed'],
      tech: ['Laravel', 'React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/M3XH4/libro',
      detailsUrl: 'project-details.html?id=libro-library-system',
      detailsLabel: 'View Project',
      archiveDetailsLabel: 'View Details',
      featured: true,
      bentoSize: 'wide',
      slug: 'libro-library-system',
      shortDescription: 'A responsive library management system with role-based dashboards, borrowing management, reservations, analytics, and realtime-ready workflows.',
      fullDescription: 'Libro is a modern web-based Library Management System built with Laravel and React, designed to streamline book circulation, member management, reservations, overdue tracking, and reporting through a clean and scalable architecture.',
      problem: 'Traditional library processes are often manual, slow, and difficult to track, leading to inefficient borrowing workflows, overdue management issues, and poor user experience.',
      solution: 'Libro centralizes all library operations into a responsive web platform with role-based dashboards, automated workflows, advanced search capabilities, and realtime-ready architecture.',
      technologies: ['Laravel', 'React', 'Tailwind CSS', 'MySQL', 'Sanctum', 'Vite'],
      features: [
        'Responsive admin, librarian, and member dashboards',
        'Book catalog and inventory management',
        'Borrowing and return workflows',
        'Reservation and queue system',
        'Realtime-ready notifications',
        'Advanced search and filtering',
        'Analytics and reporting dashboards',
        'Role-based authentication and access control'
      ],
      challenges: [
        'Maintaining responsive layouts across dashboards and tables',
        'Handling secure authentication with Laravel Sanctum',
        'Managing consistent UI theming across multiple user roles',
        'Optimizing borrowing and reservation workflows'
      ],
      learnings: [
        'Consistent design systems improve usability and maintainability',
        'Proper state management simplifies complex dashboard interactions',
        'Responsive table and sidebar patterns are critical for admin systems',
        'Laravel and React provide a scalable architecture for enterprise-style platforms'
      ],
      screenshots: [
        {
          src: 'assets/images/projects/libro-cover.png',
          alt: 'Libro dashboard preview'
        }
      ],
      github: 'https://github.com/M3XH4/libro',
      liveDemo: '#',
      architecture: {
        description: 'The frontend React client communicates with a Laravel REST API using Sanctum authentication, while the backend handles business logic, database operations, and queued notifications.',
        diagram: '[React Client] -> [Laravel API] -> [MySQL Database]'
      },
      timeline: '2024',
      role: 'Full Stack Developer and UI/UX Designer.',
      platform: 'Web application',
      api: 'REST API',
      tags: ['Library System', 'Laravel', 'React', 'Dashboard'],
      thumbnail: 'assets/images/projects/libro-cover.png',
      heroImage: 'assets/images/projects/libro-cover.png'
    },
    {
      id: 'chillgaming-application',
      title: 'ChillGaming: A Retro Arcade Platform',
      description: 'A neon-powered retro arcade web platform featuring multiple classic games with responsive gameplay and immersive UI.',
      archiveDescription: 'A fully responsive retro arcade gaming platform built with HTML, CSS, and JavaScript featuring classic browser games, neon arcade visuals, reusable canvas systems, and mobile-friendly gameplay.',
      image: 'assets/images/projects/chillgaming-cover.png',
      imageAlt: 'ChillGaming retro arcade platform preview',
      category: 'Web Game Development',
      filters: ['web', 'games', 'javascript'],
      status: ['Completed'],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'LocalStorage'],
      githubUrl: 'https://github.com/M3XH4/ChillGaming',
      detailsUrl: 'project-details.html?id=chillgaming-application',
      detailsLabel: 'View Details',
      archiveDetailsLabel: 'View Details',
      featured: false,
      bentoSize: 'large',
      slug: 'chillgaming',

      shortDescription:
        'A retro neon arcade platform featuring Tetris, Snake, Tic-Tac-Toe, Pac-Man, Flappy Bird, and Space Invaders with responsive gameplay and reusable canvas architecture.',

      fullDescription:
        'ChillGaming is a browser-based retro arcade platform inspired by classic 80s arcade machines. Built with HTML, CSS, and JavaScript, the platform combines nostalgic gameplay with modern responsive UI/UX. It features multiple fully playable games, reusable canvas systems, animated retro visuals, mobile compatibility, score tracking, LocalStorage leaderboards, and a unified arcade dashboard experience.',

      problem:
        'Most simple browser arcade projects feel disconnected, outdated, or poorly optimized for modern devices. Existing mini-game collections often lack consistent UI/UX, responsive design, reusable architecture, and mobile compatibility.',

      solution:
        'ChillGaming introduces a unified retro arcade ecosystem with reusable game systems, responsive layouts, centralized score management, modern UI/UX, and multiple classic games integrated into a single immersive platform.',

      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript ES6+',
        'Canvas API',
        'LocalStorage',
        'Responsive Design'
      ],

      features: [
        'Fully playable retro arcade games',
        'Responsive desktop and mobile gameplay',
        'Reusable centered canvas system',
        'Retro neon arcade UI',
        'Animated hero section',
        'Infinite scrolling marquee',
        'Global leaderboard',
        'High score persistence with LocalStorage',
        'Mobile touch controls',
        'Pause and restart systems',
        'Game instructions panel',
        'Difficulty selection',
        'Sound effects and music toggles',
        'Reusable game dashboard architecture',
        'Modern game selector UI',
        'Animated retro backgrounds and CRT effects'
      ],

      challenges: [
        'Creating a reusable canvas layout compatible with multiple game types',
        'Ensuring responsive gameplay across desktop and mobile devices',
        'Balancing retro aesthetics with modern UI/UX practices',
        'Optimizing Canvas rendering performance',
        'Implementing consistent input handling across games',
        'Managing reusable score and leaderboard systems'
      ],

      learnings: [
        'Reusable game systems reduce duplicated logic and simplify scaling',
        'Responsive game interfaces require careful canvas scaling strategies',
        'Consistent UI systems improve user immersion and usability',
        'Modular JavaScript architecture makes multi-game platforms easier to maintain',
        'Retro visual design can coexist with modern frontend practices'
      ],

      screenshots: [
        {
          src: 'assets/images/projects/chillgaming-cover.png',
          alt: 'ChillGaming homepage hero section'
        },
        {
          src: 'assets/images/projects/chillgaming-game-cabinet.png',
          alt: 'ChillGaming game cabinet interface'
        },
        {
          src: 'assets/images/projects/chillgaming-game-dashboard.png',
          alt: 'ChillGaming gameplay dashboardinterface'
        }
      ],

      github: 'https://github.com/M3XH4/ChillGaming',
      liveDemo: 'https://m3xh4.github.io/ChillGaming/',

      architecture: {
        description:
          'The platform uses a modular JavaScript architecture with reusable managers for games, UI, audio, storage, and leaderboard systems. Each game plugs into a shared responsive canvas dashboard.',
        diagram:
          '[UI Manager] -> [Game Manager] -> [Canvas Games] -> [Storage/Leaderboard System]'
      },

      timeline: '2022',

      role:
        'Frontend developer, UI/UX designer, gameplay systems engineer, and responsive web game developer.',

      platform: 'Web Browser',

      database: 'LocalStorage',

      tags: [
        'Retro Arcade',
        'HTML5 Games',
        'Canvas API',
        'JavaScript',
        'Responsive Design',
        'Game Development',
        'Frontend'
      ],

      thumbnail: 'assets/images/projects/chillgaming-cover.png',

      heroImage: 'assets/images/projects/chillgaming-cover.png'
    },
    {
      id: 'stratify-kpi-system',
      title: 'Stratify: A KPI Management System',
      description: 'A modern KPI monitoring and analytics platform designed for organizations to track employee, department, and operational performance.',
      image: 'assets/images/projects/stratify-cover.png',
      imageAlt: 'Stratify KPI Management System preview',
      category: 'System',
      filters: ['fullstack', 'dashboard', 'analytics'],
      status: ['Completed'],
      tech: ['C# .NET 8', 'Windows Forms', 'ASP.NET Core API', 'SQL Server'],
      githubUrl: 'https://github.com/M3XH4/stratify',
      detailsUrl: 'project-details.html?id=stratify-kpi-system',
      detailsLabel: 'View Details',
      slug: 'stratify-kpi-system',

      shortDescription: 'A KPI and analytics platform for tracking organizational performance, employee productivity, and department goals.',

      fullDescription: 'Stratify is a modern KPI Management System that helps organizations monitor key performance indicators, evaluate productivity, visualize analytics, and streamline operational reporting through an intuitive dashboard and enterprise-ready architecture.',

      problem: 'Organizations often rely on spreadsheets and manual reporting methods that make KPI tracking inefficient, inconsistent, and difficult to analyze in real time.',

      solution: 'Stratify centralizes KPI management through a modern dashboard system with automated calculations, analytics visualization, reporting tools, and role-based monitoring.',

      technologies: [
        'C# .NET 8',
        'Windows Forms',
        'ASP.NET Core Web API',
        'SQL Server',
        'Entity Framework Core',
        'LiveCharts2',
        'REST API'
      ],

      features: [
        'KPI tracking dashboard',
        'Department performance analytics',
        'Employee KPI evaluation',
        'Role-based authentication',
        'Progress monitoring',
        'Interactive charts and reports',
        'PDF and Excel export',
        'Notification and alert system',
        'Audit trail logging',
        'Modern blue-themed UI'
      ],

      challenges: [
        'Designing a modern dashboard experience using Windows Forms',
        'Keeping KPI calculations accurate and scalable',
        'Structuring role-based permissions cleanly across the API and desktop app',
        'Synchronizing dashboard analytics with live database updates'
      ],

      learnings: [
        'Clean architecture improves maintainability in large desktop systems',
        'Separating API logic from the WinForms client improves scalability and security',
        'Modern UI frameworks significantly improve desktop application usability',
        'Data visualization greatly enhances KPI monitoring and decision-making'
      ],

      screenshots: [
        {
          src: 'assets/images/projects/stratify-cover.png',
          alt: 'Stratify KPI dashboard preview'
        }
      ],

      github: 'https://github.com/M3XH4/stratify',
      liveDemo: '#',

      architecture: {
        description: 'The Windows Forms client communicates with an ASP.NET Core REST API connected to a SQL Server database.',
        diagram: '[WinForms Client] -> [ASP.NET Core API] -> [SQL Server Database]'
      },

      timeline: '2022',

      role: 'Full-stack developer and system architect.',

      platform: 'Desktop and API-based enterprise system',

      database: 'SQL Server',

      api: 'ASP.NET Core REST API',

      tags: [
        'KPI',
        'Analytics',
        'Dashboard',
        'Enterprise',
        'Performance Monitoring',
        'C#',
        '.NET'
      ],

      thumbnail: 'assets/images/projects/stratify-cover.png',

      heroImage: 'assets/images/projects/stratify-cover.png'
    },
    {
      id: 'exquest',
      title: 'EXQuest',
      description: 'A classic text-based RPG adventure built in Java featuring turn-based combat, exploration, inventory management, and spell casting.',
      image: 'assets/images/projects/exquest-cover.png',
      imageAlt: 'EXQuest RPG project preview',
      category: 'Game',
      filters: ['java', 'game', 'fullstack'],
      status: ['Completed'],
      tech: ['Java', 'Spring Boot', 'JLayer', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/M3XH4/EXQuestBeta',
      detailsUrl: 'project-details.html?id=exquest',
      detailsLabel: 'View Details',
      slug: 'exquest',

      shortDescription:
        'A retro-inspired text RPG where players explore Gaia, battle monsters, collect loot, and grow stronger through strategic progression.',

      fullDescription:
        'EXQuest is a classic command-line RPG developed in Java that combines nostalgic text-based gameplay with modern progression systems. Players journey through the world of Gaia, fighting monsters, managing equipment, learning elemental spells, and encountering randomized events including battles, merchants, and campsites.',

      problem:
        'Modern RPGs often require heavy graphics, internet access, and complex systems. EXQuest was created to provide a lightweight offline RPG experience focused purely on gameplay mechanics and strategic progression.',

      solution:
        'The project delivers a modular Java-based RPG system with turn-based combat, inventory management, randomized encounters, spell casting, save/load functionality, and immersive terminal styling using ANSI colors and sound effects.',

      technologies: [
        'Java',
        'Spring Boot',
        'JLayer',
        'HTML',
        'CSS',
        'JavaScript',
        'Serialization'
      ],

      features: [
        'Turn-based combat system',
        'Player leveling and progression',
        'Inventory and equipment management',
        'Elemental spell casting',
        'Randomized exploration events',
        'Merchant and economy system',
        'Automatic save and load system',
        'ANSI-colored terminal interface',
        'Sound effect integration using JLayer'
      ],

      challenges: [
        'Designing a modular RPG architecture while maintaining simple command-line gameplay',
        'Managing persistent save/load systems using serialization',
        'Balancing enemy scaling and progression mechanics',
        'Adapting a console-based game into a browser-deployable application'
      ],

      learnings: [
        'Strong object-oriented architecture makes gameplay systems easier to expand',
        'Gameplay feedback is essential even in text-only interfaces',
        'Backend game logic can be separated from presentation for browser deployment',
        'Replayability improves significantly through randomized encounter systems'
      ],

      screenshots: [
        {
          src: 'assets/images/projects/exquest-cover.png',
          alt: 'EXQuest cover image'
        },
        {
          src: 'assets/images/projects/exquest-terminal.png',
          alt: 'EXQuest gameplay website terminal'
        }
      ],

      github: 'https://github.com/M3XH4/EXQuestBeta',

      liveDemo: 'https://exquest.onrender.com/',

      architecture: {
        description:
          'The browser UI communicates with a Spring Boot backend that manages the RPG engine, combat systems, inventory logic, and save/load functionality.',

        diagram:
          '[Browser Terminal UI] -> [Spring Boot Backend] -> [Game Engine Classes] -> [Save Data Files]'
      },

      timeline: '2021 - 2022',

      role:
        'Full-stack game developer responsible for gameplay systems, backend architecture, combat mechanics, deployment, and UI adaptation.',

      platform: 'Web application / Java desktop CLI game',

      database: 'File-based serialization',

      api: 'Spring Boot REST API',

      tags: [
        'RPG',
        'Java',
        'Game Development',
        'Spring Boot',
        'Text Adventure',
        'Retro Game'
      ],

      thumbnail: 'assets/images/projects/exquest-cover.png',

      heroImage: 'assets/images/projects/exquest-cover.png'
    },
    {
      id: 'inventory-system',
      title: 'Inventory Operations System',
      description: 'A practical stock, supplier, and reporting workflow for small business operations.',
      image: 'assets/images/projects/project-backend.svg',
      imageAlt: 'Inventory system project preview',
      category: 'System',
      filters: ['backend', 'fullstack'],
      status: ['In Progress'],
      tech: ['Node.js', 'MySQL', 'REST API'],
      githubUrl: 'https://github.com',
      detailsUrl: 'project-details.html?id=inventory-system',
      detailsLabel: 'View Details',
      slug: 'inventory-system',
      shortDescription: 'A practical operations system for stock tracking, supplier workflows, and lightweight reporting.',
      fullDescription: 'A practical system for clearer stock movement, supplier records, and reporting workflows.',
      problem: 'Manual inventory tracking creates duplicated records and limited operational visibility.',
      solution: 'The system uses a clean web interface backed by API endpoints and relational data modeling.',
      technologies: ['Node.js', 'MySQL', 'REST API'],
      features: ['Stock tracking', 'Supplier records', 'Adjustment logs', 'Reports'],
      challenges: ['Keeping inventory adjustments auditable while making common updates quick', 'Structuring reports around decisions users actually make'],
      learnings: ['Operational tools work best when the interface mirrors the real workflow', 'Relational modeling helps keep stock movement traceable'],
      screenshots: [
        { src: 'assets/images/projects/project-backend.svg', alt: 'Inventory operations system preview' }
      ],
      github: 'https://github.com',
      liveDemo: '#',
      architecture: {
        description: 'The browser UI communicates with a Node.js API backed by MySQL.',
        diagram: '[Browser UI] -> [Node.js REST API] -> [MySQL]'
      },
      timeline: '2024 - Present',
      role: 'Backend-focused full-stack developer.',
      platform: 'Web application',
      database: 'MySQL',
      api: 'REST API',
      tags: ['Inventory', 'Operations', 'Backend'],
      thumbnail: 'assets/images/projects/project-backend.svg',
      heroImage: 'assets/images/projects/project-backend.svg'
    },
  ],

  certificates: [
    {
      title: 'Java Fundamentals',
      issuer: 'Oracle Academy',
      year: '2024',
      image: 'assets/images/certificates/java-fundamentals.jpg',
      category: 'Programming',
      description: 'Java programming fundamentals and object-oriented development concepts.'
    },
    {
      title: 'Copilot CDO: AI-Powered Coding For Everyone',
      issuer: 'DevCon CDO',
      year: '2025',
      image: 'assets/images/certificates/copilot-cdo-ai.png',
      category: 'AI Coding',
      description: 'Practical introduction to AI-assisted software development workflows.'
    },
    {
      title: 'Git Mastery: Basic to Beyond',
      issuer: 'DevCon CDO',
      year: '2024',
      image: 'assets/images/certificates/git-mastery.png',
      category: 'Developer Tools',
      description: 'Git fundamentals, collaboration workflows, and version control practice.'
    },
    {
      title: 'SAP X Accenture: Student Career Talk',
      issuer: 'SAP University Alliances Accenture',
      year: '2025',
      image: 'assets/images/certificates/sap-x-accenture.jpg',
      category: 'Career',
      description: 'Industry career session for technology students and emerging professionals.'
    },
    {
      title: 'Bridging Gaps - Java Tutorials',
      issuer: 'Google Developer Student Clubs',
      year: '2022',
      image: 'assets/images/certificates/bridging-gaps.jpg',
      category: 'Programming',
      description: 'Introductory Java tutorial and student developer learning session.'
    }
  ],

  skillCategories: [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: '/assets/icons/html.svg' },
        { name: 'CSS', icon: '/assets/icons/css.svg' },
        { name: 'JavaScript', icon: '/assets/icons/javascript.svg' },
        { name: 'React', icon: '/assets/icons/react.svg' },
        { name: 'Next.js', icon: '/assets/icons/next-js.svg' },
        { name: 'Tailwind CSS', icon: '/assets/icons/tailwind-css.svg' },
        { name: 'Typescript', icon: '/assets/icons/typescript.svg' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Laravel', icon: '/assets/icons/laravel.svg' },
        { name: 'Inertia.js', icon: '/assets/icons/laravel.svg' },
        { name: 'Node.js', icon: '/assets/icons/node-js.svg' },
        { name: 'Express.js', icon: '/assets/icons/express-js.svg' },
        { name: 'FastAPI', icon: '/assets/icons/fastapi.svg' },
        { name: 'Django', icon: '/assets/icons/django.svg' },
        { name: 'RESTful APIs', icon: '/assets/icons/restapi.svg' },
        { name: 'JWT Authentication', icon: '/assets/icons/jwt-auth.svg' }
      ]
    },
    {
      title: 'Android / Mobile',
      skills: [
        { name: 'Java', icon: '/assets/icons/java.svg' },
        { name: 'React Native', icon: '/assets/icons/react.svg' },
        { name: 'Room', icon: '/assets/icons/database.svg' },
        { name: 'Flutter', icon: '/assets/icons/flutter.svg' },
        { name: 'SQLite', icon: '/assets/icons/sqlite.svg' }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', icon: '/assets/icons/mysql.svg' },
        { name: 'PostgreSQL', icon: '/assets/icons/postgresql.svg' },
        { name: 'Redis', icon: '/assets/icons/redis.svg' },
        { name: 'MongoDB', icon: '/assets/icons/mongodb.svg' },
        { name: 'Microsoft SQL', icon: '/assets/icons/database.svg' },
        { name: 'Firebase', icon: '/assets/icons/firebase.svg' }
      ]
    },
    {
      title: 'DevOps Tools',
      skills: [
        { name: 'GitHub / Git', icon: '/assets/icons/github.svg' },
        { name: 'Docker', icon: '/assets/icons/docker.svg' },
        { name: 'Terminal', icon: '/assets/icons/terminal.svg' },
        { name: 'Postman', icon: '/assets/icons/postman.svg' },
        { name: 'GitHub Actions', icon: '/assets/icons/github.svg' },
        { name: 'Nginx', icon: '/assets/icons/nginx.svg' },
        { name: 'Cloudflare DNS', icon: '/assets/icons/cloudflare.svg' }
      ]
    },
    {
      title: 'Design & Deployment',
      skills: [
        { name: 'Figma', icon: '/assets/icons/figma.svg' },
        { name: 'Adobe Photoshop', icon: '/assets/icons/photoshop.svg' },
        { name: 'Vercel', icon: '/assets/icons/vercel.svg' },
        { name: 'DigitalOcean', icon: '/assets/icons/digitalocean.svg' },
        { name: 'NameCheap', icon: '/assets/icons/namecheap.svg' },
        { name: 'Supabase', icon: '/assets/icons/supabase.svg' },
        { name: 'Render', icon: '/assets/icons/render.svg' }
      ]
    }
  ],

  developerJourney: [
    {
      date: '2020 - Present',
      title: 'Fullstack Developer',
      organization: 'Freelance',
      description: 'Building scalable web applications for clients across different industries using modern frontend and backend technologies.'
    },
    {
      date: '2020 - 2022',
      title: 'Software Engineer',
      organization: 'Contract-based',
      description: 'Collaborated with development teams to design, maintain, and improve business applications. Worked on backend integrations, feature implementation, debugging, and optimizing system performance for various client projects.'
    },
    {
      date: '2017 - 2019',
      title: 'Junior Software Developer',
      organization: '2ndBanana',
      description: 'Assisted in the development and maintenance of software applications. Participated in code reviews, testing, and debugging to ensure quality and performance.'
    }
  ],

  educationBackground: [
    {
      level: 'Tertiary',
      program: 'Bachelor of Science in Information Technology - STI College',
      school: 'Mortola Street, Barangay 40, Cagayan De Oro City 9000',
      period: '2023-2027'
    },
    {
      level: 'Senior High School',
      program: 'IT in Mobile App and Web Development - STI College',
      school: 'Mortola Street, Barangay 40, Cagayan De Oro City 9000',
      period: '2021-2023'
    },
    {
      level: 'Junior High School',
      program: 'Misamis Oriental General Comprehensive High School',
      school: 'Don Apolinar Velez Street, Cagayan De Oro City, 9000',
      period: '2017-2021'
    },
    {
      level: 'Elementary',
      program: 'City Central School',
      school: 'Yacapin Velez Street, Cagayan De Oro City, 9000',
      period: '2011-2017'
    }
  ],

  learningAttended: [
    {
      title: 'Training, Seminars & Workshops',
      items: [
        'Sphinx’s Archive Chapter 1: IT Research Innovation - STI College, 2025',
        'SAP x Accenture Career Talk For Student - STI College, 2025',
        'Leadership Training Program - STI College, 2025',
        'Copilot CDO: AI-Powered Coding For Everyone - GitHub, 2025',
        'Agri-Tech Innovate: Accelerating Digital Solutions for Sustainable Agriculture & Fisheries - USTP, 2025',
        'Code Camp: Newbie Coding Booth - DSC STI, 2024',
        'TechKwentuhan - DevCon CDO, 2024',
        'Git Mastery Basics To Beyond - DevCon CDO, 2024',
        'New Year, New Skills: Web Dev Tutorial - DSC STI, 2024',
        'Java Tutorial - STI College, 2023',
        'Bridging Gaps: Java Tutorials - DSC STI, 2022'
      ]
    }
  ]
};
