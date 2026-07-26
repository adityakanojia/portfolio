// ─── Site Data ────────────────────────────────────────────────────────────────

export const SITE = {
  name: "Aditya Kanozia",
  title: "Aditya Kanozia — Software Development Engineer",
  description:
    "I design and build scalable systems, robust architectures, and data-intense applications that solve complex engineering problems.",
  url: "https://www.adityakanozia.com",
  email: "adityakanozia@gmail.com",
  phone: "+91 9667369447",
  linkedin: "https://linkedin.com/in/adityakanozia",
  github: "https://github.com/adityakanozia",
  twitter: "@adityakanozia",
  leetcode: "https://leetcode.com/u/EINSTEIN_LOVES_MAXWELL/",
};

// ─── Nav Links ────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// ─── Trust Indicators ─────────────────────────────────────────────────────────

export const TRUST_INDICATORS = [
  "System Architecture",
  "Data-Intensive Applications",
  "Scalable Backend",
  "High-Performance Frontend",
  "Microservices",
];

// ─── Client Types ─────────────────────────────────────────────────────────────

export const CLIENT_TYPES = [
  {
    id: "law-firms",
    title: "Law Firms",
    description:
      "Professional websites that build trust, establish authority, and attract high-value clients in competitive legal markets.",
    icon: "Scale",
  },
  {
    id: "startups",
    title: "Startups",
    description:
      "Fast MVPs and scalable applications that let you validate quickly, raise funding, and grow without technical debt.",
    icon: "Rocket",
  },
  {
    id: "creators",
    title: "Creators",
    description:
      "Personal brands and portfolio websites that stand out, tell your story, and convert followers into clients.",
    icon: "Sparkles",
  },
  {
    id: "local-businesses",
    title: "Local Businesses",
    description:
      "Lead-generating websites that convert visitors into customers and help you dominate local search results.",
    icon: "MapPin",
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    id: "business-websites",
    title: "Business Websites",
    description:
      "Modern, conversion-focused websites designed to build trust and turn visitors into paying clients. Optimized for performance, SEO, and mobile.",
    icon: "Globe",
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    description:
      "Stunning personal brands for consultants, creators, and professionals that communicate credibility and attract the right opportunities.",
    icon: "Layers",
  },
  {
    id: "full-stack-apps",
    title: "Full Stack Applications",
    description:
      "Custom software solutions and SaaS products built with modern technologies, scalable architectures, and exceptional user experiences.",
    icon: "Code2",
  },
  {
    id: "software-architecture",
    title: "Software Architecture",
    description:
      "Backend systems, REST & GraphQL APIs, database design, and scalability planning for applications that need to grow reliably.",
    icon: "Server",
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    description:
      "Technical SEO audits, Core Web Vitals improvements, structured data, and content strategy to rank higher and get found.",
    icon: "Search",
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    description:
      "Continuous updates, security patches, performance monitoring, and feature additions so your site never falls behind.",
    icon: "Shield",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    id: "vault",
    title: "Vault Landing Page",
    category: "SaaS / Landing Page",
    url: "https://vault-landing-page-gamma.vercel.app/",
    overview:
      "A high-converting SaaS landing page designed to communicate value instantly and drive sign-ups.",
    challenge:
      "Create a landing page that communicates a complex financial product simply, building trust with skeptical users in under 5 seconds.",
    solution:
      "Designed a clean, benefit-led layout with strong social proof, clear pricing, and a frictionless CTA flow.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    outcome:
      "Achieved a premium, conversion-optimized design with sub-2s load time and a clean visual hierarchy.",
    accentColor: "from-amber-500/20 to-orange-500/10",
  },
  {
    id: "headsup",
    title: "HeadsUp",
    category: "Tech Startup / Full Stack",
    url: "https://headsuptech.in/",
    overview:
      "A full-stack platform for a fast-growing tech startup, built to scale from day one.",
    challenge:
      "Build a production-ready platform for a startup that needed rapid iteration without sacrificing performance or scalability.",
    solution:
      "Implemented a modern full-stack architecture with Next.js frontend and FastAPI backend, deployed on scalable cloud infrastructure.",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "TypeScript"],
    outcome:
      "Delivered a robust, high-performance platform capable of handling thousands of concurrent users.",
    accentColor: "from-blue-500/20 to-indigo-500/10",
  },
  {
    id: "sharp-image",
    title: "Sharp Image Capture",
    category: "Photography / Business",
    url: "https://www.sharpimagecapture.com/",
    overview:
      "A professional photography business website designed to attract premium clients and showcase work beautifully.",
    challenge:
      "Build a visually stunning website for a photography business that would attract high-budget clients and rank well locally.",
    solution:
      "Created a portfolio-first design with immersive image galleries, local SEO optimization, and a streamlined inquiry process.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    outcome:
      "Delivered a premium digital presence that positions the photographer as the go-to choice in their market.",
    accentColor: "from-purple-500/20 to-pink-500/10",
  },
];

// ─── Why Work With Me ─────────────────────────────────────────────────────────

