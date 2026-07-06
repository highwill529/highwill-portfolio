import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

export const socials = [
  { id: "github", label: "GitHub", href: "https://github.com/highwill529", icon: Github, handle: "@michael" },
  // { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/highwill/", icon: Linkedin, handle: "in/michael" },
  // { id: "twitter", label: "X / Twitter", href: "https://twitter.com/michael", icon: Twitter, handle: "@michael" },
  // { id: "instagram", label: "Instagram", href: "https://www.instagram.com/michael/", icon: Instagram, handle: "@michael" },
];

export const projects = [
  {
    href: "https://omnicode.solutions/",
    imageSrc: "/Omnicode Solutions.svg",
    title: "omnicode",
    kind: "business service website",
    description:
      "The website is designed as a company profile / service portfolio, where Omnicode Solutions promotes its ability to build and deliver software products for clients.",
    tags: ['Ruby on Rails', 'React', 'Node.js', 'Django', 'GraphQL', 'PostgreSQL'],
  },
  {
    href: "https://brilliant.org/",
    imageSrc: "/brilliant.png",
    title: "brilliant",
    kind: "STEM learning platform",
    description:
      "Brilliant.org is an interactive website for learning math, science, and coding through problem-solving.",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },
  {
    href: "https://www.atelierslc.com/",
    imageSrc: "/Atelier.webp",
    title: "Atelier",
    kind: "Small e-commerce",
    description:
      "Atelier SLC is a small online shop selling curated home décor and lifestyle products.",
    tags: ["Shopify", "HTML / CSS / JavaScript"],
  },
  {
    href: "https://www.dawninternet.com/",
    imageSrc: "/DAWN Internet.svg",
    title: "DAWN Internet",
    kind: "Web3 decentralized internet",
    description:
      "DAWN Internet is a Web3 project for sharing internet bandwidth through a decentralized network.",
    tags: ["Rust", "TypeScript", "React", "GraphQL", "Shopify Hydrogen", "PostgreSQL"],
  },
];

export const posts = [
  {
    href: "#",
    title: "Agentic coding is eating the software lifecycle",
    date: "Jun 2026",
    readTime: "6 min",
    tag: "AI",
    content:
      "AI agents no longer autocomplete lines, they take whole tickets. Plan, implement, test, open the PR, and ping you for review. Here is how I restructured my workflow around agents, and the parts that still need a human.",
  },
  {
    href: "#",
    title: "MCP won. Here is what to build now",
    date: "May 2026",
    readTime: "5 min",
    tag: "Tooling",
    content:
      "The Model Context Protocol quietly became the USB-C of AI integrations. Every serious tool ships an MCP server, so the interesting work has moved from wiring things together to designing servers agents actually use well.",
  },
  {
    href: "#",
    title: "Small models, big deal: shipping on-device LLMs",
    date: "Apr 2026",
    readTime: "7 min",
    tag: "Edge AI",
    content:
      "Sub-4B models are finally good enough for real product features. No API bill, no latency spikes, no data leaving the device. What I learned putting a local model inside a production desktop app.",
  },
  {
    href: "#",
    title: "React in 2026: the compiler changed how I write components",
    date: "Mar 2026",
    readTime: "5 min",
    tag: "Frontend",
    content:
      "With the React Compiler handling memoization, most of my useMemo and useCallback calls are gone. Components got simpler and faster at the same time, and Server Components finally feel like the default, not the experiment.",
  },
  {
    href: "#",
    title: "Prompt injection is the new SQL injection",
    date: "Feb 2026",
    readTime: "8 min",
    tag: "Security",
    content:
      "Once agents can read your mail, touch your code, and spend your money, every untrusted string becomes a potential exploit. Decades of injection lessons apply directly to LLM apps, and most teams are ignoring them.",
  },
];

export const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Python", "Django", "REST APIs"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
  {
    title: "Mobile & DevOps",
    items: ["React Native", "Docker", "AWS", "Git", "CI/CD", "UX/UI Design"],
  },
];

export const currently = ["LLM agents", "MCP servers", "RAG pipelines", "Local models", "Prompt security"];

export const marqueeItems = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Python",
  "React Native",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Tailwind CSS",
  "Supabase",
];
