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
      bentoSize: 'large'
    },
    {
      id: 'invyte-system',
      title: 'Invyte: AN RSVP & Event Management System',
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
      archiveDetailsLabel: 'Live Demo',
      featured: true,
      bentoSize: 'medium'
    },
    {
      id: 'cinplex-system',
      title: 'Cineplex: Cinema Management System',
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
      bentoSize: 'medium'
    },
    {
      id: 'chat-portal',
      title: 'Realtime Chat Portal',
      description: 'A socket-based messaging interface with rooms, file handling, and responsive conversation views.',
      image: 'assets/images/projects/project-web.svg',
      imageAlt: 'Realtime chat portal project preview',
      category: 'Full Stack',
      filters: ['web', 'fullstack'],
      status: ['Case Study'],
      tech: ['JavaScript', 'WebSockets', 'Node.js'],
      githubUrl: 'https://github.com',
      detailsUrl: 'project-details.html?id=chat-portal',
      detailsLabel: 'Case Study',
      archiveDetailsLabel: 'View Details',
      featured: true,
      bentoSize: 'wide'
    },
    {
      id: 'compiler',
      title: 'Toy Compiler in C',
      description: 'A parser and AST compiler experiment for learning lower-level tooling.',
      archiveDescription: 'A custom parser and AST compiler experiment built to understand language tooling.',
      image: 'assets/images/projects/project-experimental.svg',
      imageAlt: 'Toy compiler experiment project preview',
      category: 'System',
      filters: ['experimental'],
      status: ['Experimental'],
      tech: ['C', 'Assembly', 'Linux'],
      githubUrl: 'https://github.com',
      detailsUrl: 'project-details.html?id=compiler',
      detailsLabel: 'View Details',
      featured: false,
      bentoSize: 'small'
    },
    {
      id: 'design-system',
      title: 'Design System Kit',
      description: 'Reusable interface patterns, tokens, and responsive page components.',
      archiveDescription: 'Reusable interface patterns, tokens, and responsive page components for faster product builds.',
      image: 'assets/images/projects/project-web.svg',
      imageAlt: 'Design system kit project preview',
      category: 'UI/UX',
      filters: ['web'],
      status: ['Completed'],
      tech: ['Figma', 'CSS', 'Design Tokens'],
      githubUrl: 'https://github.com',
      detailsUrl: 'project-details.html?id=design-system',
      detailsLabel: 'View Details',
      archiveDetailsLabel: 'Live Demo',
      featured: false,
      bentoSize: 'small'
    },
    {
      id: 'task-planner',
      title: 'Task Planner App',
      description: 'Android task planner with scheduling, custom calendar views, and local database caching.',
      image: 'assets/images/projects/project-mobile.svg',
      imageAlt: 'Task planner app preview',
      category: 'Android/Mobile',
      filters: ['mobile'],
      status: ['In Progress'],
      tech: ['Kotlin', 'SQLite', 'Compose'],
      githubUrl: 'https://github.com',
      detailsUrl: 'project-details.html?id=task-planner',
      detailsLabel: 'View Details'
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
      detailsLabel: 'View Details'
    }
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