export const WHY_ME = [
  {
    id: "fast-delivery",
    title: "Fast Delivery",
    description:
      "Most projects are delivered within 2–4 weeks. No endless delays, no scope creep. Just results.",
    icon: "Zap",
  },
  {
    id: "modern-tech",
    title: "Modern Technology",
    description:
      "Built with Next.js, TypeScript, and industry-leading tools that ensure your site stays fast and maintainable.",
    icon: "Code2",
  },
  {
    id: "seo-focused",
    title: "SEO Focused",
    description:
      "Every website is built with technical SEO baked in — structured data, Core Web Vitals, and semantic HTML.",
    icon: "Search",
  },
  {
    id: "mobile-first",
    title: "Mobile First",
    description:
      "Over 60% of web traffic is mobile. Every pixel is designed for smaller screens first, then scaled up.",
    icon: "Smartphone",
  },
  {
    id: "performance",
    title: "Performance Optimized",
    description:
      "Lighthouse scores above 95 across Performance, SEO, Accessibility, and Best Practices — every time.",
    icon: "BarChart3",
  },
  {
    id: "support",
    title: "Long-Term Support",
    description:
      "I don't disappear after launch. Ongoing maintenance, updates, and improvements are always available.",
    icon: "HeartHandshake",
  },
];

// ─── Process ──────────────────────────────────────────────────────────────────

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We start with a deep-dive into your business, goals, audience, and competitors to build a strategic foundation.",
    icon: "Compass",
  },
  {
    step: 2,
    title: "Planning",
    description:
      "I map out the architecture, sitemap, and technical stack to ensure everything is built correctly from day one.",
    icon: "Map",
  },
  {
    step: 3,
    title: "Design",
    description:
      "Wireframes and high-fidelity designs that prioritize user experience, conversion, and brand consistency.",
    icon: "Palette",
  },
  {
    step: 4,
    title: "Development",
    description:
      "Clean, type-safe code with attention to performance, accessibility, and SEO at every level.",
    icon: "Code2",
  },
  {
    step: 5,
    title: "Testing",
    description:
      "Thorough cross-browser and device testing, performance audits, and accessibility checks before launch.",
    icon: "CheckCircle2",
  },
  {
    step: 6,
    title: "Launch",
    description:
      "Seamless deployment with SSL, DNS configuration, and performance monitoring set up from day one.",
    icon: "Rocket",
  },
  {
    step: 7,
    title: "Support",
    description:
      "Post-launch support, content updates, and ongoing improvements to keep your site performing at its best.",
    icon: "HeartHandshake",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Sharma",
    title: "Managing Partner",
    company: "Sharma & Associates Law Firm",
    quote:
      "Aditya transformed our outdated website into a premium digital presence. Within the first month, we saw a 40% increase in consultation requests. The quality of work is outstanding.",
    rating: 5,
    avatar: "RS",
  },
  {
    id: 2,
    name: "Priya Mehta",
    title: "Founder & CEO",
    company: "Velocity Startup Studio",
    quote:
      "We needed an MVP fast without sacrificing quality. Aditya delivered a full-stack platform in 3 weeks that our investors loved. He's the only developer I'll work with for our next product.",
    rating: 5,
    avatar: "PM",
  },
  {
    id: 3,
    name: "Arjun Kapoor",
    title: "Creative Director",
    company: "Kapoor Photography",
    quote:
      "My portfolio website went from something I was embarrassed to share to my most powerful business tool. The attention to detail and understanding of my brand was exceptional.",
    rating: 5,
    avatar: "AK",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const FAQ_ITEMS = [
  {
    id: "cost",
    question: "How much does a website cost?",
    answer:
      "Pricing depends on the scope and complexity of the project. A professional business website typically starts at ₹40,000–₹80,000, while full-stack applications and custom software start at ₹1,20,000+. I provide a detailed quote after our initial discovery call — no surprises.",
  },
  {
    id: "timeline",
    question: "How long does it take?",
    answer:
      "A standard business website takes 2–3 weeks. Portfolio websites are typically 1–2 weeks. Complex full-stack applications can take 4–8+ weeks depending on scope. I provide a clear timeline upfront and stick to it.",
  },
  {
    id: "hosting",
    question: "Do you provide hosting support?",
    answer:
      "Yes. I handle the full deployment process, including server setup, DNS configuration, SSL certificates, and hosting on platforms like Vercel, AWS, or Railway. I can also help you manage and maintain your hosting long-term.",
  },
  {
    id: "redesign",
    question: "Can you redesign existing websites?",
    answer:
      "Absolutely. Redesigning existing sites is one of my specialties. I'll audit your current website, identify conversion bottlenecks and performance issues, and rebuild it as a premium, high-performing digital presence.",
  },
  {
    id: "seo",
    question: "Do you provide SEO?",
    answer:
      "Every website I build includes technical SEO best practices: structured data, semantic HTML, Core Web Vitals optimization, sitemap, robots.txt, and Open Graph metadata. I also offer ongoing SEO services and content strategy separately.",
  },
  {
    id: "technologies",
    question: "What technologies do you use?",
    answer:
      "I primarily build with Next.js (TypeScript), Tailwind CSS, and Framer Motion on the frontend. For backends, I use FastAPI (Python), PostgreSQL, and Redis. Everything is deployed on modern cloud platforms. The stack is always chosen based on what's best for your specific needs.",
  },
];
