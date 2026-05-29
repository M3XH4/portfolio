/* Editable portfolio content.
   Add or update projects, certificates, skills, and attended learning items here. */

window.portfolioData = {
  projects: [
    // PAWLSE: An AI Assisted Animal Welfare and Engagement Management System
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
        { src: 'assets/images/projects/pawlse-cover.png', alt: 'PAWLSE animal welfare platform preview' },
        { src: 'assets/images/projects/pawlse-rescue.png', alt: 'PAWLSE rescue report dashboard preview' },
        { src: 'assets/images/projects/pawlse-sos.png', alt: 'PAWLSE sos report dashboard preview' },
      ],
      github: 'https://github.com/M3XH4/pawlse/',
      liveDemo: '#',
      architecture: {
        description: 'React and Inertia power the interface while Laravel handles application logic, authentication, and database workflows.',
        diagram: '[React/Inertia UI] -> [Laravel Application] -> [MySQL Database]'
      },
      timeline: '2026-Present',
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
    // INVYTE: A Mobile-First RSVP and Event Management System
    {
      id: 'invyte-system',
      title: 'Invyte: A RSVP & Event Management System',
      description: 'A mobile-first RSVP and event management platform with QR invitations, guest management, attendance tracking, analytics, and real-time event workflows.',
      archiveDescription: 'Full-stack RSVP and event management ecosystem featuring QR-based invitations, guest RSVP flows, attendance tracking, analytics dashboards, notifications, event themes, public RSVP pages, and role-based event management.',
      image: 'assets/images/projects/invyte-cover.png',
      imageAlt: 'Invyte Android app project preview',
      category: 'Android/Mobile',
      filters: ['mobile'],
      status: ['Deployed'],
      tech: ['React Native', 'React', 'Laravel', 'PostgreSQL', 'TailwindCSS', 'TypeScript'],
      githubUrl: 'https://github.com/M3XH4/invyte/',
      detailsUrl: 'project-details.html?id=invyte-system',
      detailsLabel: 'View Details',
      archiveDetailsLabel: 'View Details',
      featured: true,
      bentoSize: 'medium',
      slug: 'invyte-system',
      shortDescription: 'A mobile-first RSVP and event management system with QR invitations, guest tracking, analytics, and real-time workflows.',
      fullDescription: 'Invyte helps event organizers manage invitations, RSVPs, guest attendance, and event analytics in one workflow. ',
      problem: 'Event coordination becomes difficult when RSVPs, attendance, and guest communication are scattered across different tools.',
      solution: 'Invyte combines QR-based invitations, guest flows, attendance tracking, and dashboards into one event management experience.',
      technologies: ['React Native', 'React', 'Laravel', 'PostgreSQL', 'TailwindCSS'],
      features: ['QR invitation flow', 'Guest RSVP management', 'Attendance tracking', 'Analytics dashboard', 'Public RSVP pages'],
      challenges: ['Keeping the RSVP flow quick while still supporting organizer-level event controls', 'Designing mobile-first screens that remain useful for event staff during check-in'],
      learnings: ['Mobile-first event tools need fast guest flows and clean organizer dashboards', 'QR workflows benefit from clear success, pending, and invalid states'],
      screenshots: [
        { src: 'assets/images/projects/invyte-cover.png', alt: 'Invyte RSVP and event management project preview' },
        { src: 'assets/images/projects/invyte-events.png', alt: 'Invyte event list and dashboard preview' },
        { src: 'assets/images/projects/invyte-create-event-details.png', alt: 'Invyte create Event Details preview' },
      ],
      github: 'https://github.com/M3XH4/invyte/',
      liveDemo: 'https://invyte-zri6.onrender.com/',
      appUrl: 'https://expo.dev/artifacts/eas/dFcEJ59gCJrgDGyS9ZuGg4.apk',
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
      deployment: 'Deployed on Render (web) and Expo (mobile)',
      achievements: ['Created a complete event workflow from invitation to attendance tracking'],
      tags: ['Events', 'QR Workflow', 'Mobile First'],
      thumbnail: 'assets/images/projects/invyte-cover.png',
      heroImage: 'assets/images/projects/invyte-cover.png'
    },
    // CINEPLEX: A Cinema Management System
    {
      id: 'cineplex-system',
      title: 'Cineplex: A Cinema Management System',
      description: 'A cinema management and movie recommendation web system with booking, seat selection, and admin analytics.',
      archiveDescription: 'MERN-based cinema platform for managing movies, showtimes, bookings, recommendations, payments, and cinema operations.',
      image: 'assets/images/projects/cineplex-cover.png',
      imageAlt: 'Cineplex cinema management system project preview',
      category: 'Full Stack',
      filters: ['web', 'fullstack'],
      status: ['Deployed'],
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
    // LIBRO: A Library Management System
    {
      id: 'libro-system',
      title: 'Libro: A Library Management System',
      description: 'A modern library management platform with book cataloging, borrowing workflows, reservations, analytics, and responsive dashboards for administrators, librarians, and members.',
      image: 'assets/images/projects/libro-cover.png',
      imageAlt: 'Libro Library Management System preview',
      category: 'Full Stack',
      filters: ['web', 'fullstack'],
      status: ['Deployed'],
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
      liveDemo: 'https://libro-iota-sable.vercel.app/',
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
    // CHILLGAMING: A Retro Arcade Platform
    {
      id: 'chillgaming-application',
      title: 'ChillGaming: A Retro Arcade Platform',
      description: 'A neon-powered retro arcade web platform featuring multiple classic games with responsive gameplay and immersive UI.',
      archiveDescription: 'A fully responsive retro arcade gaming platform built with HTML, CSS, and JavaScript featuring classic browser games, neon arcade visuals, reusable canvas systems, and mobile-friendly gameplay.',
      image: 'assets/images/projects/chillgaming-cover.png',
      imageAlt: 'ChillGaming retro arcade platform preview',
      category: 'Web Game Development',
      filters: ['web', 'games', 'javascript'],
      status: ['Deployed'],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'LocalStorage'],
      githubUrl: 'https://github.com/M3XH4/ChillGaming',
      detailsUrl: 'project-details.html?id=chillgaming-application',
      detailsLabel: 'View Details',
      archiveDetailsLabel: 'View Details',
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
    // STRATIFY: A KPI Management System
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
    // EXQUEST: A Text-Based RPG Adventure
    {
      id: 'exquest',
      title: 'EXQuest: A Text-Based RPG Adventure',
      description: 'A classic text-based RPG adventure built in Java featuring turn-based combat, exploration, inventory management, and spell casting.',
      image: 'assets/images/projects/exquest-cover.png',
      imageAlt: 'EXQuest RPG project preview',
      category: 'Game',
      filters: ['java', 'game', 'fullstack'],
      status: ['Deployed'],
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
    // SEAS: A School Event Attendance System
    {
      id: 'seas-system',
      title: 'SEAS: A School Event Attendance System',
      description: 'A QR-based school event attendance system that automates attendance checking, reduces queues, and provides real-time monitoring for students, organizers, and administrators.',
      image: 'assets/images/projects/seas-cover.png',
      imageAlt: 'School Event Attendance System project preview',
      category: 'Full Stack',
      filters: ['backend', 'fullstack', 'web'],
      status: ['In Progress', 'Case Study'],
      tech: ['React', 'TypeScript', 'TailwindCSS', 'Laravel', 'Inertia.js', 'MySQL', 'QR Library', 'HTML5 QR Code'],
      githubUrl: 'https://github.com/M3XH4/STI-SEAS',
      detailsUrl: 'project-details.html?id=seas-system',
      detailsLabel: 'View Details',
      slug: 'seas-system',
      shortDescription: 'A QR-based attendance system for faster, more accurate, and paperless school event attendance tracking.',
      fullDescription: 'SEAS is a School Event Attendance System designed to replace manual signing sheets with a secure digital QR-based attendance solution. It helps students generate dynamic QR codes, allows organizers to scan and monitor attendance in real time, and gives administrators access to records, reports, and user management tools.',
      problem: 'Manual school event attendance causes long queues, lost or incomplete attendance sheets, fake signatures, proxy attendance, counting errors, slow validation, and difficulty accessing past records.',
      solution: 'SEAS uses dynamic QR codes, role-based access, automatic attendance logging, real-time monitoring, and secure database storage to make event attendance faster, more accurate, organized, and paperless.',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Laravel', 'Inertia.js', 'MySQL', 'QR Library', 'HTML5 QR Code'],
      features: [
        'Official campus email login',
        'Role-based access for students, organizers, and admins',
        'Dynamic QR code generation with 30-second expiration',
        'QR-based attendance scanning',
        'Real-time attendance monitoring',
        'Automatic attendance logging',
        'Attendance status classification',
        'Student attendance dashboard',
        'Event management',
        'Manual attendance input',
        'Attendance reports and summaries',
        'Multi-device compatibility'
      ],
      challenges: [
        'Preventing QR code reuse, screenshots, proxy attendance, and duplicate scans',
        'Making QR validation fast enough to avoid long queues during large school events',
        'Designing clear role permissions for students, organizers, and administrators',
        'Supporting manual or offline attendance input when scanning fails'
      ],
      learnings: [
        'Dynamic QR codes improve security compared to fixed QR attendance systems',
        'Real-time monitoring helps organizers manage event attendance more efficiently',
        'Role-based access keeps system features organized and secure',
        'Attendance systems need backup workflows for scanner, device, or internet issues'
      ],
      screenshots: [
        {
          src: 'assets/images/projects/seas-cover.png', alt: 'School Event Attendance System preview',

        }
      ],
      github: 'https://github.com/M3XH4/STI-SEAS',
      liveDemo: '#',
      architecture: {
        description: 'The web interface allows students to generate QR codes, organizers to scan attendance, and admins to manage users and records. The Laravel backend handles authentication, event records, QR validation, attendance logs, and reports using MySQL.',
        diagram: '[Student / Organizer / Admin UI] -> [Laravel Backend] -> [MySQL Database] -> [QR Code Validation & Attendance Logs]'
      },
      timeline: '2025 - Present',
      role: 'Full-stack developer responsible for backend logic, database structure, QR attendance workflow, and system features.',
      platform: 'Web application',
      database: 'MySQL',
      api: 'Laravel routes / web-based backend',
      tags: ['Attendance System', 'QR Code', 'School Events', 'Laravel', 'Full Stack'],
      thumbnail: 'assets/images/projects/seas-cover.png',
      heroImage: 'assets/images/projects/seas-cover.png'
    },
    // SENTRY: An IOT Smoke Detection and MQTT-Based Emergency Alert System
    {
      id: 'sentry-system',
      title: 'SENTRY: An IoT Smoke Detection and MQTT-Based Emergency Alert System',
      description:
        'A real-time IoT-based smoke detection and emergency alert platform that uses MQTT communication, Node-RED, and a responsive monitoring dashboard for rapid incident response and environmental monitoring.',

      image: 'assets/images/projects/sentry-cover.png',
      imageAlt: 'SENTRY smoke detection dashboard preview',

      category: 'IoT System',
      filters: ['iot', 'fullstack', 'realtime'],

      status: ['Deployed'],

      tech: [
        'React',
        'TailwindCSS',
        'Node-RED',
        'MQTT',
        'WebSocket',
        'ESP32',
        'HiveMQ',
        'Docker',
        'Render'
      ],

      githubUrl: 'https://github.com/M3XH4/sentry',
      detailsUrl: 'project-details.html?id=sentry-system',
      detailsLabel: 'View Details',

      slug: 'sentry-system',

      shortDescription:
        'A real-time smoke monitoring and emergency notification system powered by IoT sensors and MQTT communication.',

      fullDescription:
        'SENTRY is an IoT-enabled smoke detection and emergency alert system designed to provide real-time environmental monitoring and rapid incident response using MQTT messaging protocols, Node-RED processing, and a responsive web dashboard.',

      problem:
        'Traditional smoke detection systems often lack centralized monitoring, real-time remote notifications, and scalable IoT integration for educational institutions and smart environments.',

      solution:
        'SENTRY integrates ESP32 smoke sensors, MQTT communication, Node-RED processing, and a responsive React dashboard to provide real-time smoke monitoring, live alerts, emergency notifications, and centralized device management.',

      technologies: [
        'React',
        'TailwindCSS',
        'Node-RED',
        'MQTT',
        'WebSocket',
        'ESP32',
        'HiveMQ',
        'Docker',
        'Render'
      ],

      features: [
        'Real-time smoke monitoring',
        'MQTT-based communication',
        'WebSocket live dashboard updates',
        'Emergency alert notifications',
        'Device status monitoring',
        'Responsive admin dashboard',
        'Node-RED workflow integration',
        'Smoke level analytics',
        'Alert history and pagination',
        'Automatic WebSocket reconnection'
      ],

      challenges: [
        'Maintaining stable real-time communication between MQTT brokers, Node-RED, and the React frontend',
        'Designing a responsive dashboard capable of handling live updates without performance degradation',
        'Implementing reliable WebSocket reconnection and fallback states for disconnected devices',
        'Ensuring scalable integration between IoT hardware and cloud-based deployment services'
      ],

      learnings: [
        'MQTT provides lightweight and efficient communication for IoT systems',
        'WebSockets are effective for live dashboard synchronization',
        'Node-RED simplifies IoT workflow orchestration and rapid prototyping',
        'Responsive dashboards improve monitoring accessibility across devices',
        'Cloud deployment requires careful WebSocket and SSL configuration'
      ],

      screenshots: [
        {
          src: 'assets/images/projects/sentry-cover.png',
          alt: 'SENTRY monitoring dashboard'
        },
        {
          src: 'assets/images/projects/sentry-sender.png',
          alt: 'SENTRY IoT sender device preview'
        },
        {
          src: 'assets/images/projects/sentry-receiver.png',
          alt: 'SENTRY IoT receiver device preview'
        }
      ],

      github: 'https://github.com/M3XH4/sentry',
      liveDemo: 'https://sentry-jk5j.onrender.com',

      architecture: {
        description:
          'ESP32 smoke sensors publish environmental data to an MQTT broker. Node-RED processes the messages and forwards real-time updates through WebSockets to the React dashboard for live monitoring and emergency notifications.',

        diagram:
          '[ESP32 Smoke Sensors] -> [HiveMQ MQTT Broker] -> [Node-RED] -> [WebSocket] -> [React Dashboard]'
      },

      timeline: '2025',

      role:
        'Full-stack IoT developer responsible for frontend dashboard development, MQTT integration, Node-RED workflows, deployment, and system architecture.',

      platform: 'Web-based IoT Monitoring System',

      database: 'Optional local/cloud storage for alert logs',

      api: 'MQTT + WebSocket communication',

      tags: [
        'IoT',
        'Smoke Detection',
        'Emergency Alerts',
        'MQTT',
        'Node-RED',
        'React',
        'ESP32',
        'Real-Time System'
      ],

      thumbnail: 'assets/images/projects/sentry-cover.png',

      heroImage: 'assets/images/projects/sentry-cover.png'
    },
    // ASTRA: A Zodiac Horoscope and Astrology Web Application
    {
      id: 'astra-application',
      title: 'Astra: A Zodiac Horoscope and Astrology Web Application',
      description: 'A modern astrology platform that delivers personalized horoscope readings, zodiac insights, compatibility analysis, and cosmic guidance through an immersive user experience.',
      image: 'assets/images/projects/astra-cover.png',
      imageAlt: 'Astra astrology web application preview',
      category: 'Web Application',
      filters: ['frontend', 'react', 'webapp'],
      status: ['Deployed'],
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'API Ninjas Horoscope API', 'LocalStorage'],
      githubUrl: 'https://github.com/M3XH4/astra',
      detailsUrl: 'project-details.html?id=astra-application',
      detailsLabel: 'View Details',
      slug: 'astra-application',

      shortDescription: 'A cosmic horoscope platform featuring zodiac-based predictions, compatibility insights, and personalized astrology experiences.',

      fullDescription: 'Astra is a modern astrology and horoscope web application designed to provide users with daily cosmic guidance through horoscope readings, zodiac personality insights, compatibility analysis, lucky elements, and personalized astrology experiences. Built with React and Tailwind CSS, Astra combines elegant design with responsive functionality to create a premium astrology platform.',

      problem: 'Many horoscope websites suffer from outdated designs, poor mobile experiences, excessive advertisements, and limited personalization, making astrology content less engaging and difficult to access.',

      solution: 'Astra provides a modern, mobile-first astrology platform with a clean interface, real-time horoscope data, zodiac discovery tools, and personalized experiences using LocalStorage without requiring user accounts.',

      technologies: [
        'React',
        'Tailwind CSS',
        'JavaScript',
        'API Ninjas Horoscope API',
        'LocalStorage',
        'Vite'
      ],

      features: [
        'Daily horoscope readings',
        'Birthdate-based zodiac detection',
        'Zodiac sign explorer',
        'Compatibility insights',
        'Lucky number generation',
        'Lucky color suggestions',
        'Mood predictions',
        'LocalStorage-based zodiac preferences',
        'Responsive mobile-first design',
        'Dark cosmic UI',
        'Copy and share horoscope functionality',
        'Animated celestial backgrounds'
      ],

      challenges: [
        'Designing an immersive astrology experience while maintaining performance and readability',
        'Creating a responsive dashboard that feels premium across mobile, tablet, and desktop devices',
        'Building engaging horoscope visualizations without overwhelming the user interface',
        'Maintaining a balance between aesthetics and accessibility'
      ],

      learnings: [
        'Premium UI design significantly improves user engagement and retention',
        'Animation should enhance user experience rather than distract from content',
        'Mobile-first development simplifies responsive design implementation',
        'LocalStorage can provide lightweight personalization without authentication systems'
      ],

      screenshots: [
        {
          src: 'assets/images/projects/astra-cover.png',
          alt: 'Astra homepage dashboard'
        },

        {
          src: 'assets/images/projects/astra-hero.png',
          alt: 'Astra Hero interface'
        },
        {
          src: 'assets/images/projects/astra-zodiac.png',
          alt: 'Astra Horoscope card interface'
        }
      ],

      github: 'https://github.com/M3XH4/astra',
      liveDemo: 'https://astra-omega-ebon.vercel.app',

      architecture: {
        description: 'A React-based frontend communicates directly with the Horoscope API while LocalStorage manages user preferences and selected zodiac signs.',
        diagram: '[React Frontend] -> [Horoscope API] | [LocalStorage for User Preferences]'
      },

      timeline: '2022',

      role: 'Frontend Developer, UI/UX Designer, and System Architect',

      platform: 'Responsive Web Application',

      database: 'None (LocalStorage Only)',

      api: 'API Ninjas Horoscope API',

      tags: [
        'Astrology',
        'Horoscope',
        'React',
        'Tailwind CSS',
        'Frontend',
        'UI/UX',
        'Web Application'
      ],

      thumbnail: 'assets/images/projects/astra-cover.png',

      heroImage: 'assets/images/projects/astra-cover.png'
    },
    // GRUBHUB: A Restaurant and Cuisine Recommendation System
    {
      id: 'grubhub-system',
      title: 'GrubHub: A Restaurant and Cuisine Recommendation System',
      description: 'A location-based restaurant recommendation system that suggests dining options based on user location, budget, distance, cuisine, ratings, and availability.',
      image: 'assets/images/projects/grubhub-cover.png',
      imageAlt: 'GrubHub restaurant recommendation system preview',
      category: 'Full Stack',
      filters: ['frontend', 'backend', 'fullstack'],
      status: ['Completed'],
      tech: ['Laravel', 'React', 'MySQL', 'REST API', 'Google Places API'],
      githubUrl: 'https://github.com/M3XH4/grubhub',
      detailsUrl: 'project-details.html?id=grubhub-system',
      detailsLabel: 'View Details',
      slug: 'grubhub-system',
      shortDescription: 'A smart restaurant recommendation system that helps users find places to eat based on location, budget, distance, and cuisine preferences.',
      fullDescription: 'GrubHub is a Laravel and React-based web application designed to simplify restaurant discovery. The system asks users for their current location, preferred budget, travel distance, and cuisine type, then recommends suitable restaurants using map and place-based API data combined with a custom ranking algorithm.',
      problem: 'Users often spend too much time deciding where to eat because restaurant choices are scattered across different platforms, budgets are unclear, and nearby options may not match their preferences.',
      solution: 'GrubHub provides a centralized recommendation experience by collecting user preferences, retrieving nearby restaurant data, and ranking results based on distance, budget, rating, cuisine match, and open status.',
      technologies: ['Laravel', 'React', 'MySQL', 'REST API', 'Google Places API', 'Google Maps API', 'Tailwind CSS'],
      features: [
        'Location-based restaurant recommendations',
        'Budget and distance filtering',
        'Cuisine preference selection',
        'Best Match ranking algorithm',
        'Restaurant cards with ratings and open status',
        'Interactive map view',
        'Favorites and search history',
        'Responsive green-themed interface'
      ],
      challenges: [
        'Designing a recommendation score that balances distance, budget, rating, cuisine, and availability',
        'Handling cases where users deny location access or no nearby restaurants match the filters',
        'Keeping external API usage efficient through caching and clean backend request handling'
      ],
      learnings: [
        'Recommendation systems work better when user intent is clearly collected before showing results',
        'Location-based apps need strong fallback states for permission errors and empty results',
        'A clean API layer helps protect keys, manage third-party data, and keep the frontend simple'
      ],
      screenshots: [
        {
          src: 'assets/images/projects/grubhub-cover.png',
          alt: 'GrubHub hero section preview'
        }
      ],
      github: 'https://github.com/M3XH4/grubhub',
      liveDemo: '#',
      architecture: {
        description: 'The React frontend collects user preferences and sends them to a Laravel REST API. The backend connects to Google Places and Maps APIs, processes restaurant data, applies ranking logic, stores useful records in MySQL, and returns sorted recommendations.',
        diagram: '[React UI] -> [Laravel REST API] -> [Google Places/Maps API] -> [Recommendation Service] -> [MySQL]'
      },
      timeline: '2024',
      role: 'Full-stack developer responsible for UI design, Laravel API development, database structure, and recommendation logic.',
      platform: 'Web application',
      database: 'MySQL',
      api: 'REST API, Google Places API, Google Maps API',
      tags: ['Restaurant', 'Food Recommendation', 'Laravel', 'React', 'Location-Based'],
      thumbnail: 'assets/images/projects/grubhub-cover.png',
      heroImage: 'assets/images/projects/grubhub-cover.png'
    },
    // ORBIT: A Real-Time Chat Application
    {
      id: 'orbit-application',
      title: 'Orbit: A Real-Time Chat Application',
      description: 'A real-time communication platform for teams, communities, and friends with instant messaging, channels, file sharing, and online presence.',
      image: 'assets/images/projects/orbit-dashboard.png',
      imageAlt: 'Orbit real-time chat dashboard preview',
      category: 'Full Stack',
      filters: ['frontend', 'backend', 'fullstack', 'realtime'],
      status: ['In Progress'],
      tech: ['React', 'Node.js', 'Socket.IO', 'Redis', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/M3XH4/orbit',
      detailsUrl: 'project-details.html?id=orbit-application',
      detailsLabel: 'View Details',
      slug: 'orbit-application',
      shortDescription: 'A real-time chat system with channels, direct messages, file sharing, and live user presence.',
      fullDescription: 'Orbit is a full-stack real-time chat application inspired by Discord and Slack. It allows users to communicate through organized channels, direct messages, shared files, and live presence indicators. The system is designed with a modern React interface, WebSocket-powered messaging, scalable backend services, and Redis support for real-time event handling.',
      problem: 'Teams and communities need a fast, organized, and reliable way to communicate in real time without losing context across conversations, files, and members.',
      solution: 'Orbit provides a centralized communication space with real-time messaging, group channels, direct messages, file sharing, online status, and scalable WebSocket communication using Socket.IO and Redis.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Socket.IO', 'Redis', 'PostgreSQL', 'Docker'],
      features: [
        'Real-time messaging',
        'Group channels',
        'Direct messages',
        'Online status',
        'Typing indicators',
        'File sharing',
        'Message reactions',
        'User roles and permissions'
      ],
      challenges: [
        'Managing real-time socket connections reliably across multiple users and channels',
        'Keeping message delivery fast while maintaining database consistency',
        'Designing a clean chat interface that supports channels, members, files, and notifications',
        'Preparing the system for scalable WebSocket communication using Redis'
      ],
      learnings: [
        'Real-time systems require careful event design between the client and server',
        'Socket.IO simplifies live communication but still needs proper authentication and room management',
        'Redis is useful for presence tracking, caching, and scaling socket events',
        'A chat platform works best when the UI keeps conversations, channels, and members easy to access'
      ],
      screenshots: [
        { src: 'assets/images/projects/orbit-cover.png', alt: 'Orbit landing page hero section' },
        { src: 'assets/images/projects/orbit-chat-dashboard.png', alt: 'Orbit chat dashboard interface' }
      ],
      github: 'https://github.com/M3XH4/orbit',
      liveDemo: '#',
      architecture: {
        description: 'The React frontend communicates with a Node.js backend through REST APIs for standard requests and Socket.IO for real-time messaging. PostgreSQL stores users, channels, and messages, while Redis handles online presence, caching, and socket event scaling.',
        diagram: '[React Client] -> [REST API + Socket.IO Server] -> [PostgreSQL]\n                         -> [Redis Pub/Sub + Presence]'
      },
      timeline: '2026 - Present',
      role: 'Full-stack developer responsible for the React interface, real-time messaging flow, backend API structure, and system architecture.',
      platform: 'Web application',
      database: 'PostgreSQL',
      api: 'REST API + WebSocket',
      tags: ['Chat Application', 'Real-Time', 'WebSockets', 'Collaboration', 'Full Stack'],
      thumbnail: 'assets/images/projects/orbit-cover.png',
      heroImage: 'assets/images/projects/orbit-cover.png'
    },
    // TRADECORE: A B2B E-commerce Platform for Wholesale Operations
    {
      id: 'tradecore-system',
      title: 'TradeCore: A B2B E-Commerce Platform for Wholesale Operations',
      description: 'A scalable wholesale commerce platform designed for suppliers, distributors, and enterprise buyers to manage products, inventory, orders, and payments in one centralized system.',
      image: 'assets/images/projects/tradecore-preview.png',
      imageAlt: 'TradeCore wholesale e-commerce platform dashboard',
      category: 'Software as A Service',
      filters: ['fullstack', 'web', 'enterprise'],
      status: ['Completed'],
      tech: [
        'React',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Stripe',
        'PayPal',
        'REST API',
        'Tailwind CSS'
      ],
      githubUrl: 'https://github.com/M3XH4/tradecore',
      detailsUrl: 'project-details.html?id=tradecore-system',
      detailsLabel: 'View Details',
      slug: 'tradecore-system',

      shortDescription:
        'A complete B2B commerce platform for managing wholesale products, inventory, bulk orders, payments, and business analytics.',

      fullDescription:
        'TradeCore is a modern B2B e-commerce platform built to streamline wholesale operations. The system enables suppliers, distributors, and enterprise buyers to manage product catalogs, track inventory in real time, process bulk orders, handle secure payments through Stripe and PayPal, and gain valuable business insights through analytics dashboards.',

      problem:
        'Wholesale businesses often rely on disconnected systems for inventory management, order processing, and payment handling, resulting in inefficiencies, stock discrepancies, and limited operational visibility.',

      solution:
        'TradeCore centralizes wholesale commerce operations into a single scalable platform featuring product management, inventory tracking, order processing, payment integration, customer management, and business analytics.',

      technologies: [
        'React',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Stripe API',
        'PayPal API',
        'JWT Authentication',
        'REST API'
      ],

      features: [
        'Product Catalog Management',
        'Real-Time Inventory Tracking',
        'Bulk Order Processing',
        'Shopping Cart & Checkout',
        'Stripe Payment Integration',
        'PayPal Payment Integration',
        'Admin Analytics Dashboard',
        'Customer Management',
        'Reviews & Ratings System',
        'Role-Based Access Control',
        'Order Tracking',
        'Sales & Inventory Reports'
      ],

      challenges: [
        'Designing a scalable architecture capable of supporting thousands of products and concurrent users',
        'Maintaining inventory consistency during simultaneous order transactions',
        'Integrating multiple payment gateways while ensuring transaction security',
        'Building efficient reporting and analytics modules for operational decision-making'
      ],

      learnings: [
        'Enterprise commerce systems require strong database design and transaction management',
        'Payment integrations demand careful handling of security and compliance requirements',
        'Scalable architecture begins with modular system design and API separation',
        'Real-time inventory tracking is critical for wholesale operations'
      ],

      screenshots: [
        {
          src: 'assets/images/projects/tradecore-cover.png',
          alt: 'TradeCore hero section overview'
        },
      ],

      github: 'https://github.com/M3XH4/tradecore',
      liveDemo: '#',

      architecture: {
        description:
          'The frontend communicates with a RESTful API layer that manages authentication, inventory, orders, and payments. Data is stored in PostgreSQL while Stripe and PayPal handle secure payment processing.',
        diagram:
          '[React Frontend] → [Node.js / Express API] → [PostgreSQL Database] → [Stripe & PayPal APIs]'
      },

      timeline: '2025 - 2026',

      role:
        'Full-Stack Developer responsible for system architecture, backend development, database design, API development, frontend implementation, and payment gateway integration.',

      platform: 'Web Application',

      database: 'PostgreSQL',

      api: 'REST API',

      tags: [
        'B2B',
        'E-Commerce',
        'Wholesale',
        'Inventory Management',
        'Payments',
        'Enterprise',
        'Full Stack'
      ],

      thumbnail: 'assets/images/projects/tradecore-cover.png',

      heroImage: 'assets/images/projects/tradecore-cover.png'
    },
    // MEDCORE: A Smart Hospital Management System
    {
      id: 'medcore-system',
      title: 'MedCore: A Smart Hospital Management System',
      description: 'An AI-powered hospital management platform that streamlines patient care, clinical workflows, appointment scheduling, billing, and emergency response operations.',
      image: 'assets/images/projects/medcore-cover.png',
      imageAlt: 'MedCore hospital management system dashboard preview',
      category: 'Software as A Service',
      filters: ['fullstack', 'healthcare', 'ai'],
      status: ['In Progress'],
      tech: [
        'Next.js',
        'Laravel',
        'PostgreSQL',
        'TailwindCSS',
        'FastAPI',
        'Python',
        'Redis'
      ],
      githubUrl: 'https://github.com/M3XH4/medcore',
      detailsUrl: 'project-details.html?id=medcore-system',
      detailsLabel: 'View Details',
      slug: 'medcore-system',

      shortDescription:
        'A smart healthcare platform that centralizes patient records, appointments, billing, prescriptions, and AI-assisted clinical workflows.',

      fullDescription:
        'MedCore is a modern hospital management system designed to digitize healthcare operations through centralized patient records, appointment scheduling, emergency management, billing, e-prescriptions, and AI-powered healthcare assistance. The platform aims to improve patient outcomes, optimize hospital workflows, and support medical professionals with intelligent decision-making tools.',

      problem:
        'Many healthcare facilities still rely on fragmented systems, manual processes, and paper-based records, leading to inefficiencies, delayed care, data duplication, and limited operational visibility.',

      solution:
        'MedCore provides an integrated healthcare ecosystem that combines hospital administration, patient management, emergency response, billing, and AI-powered clinical support into a single secure platform.',

      technologies: [
        'Next.js',
        'Laravel',
        'PostgreSQL',
        'FastAPI',
        'Python',
        'Redis',
        'TailwindCSS',
        'Docker'
      ],

      features: [
        'Electronic Medical Records (EMR)',
        'Appointment Scheduling System',
        'Doctor Dashboard',
        'Prescription Management',
        'Billing & Payment Processing',
        'Emergency Queue Management',
        'AI Triage Assistant',
        'Disease Prediction Module',
        'SMS & Email Notifications',
        'Role-Based Access Control'
      ],

      challenges: [
        'Designing a scalable healthcare database while maintaining data integrity and security',
        'Implementing role-based access control for multiple healthcare stakeholders',
        'Integrating AI-powered triage and disease prediction modules into clinical workflows',
        'Managing real-time emergency queue prioritization and notifications'
      ],

      learnings: [
        'Healthcare systems require strict security, privacy, and auditability standards',
        'Well-designed workflows significantly improve hospital efficiency and patient experience',
        'AI should assist healthcare professionals rather than replace clinical judgment',
        'Modular architecture improves maintainability and future scalability'
      ],

      screenshots: [
        {
          src: 'assets/images/projects/medcore-cover.png',
          alt: 'MedCore dashboard overview'
        },
      ],

      github: 'https://github.com/M3XH4/medcore',
      liveDemo: '#',

      architecture: {
        description:
          'The Next.js frontend communicates with a Laravel REST API backed by PostgreSQL, Redis, and AI microservices built with FastAPI.',
        diagram: `
            [Next.js Frontend]
                      |
                      ▼
                [Laravel API]
                      |
            ┌────────┼────────┐
            ▼        ▼        ▼
            [PostgreSQL] [Redis] [FastAPI AI]
            `
      },

      timeline: '2026 - Present',

      role:
        'Full-Stack Software Engineer responsible for system architecture, frontend development, backend API development, database design, and AI integration.',

      platform: 'Web Application',

      database: 'PostgreSQL',

      api: 'REST API',

      tags: [
        'Healthcare',
        'Hospital Management',
        'AI',
        'Laravel',
        'Next.js',
        'FastAPI',
        'Full Stack'
      ],

      thumbnail: 'assets/images/projects/medcore-cover.png',

      heroImage: 'assets/images/projects/medcore-cover.png'
    },
    // RESTOCORE: A Full-Stack Restaurant Management and Point-of-Sale System
    {
      id: 'restocore-system',
      title: 'RestoCore: A Full-Stack Restaurant Management and Point-of-Sale System',
      description: 'A modern restaurant operations platform for managing orders, tables, kitchen workflows, reservations, inventory, staff, payments, and sales analytics.',
      image: 'assets/images/projects/restocore-cover.png',
      imageAlt: 'RestoCore restaurant management system preview',
      category: 'Software as a Service',
      filters: ['frontend', 'backend', 'fullstack'],
      status: ['Completed'],
      tech: ['React', 'Laravel', 'PostgreSQL', 'REST API'],
      githubUrl: 'https://github.com/M3XH4/restocore',
      detailsUrl: 'project-details.html?id=restocore-system',
      detailsLabel: 'View Details',
      slug: 'restocore-system',

      shortDescription: 'A full-stack restaurant management and POS system for streamlining orders, kitchen operations, reservations, inventory, and reporting.',

      fullDescription: 'RestoCore is a full-stack web-based restaurant management and point-of-sale system designed to help restaurants manage their daily operations through one centralized platform. It supports order processing, table management, kitchen display workflows, menu administration, reservation scheduling, inventory monitoring, staff management, billing, and business analytics.',

      problem: 'Many restaurants still rely on manual order taking, disconnected inventory records, paper-based reservations, and separate billing workflows. This creates delays, order mistakes, poor stock visibility, and limited access to real-time business insights.',

      solution: 'RestoCore provides an integrated web platform powered by React, Laravel, and PostgreSQL. The system connects front-of-house, kitchen, cashier, inventory, and management workflows through a clean user interface, RESTful API endpoints, relational data modeling, and role-based access control.',

      technologies: ['React', 'Laravel', 'PostgreSQL', 'REST API', 'Tailwind CSS', 'Laravel Sanctum'],

      features: [
        'Point-of-sale order processing',
        'Menu and category management',
        'Real-time order tracking',
        'Kitchen display system',
        'Table management',
        'Reservation scheduling',
        'Inventory monitoring',
        'Low-stock alerts',
        'Staff and role management',
        'Billing and payment tracking',
        'Sales reports and analytics',
        'Audit logs'
      ],

      challenges: [
        'Designing a clean workflow that connects waiters, cashiers, kitchen staff, and managers without making the interface complicated',
        'Structuring relational database tables for orders, order items, menu items, tables, payments, reservations, and inventory records',
        'Keeping order status updates clear and traceable across the restaurant workflow',
        'Planning inventory deduction logic based on menu item usage and stock movement',
        'Creating reports that provide useful business decisions instead of only displaying raw data'
      ],

      learnings: [
        'Restaurant systems need to follow the real operational flow from menu selection to order preparation, billing, and reporting',
        'Role-based access control is important for protecting sensitive actions such as discounts, voided orders, reports, and user management',
        'A well-designed PostgreSQL schema helps keep orders, payments, reservations, and inventory records consistent',
        'Dashboard analytics become more useful when they focus on daily sales, active tables, best-selling items, pending orders, and low-stock items',
        'Building the system in phases makes the project easier to test, maintain, and scale'
      ],

      screenshots: [
        {
          src: 'assets/images/projects/restocore-cover.png',
          alt: 'RestoCore hero section preview'
        },
      ],

      github: 'https://github.com/M3XH4/restocore',
      liveDemo: '#',

      architecture: {
        description: 'The React frontend communicates with a Laravel REST API, while PostgreSQL stores restaurant data such as users, menu items, orders, tables, reservations, payments, inventory records, and reports.',
        diagram: '[React Frontend] -> [Laravel REST API] -> [PostgreSQL Database]'
      },

      timeline: '2025',
      role: 'Full-stack developer responsible for system planning, UI design, database modeling, API development, and feature implementation.',
      platform: 'Web application',
      database: 'PostgreSQL',
      api: 'REST API',

      tags: [
        'Restaurant Management',
        'Point of Sale',
        'Kitchen Display',
        'Inventory',
        'Reservations',
        'Analytics',
        'Full Stack'
      ],

      thumbnail: 'assets/images/projects/restocore-cover.png',
      heroImage: 'assets/images/projects/restocore-cover.png'
    }
  ],

  certificates: [
    {
      title: 'Copilot CDO: AI-Powered Coding For Everyone',
      issuer: 'DevCon CDO',
      year: '2025',
      image: 'assets/images/certificates/copilot-cdo-ai.png',
      category: 'AI Coding',
    },
    {
      title: 'SAP X Accenture: Student Career Talk',
      issuer: 'SAP University Alliances Accenture',
      year: '2025',
      image: 'assets/images/certificates/sap-x-accenture.jpg',
      category: 'Career',
    },
    {
      title: 'Agri Tech Innovate: Ideation Workshop in Northern Mindanao',
      issuer: 'Department of Agriculture - Agricultural Training Institute',
      year: '2025',
      image: 'assets/images/certificates/agri-tech-innovate.jpg',
      category: 'Hackathon',
    },
    {
      title: 'Git Mastery: Basic to Beyond',
      issuer: 'DevCon CDO',
      year: '2024',
      image: 'assets/images/certificates/git-mastery.png',
      category: 'Developer Tools',
    },
    {
      title: 'Java Fundamentals',
      issuer: 'Oracle Academy',
      year: '2024',
      image: 'assets/images/certificates/java-fundamentals.jpg',
      category: 'Programming',
    },
    
    {
      title: 'Bridging Gaps - Java Tutorials',
      issuer: 'Google Developer Student Clubs',
      year: '2022',
      image: 'assets/images/certificates/bridging-gaps.jpg',
      category: 'Programming',
    },
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

window.portfolioData.projectActionTypes = {
  github: { label: 'GitHub Code', style: 'btn-outline', external: true },
  liveDemo: { label: 'Live Demo', style: 'btn-primary', external: true },
  documentation: { label: 'Documentation', style: 'btn-secondary', external: true },
  apk: { label: 'APK Download', style: 'btn-secondary', external: true },
  app: { label: 'App Download', style: 'btn-secondary', external: true },
  details: { label: 'View Details', style: 'btn-secondary', external: false },
  caseStudy: { label: 'Case Study', style: 'btn-secondary', external: false },
  playStore: { label: 'Play Store', style: 'btn-secondary', external: true },
  website: { label: 'Website', style: 'btn-primary', external: true },
  apiDocs: { label: 'API Docs', style: 'btn-secondary', external: true },
  figma: { label: 'Figma Design', style: 'btn-secondary', external: true },
  presentation: { label: 'Presentation', style: 'btn-secondary', external: true },
  whitepaper: { label: 'Whitepaper', style: 'btn-secondary', external: true }
};

window.portfolioData.projectStatusTypes = {
  completed: 'Completed',
  inProgress: 'In Progress',
  experimental: 'Experimental',
  caseStudy: 'Case Study',
  upcoming: 'Upcoming',
  backlogged: 'Backlogged',
  deployed: 'Deployed'
};

(function normalizePortfolioData(data) {
  if (!data || !Array.isArray(data.projects)) return;

  const actionTypes = data.projectActionTypes || {};

  const isUsableUrl = (url) => Boolean(url && url !== '#');
  const getProjectDetailsUrl = (project) => {
    const slug = project.slug || project.id;
    return project.detailsUrl || `project-details.html?id=${encodeURIComponent(slug)}`;
  };

  const normalizeAction = (action, project) => {
    if (!action || !action.url || action.url === '#') return null;
    const type = action.type || 'website';
    const defaults = actionTypes[type] || {};
    return {
      type,
      label: action.label || defaults.label || 'Open Link',
      url: action.url,
      style: action.style || defaults.style || 'btn-secondary',
      external: action.external ?? defaults.external ?? !action.url.startsWith('project-details.html'),
      ariaLabel: action.ariaLabel || `${action.label || defaults.label || 'Open link'} for ${project.title}`
    };
  };

  const uniqueActions = (actions) => {
    const seen = new Set();
    return actions.filter((action) => {
      if (!action) return false;
      const key = `${action.type}:${action.url}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };

  data.projects = data.projects.map((project) => {
    const slug = project.slug || project.id;
    const detailsUrl = getProjectDetailsUrl(project);
    const media = {
      thumbnail: {
        src: project.media?.thumbnail?.src || project.thumbnail || project.image,
        alt: project.media?.thumbnail?.alt || project.imageAlt || `${project.title} project preview`
      },
      hero: {
        src: project.media?.hero?.src || project.heroImage || project.thumbnail || project.image,
        alt: project.media?.hero?.alt || project.imageAlt || `${project.title} project hero preview`
      },
      screenshots: (project.media?.screenshots || project.screenshots || [])
        .map((screenshot) => (typeof screenshot === 'string'
          ? { src: screenshot, alt: `${project.title} screenshot` }
          : { src: screenshot.src, alt: screenshot.alt || `${project.title} screenshot` }))
        .filter((screenshot) => Boolean(screenshot.src))
    };

    const legacyActions = [
      normalizeAction({ type: 'github', url: project.github || project.githubUrl }, project),
      normalizeAction({ type: 'liveDemo', url: project.liveDemo || project.liveDemoUrl }, project),
      normalizeAction({ type: 'documentation', url: project.documentationUrl }, project),
      normalizeAction({ type: 'app', url: project.appUrl }, project),
      normalizeAction({ type: 'apk', url: project.apkUrl }, project),
      normalizeAction({ type: 'playStore', url: project.playStoreUrl }, project),
      normalizeAction({ type: 'website', url: project.websiteUrl }, project),
      normalizeAction({ type: 'apiDocs', url: project.apiDocsUrl }, project),
      normalizeAction({ type: 'figma', url: project.figmaUrl }, project),
      normalizeAction({ type: 'presentation', url: project.presentationUrl }, project),
      normalizeAction({ type: 'whitepaper', url: project.whitepaperUrl }, project)
    ];

    const explicitActions = (project.actions || [])
      .map((action) => normalizeAction(action, project));

    const detailsType = String(project.detailsLabel || '').toLowerCase().includes('case') ? 'caseStudy' : 'details';
    const detailAction = normalizeAction({
      type: detailsType,
      label: project.detailsLabel || actionTypes[detailsType]?.label || 'View Details',
      url: detailsUrl,
      external: false
    }, project);

    const normalizedProject = {
      ...project,
      slug,
      detailsUrl,
      media,
      technologies: project.technologies || project.tech || [],
      actions: uniqueActions([...explicitActions, ...legacyActions, detailAction])
    };

    [
      'github',
      'githubUrl',
      'liveDemo',
      'liveDemoUrl',
      'documentationUrl',
      'appUrl',
      'apkUrl',
      'playStoreUrl',
      'websiteUrl',
      'apiDocsUrl',
      'figmaUrl',
      'presentationUrl',
      'whitepaperUrl',
      'image',
      'imageAlt',
      'thumbnail',
      'heroImage',
      'screenshots',
      'tech'
    ].forEach((field) => {
      delete normalizedProject[field];
    });

    return normalizedProject;
  });

  window.portfolioUtils = {
    getProjectDetailsUrl,
    getProjectMedia: (project) => project.media || {},
    getProjectActions: (project, context = 'card') => {
      const actions = Array.isArray(project.actions) ? project.actions : [];
      if (context === 'details') {
        return actions.filter((action) => action.type !== 'details' && action.type !== 'caseStudy');
      }

      const githubAction = actions.find((action) => action.type === 'github');
      const detailAction = actions.find((action) => action.type === 'details' || action.type === 'caseStudy');

      return [
        githubAction ? { ...githubAction, label: 'GitHub', style: 'btn-outline' } : null,
        detailAction ? { ...detailAction, label: 'View Details', style: 'btn-secondary' } : null
      ].filter(Boolean);
    },
    isUsableUrl
  };
})(window.portfolioData);
