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
    "Designing high-clarity product experiences for complex systems and high-growth teams.",
  location: "Taipei / Remote",
  email: "hello@jessiekuo.design",
  intro:
    "I help product teams turn ambiguous opportunities into measurable outcomes by combining systems thinking, fast prototyping, and rigorous user validation.",
};

export const portfolioPrinciples = [
  {
    title: "Impact First",
    detail:
      "Every project is anchored by a business and user metric, not visual polish alone.",
  },
  {
    title: "Narrative Clarity",
    detail:
      "Case studies are structured for rapid scanning: context, decisions, trade-offs, and outcomes.",
  },
  {
    title: "Cross-Functional Leadership",
    detail:
      "I work closely with PM, engineering, and data stakeholders to de-risk delivery and align teams.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "onboarding-rebuild",
    title: "Rebuilding Onboarding for a B2B Workflow Product",
    category: "Growth / Activation",
    year: "2025",
    duration: "4 months",
    role: "Lead Product Designer",
    team: "1 PM, 5 engineers, 1 data analyst",
    summary:
      "Redesigned the first-session onboarding flow to reduce setup friction and improve activation quality.",
    impact: [
      "+18% week-1 activation",
      "-27% setup drop-off",
      "+11 NPS points for new users",
    ],
    problem:
      "New users had to configure too many settings before seeing value. Teams were abandoning onboarding before completing core setup.",
    constraints: [
      "Legacy information architecture tied to old pricing tiers",
      "Single sprint window for engineering migration",
      "Must preserve enterprise compliance requirements",
    ],
    approach: [
      {
        title: "Diagnose",
        detail:
          "Mapped first-session funnel and interviewed 12 recently churned admins to identify confidence and motivation gaps.",
      },
      {
        title: "Rescope",
        detail:
          "Reduced initial setup from 9 required decisions to 3 by moving advanced options into progressive disclosure.",
      },
      {
        title: "Validate",
        detail:
          "Ran usability testing and staged release experiments with PM + analytics to measure quality of activation, not just completion.",
      },
    ],
    outcome:
      "Activation improved without increasing support tickets. The framework became a reusable onboarding pattern for two adjacent product lines.",
    reflection:
      "A key learning was that reducing visible complexity increased user trust more than adding explanatory copy.",
  },
  {
    slug: "insights-dashboard",
    title: "Designing an Insights Dashboard for Multi-Region Operators",
    category: "Data Product / Decision Support",
    year: "2024",
    duration: "5 months",
    role: "Senior Product Designer",
    team: "2 PMs, 7 engineers, 1 researcher",
    summary:
      "Created a decision-first analytics surface that helped operations teams detect regional anomalies faster.",
    impact: [
      "-32% time-to-diagnose incidents",
      "+24% weekly dashboard adoption",
      "3 legacy views consolidated into 1 workspace",
    ],
    problem:
      "Operators had fragmented reporting tools and no shared source of truth for investigating performance shifts.",
    constraints: [
      "High data latency variance across regions",
      "Complex permissions model by market",
      "Needed parity between desktop and field tablet usage",
    ],
    approach: [
      {
        title: "Align",
        detail:
          "Facilitated cross-functional workshops to define top five decisions users needed to make each day.",
      },
      {
        title: "Structure",
        detail:
          "Organized the UI around decision workflows: detect, compare, isolate, and action instead of chart-type navigation.",
      },
      {
        title: "Ship",
        detail:
          "Partnered with engineering to stage rendering performance budgets and ensure interactions stayed responsive under heavy data states.",
      },
    ],
    outcome:
      "Operations leadership adopted the dashboard as the default weekly review tool, replacing slide-based reporting in regional meetings.",
    reflection:
      "The biggest gain came from reducing interpretation effort, not adding more visualizations.",
  },
  {
    slug: "design-system-scaling",
    title: "Scaling a Design System Across 4 Product Pods",
    category: "Platform / Design Operations",
    year: "2023",
    duration: "6 months",
    role: "Product Designer",
    team: "Design lead, 4 designers, 12 engineers",
    summary:
      "Established governance and component standards to accelerate shipping while improving interface consistency.",
    impact: [
      "-21% average feature UI implementation time",
      "86% component adoption in 2 quarters",
      "Accessibility issues reduced by 40%",
    ],
    problem:
      "Teams were rebuilding similar UI patterns repeatedly, causing inconsistent experiences and slower release cycles.",
    constraints: [
      "Different tech stacks across pods",
      "No dedicated design system squad",
      "Had to migrate incrementally without freezing product work",
    ],
    approach: [
      {
        title: "Audit",
        detail:
          "Cataloged duplicate UI patterns and built a prioritization matrix based on usage frequency and implementation cost.",
      },
      {
        title: "Enable",
        detail:
          "Introduced practical adoption guides, design reviews, and office hours to lower migration friction.",
      },
      {
        title: "Govern",
        detail:
          "Created lightweight contribution criteria with engineering partners so teams could evolve the system without bottlenecks.",
      },
    ],
    outcome:
      "The system shifted from a static Figma library to a product-level operating model shared by design and engineering.",
    reflection:
      "Consistency scales when contribution is easier than reinvention.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
