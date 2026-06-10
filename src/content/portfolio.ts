export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  year: string;
  duration: string;
  role: string;
  team: string;
  summary: string;
  impact: string[];
  problem: string;
  constraints: string[];
  approach: { title: string; detail: string }[];
  outcome: string;
  reflection: string;
};

export const designerProfile = {
  name: "Jessie Kuo",
  title: "Product Designer",
  tagline:
    "Designing high-clarity product experiences from social, commerce, and service workflows.",
  location: "Taipei / Remote",
  email: "hello@jessiekuo.design",
  intro:
    "I focus on turning complex user flows into intuitive end-to-end product experiences through research, interaction design, and iterative prototyping.",
};

export const portfolioPrinciples = [
  {
    title: "User Clarity",
    detail:
      "I prioritize comprehension and decision confidence, so users understand what to do next at every step.",
  },
  {
    title: "Flow-Driven Design",
    detail:
      "I design around key journeys first, then scale patterns into cohesive systems.",
  },
  {
    title: "Practical Iteration",
    detail:
      "I collaborate with product and engineering to validate quickly and ship improvements in realistic increments.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "cremecard-social-media-app",
    title: "CremeCard | Social Media App",
    category: "Social Product / Mobile UX",
    year: "2024",
    duration: "Personal project",
    role: "Product Designer",
    team: "Solo",
    summary:
      "Designed a social app concept focused on profile expression and lightweight user interaction flows.",
    impact: ["114 views on Behance", "2 appreciations", "Mobile-first interaction concept"],
    problem:
      "Social product interfaces often overwhelm users with dense actions and unclear hierarchy on first use.",
    constraints: [
      "No engineering team in early concept stage",
      "Needed clear hierarchy for small mobile screens",
      "Had to balance visual personality with usability",
    ],
    approach: [
      {
        title: "Frame",
        detail:
          "Defined core user actions and mapped key moments for browsing, posting, and profile interaction.",
      },
      {
        title: "Design",
        detail:
          "Built mobile UI directions with strong visual hierarchy, legible typography, and simplified action points.",
      },
      {
        title: "Refine",
        detail:
          "Iterated layout rhythm and component consistency to keep the interface expressive but easy to scan.",
      },
    ],
    outcome:
      "The project became a focused portfolio piece demonstrating end-to-end social product UI thinking.",
    reflection:
      "The best visual systems in social apps still need strict interaction clarity to remain usable.",
  },
  {
    slug: "pet-backers-app-uiux-design",
    title: "Pet Backers App | UIUX Design",
    category: "Consumer App / Service UX",
    year: "2023",
    duration: "Personal project",
    role: "Product Designer",
    team: "Solo",
    summary:
      "Designed a pet-focused app experience to support user trust and task completion in care-related workflows.",
    impact: ["131 views on Behance", "1 appreciation", "End-to-end app flow prototype"],
    problem:
      "Pet service users need emotional reassurance and fast action, but many apps create friction in key moments.",
    constraints: [
      "Needed to support first-time and repeat users",
      "Had to communicate trust signals in UI",
      "Limited scope and timeline for concept delivery",
    ],
    approach: [
      {
        title: "Research",
        detail:
          "Reviewed comparable pet and service apps to identify trust, booking, and communication UX patterns.",
      },
      {
        title: "Structure",
        detail:
          "Organized screens around practical user tasks and progressive information disclosure.",
      },
      {
        title: "Prototype",
        detail:
          "Created screen flows and UI states that balanced emotional tone with operational clarity.",
      },
    ],
    outcome:
      "The concept demonstrates ability to design service-oriented consumer journeys with clear task progression.",
    reflection:
      "Trust cues should be integrated into flow structure, not treated as decorative UI elements.",
  },
  {
    slug: "amazon-product-research",
    title: "Amazon Product Research",
    category: "E-commerce / Product Strategy",
    year: "2023",
    duration: "Research project",
    role: "Product Designer",
    team: "Solo",
    summary:
      "Analyzed Amazon product experience patterns to identify opportunities for improved discovery and comparison UX.",
    impact: ["114 views on Behance", "1 appreciation", "Research-to-design framing"],
    problem:
      "Large e-commerce environments can create decision overload and reduce confidence during product comparison.",
    constraints: [
      "Research outputs had to stay concise and actionable",
      "Needed to connect UX observations to product decisions",
      "No direct access to proprietary user metrics",
    ],
    approach: [
      {
        title: "Audit",
        detail:
          "Reviewed key user paths including search, listing, and product detail comparison moments.",
      },
      {
        title: "Synthesize",
        detail:
          "Mapped friction points and translated findings into potential UX improvement principles.",
      },
      {
        title: "Recommend",
        detail:
          "Proposed interface and content hierarchy improvements to reduce cognitive load in decision stages.",
      },
    ],
    outcome:
      "The project highlights product thinking and research synthesis skills beyond pure visual execution.",
    reflection:
      "Strong research artifacts are most useful when they directly inform prioritization and design trade-offs.",
  },
  {
    slug: "open-app-uiux-redesign-project",
    title: "Open App | UIUX redesign project",
    category: "Redesign / Product Improvement",
    year: "2023",
    duration: "Personal redesign",
    role: "Product Designer",
    team: "Solo",
    summary:
      "Redesigned an existing app experience to improve navigation clarity and reduce interaction friction.",
    impact: ["135 views on Behance", "0 appreciations", "End-to-end redesign concept"],
    problem:
      "The original app structure made it hard for users to discover high-frequency actions quickly.",
    constraints: [
      "Redesign needed to respect existing mental models",
      "Had to modernize UI without adding complexity",
      "Project scope was limited to key journeys",
    ],
    approach: [
      {
        title: "Evaluate",
        detail:
          "Assessed legacy IA and interaction patterns to identify navigation and content hierarchy weaknesses.",
      },
      {
        title: "Redesign",
        detail:
          "Reorganized layouts and action architecture for faster scanning and clearer path-to-action.",
      },
      {
        title: "Validate",
        detail:
          "Reviewed task flows against usability heuristics and refined details for consistency.",
      },
    ],
    outcome:
      "This case shows practical redesign capability and ability to reframe existing products with clearer UX logic.",
    reflection:
      "Successful redesigns focus on removing ambiguity before adding new features.",
  },
  {
    slug: "smart-brewing-app-uiux-personal-project",
    title: "Smart brewing app | UIUX | personal project",
    category: "IoT Companion App / Mobile UX",
    year: "2023",
    duration: "Personal project",
    role: "Product Designer",
    team: "Solo",
    summary:
      "Designed a companion app concept for smart brewing, emphasizing guided setup and control readability.",
    impact: ["130 views on Behance", "0 appreciations", "Connected-device UX exploration"],
    problem:
      "Companion apps for physical devices often struggle with clear status feedback and setup progression.",
    constraints: [
      "Needed to represent device state clearly in limited space",
      "Had to balance novice guidance with advanced controls",
      "No hardware integration during concept phase",
    ],
    approach: [
      {
        title: "Map",
        detail:
          "Defined user journey from first-time pairing to daily brewing routines.",
      },
      {
        title: "Design",
        detail:
          "Built screens for setup, control, and status with emphasis on readability and confidence.",
      },
      {
        title: "Iterate",
        detail:
          "Adjusted interaction density and terminology to make controls feel more intuitive.",
      },
    ],
    outcome:
      "The project demonstrates UX thinking for connected experiences and behavior-based interface structuring.",
    reflection:
      "Clear system status communication is critical for trust in IoT-related mobile experiences.",
  },
  {
    slug: "dl-speaker-product-design",
    title: "D&L speaker | product design",
    category: "Industrial Design / Product Concept",
    year: "2022",
    duration: "Personal project",
    role: "Product Designer",
    team: "Solo",
    summary:
      "Developed a speaker concept combining form exploration with user-oriented interaction considerations.",
    impact: ["125 views on Behance", "9 appreciations", "Highest engagement among listed projects"],
    problem:
      "Audio product concepts need both strong visual identity and intuitive physical interaction points.",
    constraints: [
      "Needed to keep form language manufacturable",
      "Had to align aesthetics with usability intent",
      "Project completed without hardware prototyping",
    ],
    approach: [
      {
        title: "Explore",
        detail:
          "Generated multiple form and material directions to define a cohesive product identity.",
      },
      {
        title: "Select",
        detail:
          "Narrowed concepts based on balance between usability, proportions, and visual coherence.",
      },
      {
        title: "Present",
        detail:
          "Built final renders and storytelling assets to communicate functional and aesthetic decisions.",
      },
    ],
    outcome:
      "This piece broadens the portfolio by showing physical product sensibility alongside digital UX work.",
    reflection:
      "Physical interaction design sharpens precision in digital interaction thinking.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
