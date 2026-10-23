/**
 * DevSpace - Interactive Learning Hub
 * Sample Application Data (Mock Backend & State Store)
 */

export const platformStats = {
  totalLearners: '14,200+',
  interactiveCourses: '85+',
  projectsCompleted: '38,400+',
  satisfactionRate: '98.4%',
  averageCompletionTime: '6.2 weeks'
};

export const platformFeatures = [
  {
    id: 'feat-1',
    title: 'Zero-Reload Client SPA',
    description: 'Ultra-fast navigation powered by native HTML5 History API with seamless instant route transitions.',
    icon: '⚡'
  },
  {
    id: 'feat-2',
    title: 'Hands-On Interactive Labs',
    description: 'Learn by building real-world projects with immediate browser feedback and automated code evaluation.',
    icon: '🛠️'
  },
  {
    id: 'feat-3',
    title: 'Industry-Standard Curricula',
    description: 'Designed in collaboration with engineering leaders covering modern web, cloud, and distributed systems.',
    icon: '🎓'
  },
  {
    id: 'feat-4',
    title: 'Peer Reviews & Portfolio',
    description: 'Showcase your completed student projects, gain feedback, and establish a verifiable engineering portfolio.',
    icon: '🚀'
  }
];

export const coursesData = [
  {
    id: 'course-1',
    title: 'Modern Single Page Application Architecture',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Master client-side routing, History API state machines, decoupled component rendering, and zero-reload DOM hydration.',
    duration: '6 Weeks',
    lessons: 28,
    rating: 4.95,
    reviewsCount: 420,
    thumbnail: 'assets/course-frontend.svg',
    badge: 'Featured',
    skills: ['Vanilla JS', 'History API', 'SPA Architecture', 'CSS Tokens'],
    instructor: 'Elena Rostova, Principal Web Architect'
  },
  {
    id: 'course-2',
    title: 'Design Systems & Accessible UI Engineering',
    category: 'UI/UX',
    level: 'Beginner',
    description: 'Build enterprise-grade design systems adhering to WCAG 2.2 AA standards, fluid clamp() typography, and high-contrast tokens.',
    duration: '4 Weeks',
    lessons: 20,
    rating: 4.88,
    reviewsCount: 310,
    thumbnail: 'assets/course-uiux.svg',
    badge: 'Popular',
    skills: ['Design Tokens', 'WCAG 2.2', 'Figma to Code', 'CSS Grid'],
    instructor: 'Marcus Vance, Design Systems Lead'
  },
  {
    id: 'course-3',
    title: 'High-Throughput Node.js & Microservices',
    category: 'Backend',
    level: 'Advanced',
    description: 'Architect resilient event-driven backends, asynchronous queues, RESTful APIs, and database connection pooling.',
    duration: '8 Weeks',
    lessons: 36,
    rating: 4.92,
    reviewsCount: 512,
    thumbnail: 'assets/course-backend.svg',
    badge: 'Hot',
    skills: ['Node.js', 'Async I/O', 'REST APIs', 'PostgreSQL'],
    instructor: 'Devon Reed, Infrastructure Engineer'
  },
  {
    id: 'course-4',
    title: 'Cloud-Native DevOps & CI/CD Pipelines',
    category: 'Cloud',
    level: 'Intermediate',
    description: 'Containerize multi-tier web applications with Docker, orchestrate deployments, and construct automated GitHub Actions pipelines.',
    duration: '5 Weeks',
    lessons: 24,
    rating: 4.85,
    reviewsCount: 275,
    thumbnail: 'assets/course-cloud.svg',
    badge: 'In Demand',
    skills: ['Docker', 'GitHub Actions', 'Cloud Architecture', 'Linux'],
    instructor: 'Priya Sharma, DevOps Specialist'
  },
  {
    id: 'course-5',
    title: 'Modern Reactive JavaScript Deep Dive',
    category: 'Frontend',
    level: 'Beginner',
    description: 'Unravel ECMAScript internals: closures, prototypal inheritance, Event Loop, Promises, and custom DOM event emitters.',
    duration: '5 Weeks',
    lessons: 26,
    rating: 4.90,
    reviewsCount: 390,
    thumbnail: 'assets/course-frontend.svg',
    badge: 'Foundation',
    skills: ['ES6+', 'Event Loop', 'Async/Await', 'DOM API'],
    instructor: 'Alex Chen, Senior Frontend Engineer'
  },
  {
    id: 'course-6',
    title: 'Applied Data Science & Predictive Analytics',
    category: 'Data',
    level: 'Intermediate',
    description: 'Transform raw datasets into actionable intelligence using statistical modeling, NumPy/Pandas pipelines, and visualization.',
    duration: '7 Weeks',
    lessons: 32,
    rating: 4.89,
    reviewsCount: 295,
    thumbnail: 'assets/course-data.svg',
    badge: 'Popular',
    skills: ['Python', 'Pandas', 'Statistics', 'Data Viz'],
    instructor: 'Dr. Sarah Lin, Research Scientist'
  },
  {
    id: 'course-7',
    title: 'Distributed Caching & Database Performance',
    category: 'Backend',
    level: 'Advanced',
    description: 'Optimize high-concurrency database queries, index strategies, Redis multi-tier caching, and schema migration integrity.',
    duration: '6 Weeks',
    lessons: 24,
    rating: 4.94,
    reviewsCount: 188,
    thumbnail: 'assets/course-backend.svg',
    badge: 'Specialized',
    skills: ['Redis', 'SQL Tuning', 'Indexing', 'Concurrency'],
    instructor: 'Kavita Patel, Database Architect'
  },
  {
    id: 'course-8',
    title: 'Serverless Functions & Edge Computing',
    category: 'Cloud',
    level: 'Advanced',
    description: 'Deploy ultra-low-latency edge workloads, serverless worker pipelines, and event triggers distributed globally.',
    duration: '4 Weeks',
    lessons: 18,
    rating: 4.82,
    reviewsCount: 140,
    thumbnail: 'assets/course-cloud.svg',
    badge: 'New',
    skills: ['Edge Computing', 'Serverless', 'CDN Routing', 'Auth'],
    instructor: 'Tariq Mansoor, Cloud Solutions Architect'
  }
];

