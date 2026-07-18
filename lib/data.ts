export const social = {
  email: "vaishnavi.mangati@example.com",
  github: "https://github.com/vaishnavimangati",
  linkedin: "https://linkedin.com/in/vaishnavimangati",
  resume: "/resume.pdf",
};

export const journey = [
  {
    clock: "Q1",
    when: "Foundation",
    title: "B.Tech in Computer Science Engineering",
    desc: "Built the fundamentals: data structures, algorithms, OOP, DBMS, operating systems, computer networks — the stuff that doesn't show up in a demo but shows up in production incidents.",
    tags: ["DSA", "DBMS", "OS", "Networks"],
  },
  {
    clock: "Q2",
    when: "First real code",
    title: "Frontend Internship — Elfinity Technologies",
    desc: "Moved from coursework to codebase: built React features, integrated REST APIs, debugged real bugs with real users, and learned what \"agile\" means when a sprint actually ships.",
    tags: ["React.js", "Git workflows", "Agile"],
  },
  {
    clock: "Q3",
    when: "Teaching to learn",
    title: "Student Mentor — Web Development",
    desc: "Ran React and JavaScript sessions for students building their first projects. Explaining a closure to a beginner is a harder test of understanding than writing one.",
    tags: ["Mentorship", "JavaScript", "Debugging"],
  },
  {
    clock: "Q4",
    when: "Building in public",
    title: "Satvic Health & Blog Management Platform",
    desc: "Took two ideas from blank repo to working product — a wellness app with real recommendation logic, and a publishing platform with proper auth and roles.",
    tags: ["MERN", "Next.js", "JWT Auth"],
  },
  {
    clock: "OT",
    when: "Right now",
    title: "Current goal: production-grade systems",
    desc: "Deepening system design, writing more tests, and looking for a team where I can own features end-to-end — from database schema to the pixel the user actually taps.",
    tags: ["System design", "Testing", "Ownership"],
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    items: [
      { name: "React.js", exp: "2 yrs", desc: "Component architecture, hooks, state management.", level: 0.9, projects: "Satvic Health, Blog Platform" },
      { name: "Next.js", exp: "1 yr", desc: "App Router, SSR, SEO-friendly routing.", level: 0.75, projects: "Blog Platform" },
      { name: "TypeScript", exp: "1 yr", desc: "Typed components, safer refactors.", level: 0.7, projects: "Blog Platform" },
      { name: "JavaScript", exp: "2+ yrs", desc: "ES6+, async patterns, DOM fundamentals.", level: 0.9, projects: "All projects" },
      { name: "Tailwind CSS", exp: "2 yrs", desc: "Utility-first styling, responsive layouts.", level: 0.85, projects: "All projects" },
      { name: "HTML5 / CSS3", exp: "2+ yrs", desc: "Semantic markup, accessible layouts.", level: 0.9, projects: "All projects" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", exp: "1.5 yrs", desc: "REST APIs, middleware, auth flows.", level: 0.8, projects: "Satvic Health, Blog Platform" },
      { name: "Express.js", exp: "1.5 yrs", desc: "Routing, JWT auth, role-based access.", level: 0.8, projects: "Blog Platform" },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "MongoDB", exp: "1.5 yrs", desc: "Schema design, aggregation pipelines.", level: 0.8, projects: "Satvic Health, Blog Platform" },
      { name: "PostgreSQL", exp: "1 yr", desc: "Relational modeling, SQL queries.", level: 0.6, projects: "Coursework projects" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git & GitHub", exp: "2 yrs", desc: "Branching workflows, PR reviews.", level: 0.85, projects: "All projects" },
      { name: "GitHub Actions", exp: "6 mo", desc: "CI pipelines for lint and test.", level: 0.55, projects: "Blog Platform" },
      { name: "Postman", exp: "1.5 yrs", desc: "API testing and documentation.", level: 0.75, projects: "Satvic Health" },
      { name: "Jest", exp: "6 mo", desc: "Unit testing React components.", level: 0.55, projects: "Blog Platform" },
    ],
  },
  {
    label: "Concepts",
    items: [
      { name: "Data Structures", exp: "Core", desc: "Efficient data modeling for scale.", level: 0.85, projects: "Academic + applied" },
      { name: "Algorithms", exp: "Core", desc: "Problem-solving, complexity analysis.", level: 0.8, projects: "Academic + applied" },
      { name: "OOP", exp: "Core", desc: "Encapsulation, design patterns.", level: 0.8, projects: "Academic + applied" },
      { name: "DBMS", exp: "Core", desc: "Normalization, transactions, indexing.", level: 0.75, projects: "Academic + applied" },
      { name: "Operating Systems", exp: "Core", desc: "Processes, memory, concurrency basics.", level: 0.7, projects: "Academic" },
      { name: "Computer Networks", exp: "Core", desc: "HTTP, TCP/IP, client-server models.", level: 0.7, projects: "Academic" },
      { name: "Agile Development", exp: "1 yr", desc: "Sprints, standups, iterative delivery.", level: 0.75, projects: "Elfinity internship" },
    ],
  },
];

export const experience = [
  {
    logo: "E",
    period: "Frontend Internship",
    company: "Elfinity Technologies",
    role: "Frontend Intern",
    items: [
      "Built and maintained React.js applications",
      "Integrated REST APIs end-to-end",
      "Debugged real production issues",
      "Worked inside an agile development cycle",
      "Practiced disciplined Git workflows",
      "Shipped feature development and frontend optimizations",
    ],
  },
  {
    logo: "S",
    period: "Mentorship",
    company: "Student Mentor — Web Development",
    role: "Volunteer / Peer mentorship",
    items: [
      "Mentored students learning to code",
      "Ran React and JavaScript sessions",
      "Guided live debugging sessions",
      "Helped students ship their own projects",
      "Taught software engineering best practices",
    ],
  },
];

export const projects = [
  {
    index: "01 / 02",
    title: "Satvic Health",
    tagline:
      "A personalized wellness platform that turns a short questionnaire into a full diet, workout, and habit plan — and keeps you honest with a progress heatmap.",
    problem:
      "Generic diet and fitness apps hand everyone the same plan. People drop off because nothing feels tailored to their body, goals, or schedule.",
    solution:
      "A questionnaire-driven engine that generates a personalized diet and workout plan, then keeps users engaged with habit tracking, a smart cart for groceries, and a visual heatmap of progress over time.",
    architecture:
      "React frontend consuming a Node/Express REST API, with MongoDB storing user profiles, plans, and daily logs. Recommendation logic runs server-side and reshapes plans as habits are logged.",
    challenges:
      "Balancing flexibility (every user's plan is different) against maintainability (one codebase, not a hundred one-off scripts) — solved with a rules-based recommendation layer instead of hardcoded plans.",
    features: [
      "Personalized diet plans",
      "Workout planner",
      "Habit tracking",
      "Meal planner",
      "Smart grocery cart",
      "Progress heatmaps",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demo: "#",
    github: social.github,
  },
  {
    index: "02 / 02",
    title: "Blog Management Platform",
    tagline:
      "A publishing platform with real authentication and role-based permissions — the difference between a toy CMS and one a team could actually use.",
    problem:
      "Most tutorial blog apps skip the parts that make a CMS production-ready: proper auth, permissions, and an admin experience that doesn't feel bolted on.",
    solution:
      "Built authentication and role-based access from the ground up, so writers, editors, and admins each see a dashboard scoped to what they're allowed to do — with media uploads and publishing built in.",
    architecture:
      "Next.js frontend with server-rendered routes for SEO, a Node/Express API layer issuing JWTs, MongoDB for content, and Firebase handling media storage.",
    challenges:
      "Keeping role-based access consistent across both the API and the UI, so a restricted action is impossible to reach — not just hidden behind a disabled button.",
    features: [
      "JWT authentication",
      "Role-based access",
      "Article publishing",
      "Admin dashboard",
      "Media uploads",
      "Fully responsive UI",
    ],
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Firebase", "Tailwind CSS"],
    demo: "#",
    github: social.github,
  },
];

export const certifications = [
  { title: "JavaScript Certification", subtitle: "Core language mastery" },
  { title: "JavaScript Essentials", subtitle: "Fundamentals & best practices" },
  { title: "Basketball — South Zone", subtitle: "Player achievement" },
];

export const beyondCode = [
  {
    glyph: "🏀",
    lesson: "Leadership · Discipline · Teamwork",
    title: "Basketball",
    text: "Placing at the South Zone level didn't come from talent alone — it came from running the same drill until it was automatic. On a team, you learn fast that a great individual play means nothing if the system around it breaks down. I bring that same instinct to code: reps build reliability, and a good feature is a team result, not a solo one.",
    wide: true,
  },
  {
    glyph: "🎌",
    lesson: "Curiosity · Growth · Resilience",
    title: "Anime",
    text: "Attack on Titan taught me to question the walls I'm told not to look past. Black Clover is proof a slow starter can out-work his ceiling. Spy × Family is a reminder the best systems look effortless from the outside because of what's engineered underneath. Different shows, same lesson: growth is a long game.",
    wide: false,
  },
  {
    glyph: "🎨",
    lesson: "Attention to detail · Creativity",
    title: "Art",
    text: "Sketching trains the same muscle as reviewing a pull request: notice what's slightly off before it becomes a problem. It's also where I make something with no spec and no deadline — which, it turns out, makes me better at working within one.",
    wide: false,
  },
  {
    glyph: "🍳",
    lesson: "Experimentation · Iteration",
    title: "Cooking",
    text: "A recipe is a first draft, not a rulebook. I taste, adjust, and try again — the exact loop I run when a feature works but doesn't feel right yet. Both disciplines punish impatience and reward redoing something three times to get it right.",
    wide: false,
  },
  {
    glyph: "💃",
    lesson: "Rhythm · Confidence",
    title: "Dance",
    text: "Dance is timing made visible — and so is good software: knowing when to ship, when to hold a release, when a transition needs one more beat of polish. It's also where I practice being seen mid-mistake and continuing anyway, which is most of what shipping in public actually feels like.",
    wide: false,
  },
];