export const studentProjectsData = [
  {
    id: 'proj-1',
    title: 'OmniDash — Developer Telemetry & Analytics Dashboard',
    author: 'Aarav Mehta',
    category: 'Frontend',
    description: 'A responsive single-page monitoring interface rendering real-time performance metrics, server health logs, and interactive SVG charts.',
    tags: ['Vanilla JS', 'SPA Router', 'SVG Charts', 'CSS Grid'],
    status: 'Featured',
    stars: 148,
    views: '1.8k',
    demoUrl: '#/projects'
  },
  {
    id: 'proj-2',
    title: 'Kroma Studio — Token-Based Accessible Design System',
    author: 'Zoe Henderson',
    category: 'UI/UX',
    description: 'A component library with 45+ accessible tokens, dynamic contrast calculation, keyboard traps prevention, and automated theme export.',
    tags: ['Design Tokens', 'WCAG 2.2 AA', 'Accessibility', 'Figma'],
    status: 'Completed',
    stars: 96,
    views: '1.2k',
    demoUrl: '#/projects'
  },
  {
    id: 'proj-3',
    title: 'AetherAPI — High-Velocity Asynchronous Task Queue',
    author: 'Vikram Joshi',
    category: 'Backend',
    description: 'Distributed job dispatcher built on Node.js streams and Redis queues capable of orchestrating 10,000 tasks per second with fault tolerance.',
    tags: ['Node.js', 'Redis', 'Microservices', 'REST'],
    status: 'Featured',
    stars: 215,
    views: '3.4k',
    demoUrl: '#/projects'
  },
  {
    id: 'proj-4',
    title: 'CloudGuard — Continuous Infrastructure Security Auditor',
    author: 'Maya Lin',
    category: 'Cloud',
    description: 'Automated policy-as-code CLI and dashboard that inspects cloud resource configurations against CIS benchmarks and alerts engineers.',
    tags: ['Docker', 'DevOps', 'Security', 'GitHub Actions'],
    status: 'Completed',
    stars: 124,
    views: '1.5k',
    demoUrl: '#/projects'
  },
  {
    id: 'proj-5',
    title: 'QueryLens — Natural Language Database Query Generator',
    author: 'Ethan Brooks',
    category: 'Data',
    description: 'Translates plain English queries into optimized SQL statements with explain-plan visualization and data schema validation.',
    tags: ['Python', 'SQL', 'Data Science', 'FastAPI'],
    status: 'Completed',
    stars: 178,
    views: '2.1k',
    demoUrl: '#/projects'
  },
  {
    id: 'proj-6',
    title: 'PulseSync — Collaborative Markdown Workspace',
    author: 'Nisha Gupta',
    category: 'Frontend',
    description: 'Browser-based documentation editor featuring live markdown rendering, syntax highlighting, local storage synchronization, and offline mode.',
    tags: ['JavaScript', 'Web Storage', 'Markdown', 'PWA'],
    status: 'In Progress',
    stars: 87,
    views: '920',
    demoUrl: '#/projects'
  }
];

export const learnerTestimonials = [
  {
    name: 'Rohan Deshmukh',
    role: 'Frontend Engineer',
    company: 'FinTech Innovations',
    content: 'DevSpace completely redefined how I understand Single Page Application architecture. The hands-on History API and router labs allowed me to build framework-independent production code with zero reloads.',
    rating: 5,
    initials: 'RD'
  },
  {
    name: 'Ananya Verma',
    role: 'Full Stack Developer',
    company: 'CloudScale Labs',
    content: 'The architectural clarity of the courses is unmatched. No bloated boilerplate—just clean, modern engineering principles with real-time feedback and stellar accessibility guidelines.',
    rating: 5,
    initials: 'AV'
  },
  {
    name: 'Liam O’Connor',
    role: 'Product Designer & Engineer',
    company: 'DesignMatrix',
    content: 'Learning how to structure design tokens alongside accessible client-side routing helped me bridge the gap between Figma design systems and production frontend code.',
    rating: 5,
    initials: 'LO'
  }
];
