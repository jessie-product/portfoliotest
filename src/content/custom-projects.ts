export type CustomProjectSection = {
  eyebrow: string;
  headline: string;
  body: string[];
  bullets?: string[];
  visual: string;
  image?: string;
};

export type CustomProject = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  tags: string[];
  year: string;
  meta: {
    label: string;
    value: string;
  }[];
  shortStory: {
    eyebrow: string;
    headline: string;
    body: string;
    highlights: {
      number: string;
      title: string;
      body: string;
    }[];
  };
  sections: CustomProjectSection[];
};

export const customProjects: CustomProject[] = [
  {
    slug: "on-demand-car-wash-experience",
    title: "Mobile Car Wash Conversion",
    subtitle:
      "Improving booking conversion by surfacing the service during active parking sessions.",
    heroImage: "/car-wash-hero.png",
    tags: ["Product Design", "Full Case Study", "2024"],
    year: "2024",
    meta: [
      {
        label: "Timeline",
        value: "2024",
      },
      {
        label: "Role",
        value: "Product Designer",
      },
      {
        label: "Platform",
        value: "Mobile App + Provider Dashboard",
      },
      {
        label: "Skills",
        value:
          "Product Experience, Conversion Optimization, Service Design, Operations Workflow",
      },
    ],
    shortStory: {
      eyebrow: "Long Story Short",
      headline:
        "I helped turn active parking moments into Mobile Car Wash bookings.",
      body:
        "USPACE's Mobile Car Wash Service was valuable, but users were not booking as much as expected. Through user journey analysis, I found that the service was not being shown at the moment when users were most likely to need it. By adding the service entry point to the active parking screen, we increased booking conversion by over 25%. I also designed the 0-to-1 booking flow and provider-side dashboard to support the full service journey.",
      highlights: [
        {
          number: "01",
          title: "Contextual Discovery",
          body:
            "Surfaced Mobile Car Wash during active parking, when users were most likely to understand its value.",
        },
        {
          number: "02",
          title: "Low-effort Booking",
          body:
            "Designed a booking flow that used parking context to reduce manual input and prevent location errors.",
        },
        {
          number: "03",
          title: "Service Fulfillment",
          body:
            "Created a provider dashboard to support order management, dispatching, and service status tracking.",
        },
      ],
    },
    sections: [
      {
        eyebrow: "Project Context",
        headline:
          "A valuable service, but lower-than-expected booking conversion.",
        body: [
          "USPACE expanded from parking into car owner services, including Mobile Car Wash - a service that allowed users to get their cars washed while parked.",
          "The service saved users time, but the booking rate was not as strong as expected. The problem was not the value of the service itself, but whether users discovered it at the right moment.",
        ],
        visual: "Original service entry point under the car wash section.",
      },
      {
        eyebrow: "Problem",
        headline: "Users did not naturally look for car wash in the app.",
        body: [
          "Originally, Mobile Car Wash was placed under the car wash section, which followed a feature-based logic: users had to actively think about car wash and search for the service.",
          "However, users were more likely to see the value when they were already parking - their car was parked, the location was known, and they had a clear time window before leaving.",
        ],
        visual: "Feature-based entry vs. context-based opportunity.",
        image: "/car-wash-project-context.png",
      },
      {
        eyebrow: "Key Insight",
        headline:
          "Mobile Car Wash becomes most relevant when the car is already parked.",
        body: [
          "During an active parking session, users already had the right conditions for the service:",
          "This made the active parking screen the most relevant moment to introduce Mobile Car Wash.",
        ],
        bullets: [
          "The car was parked at a known USPACE location",
          "The user had a clear parking time window",
          "The service could be completed without extra effort",
        ],
        visual:
          "Parking in progress -> Time window available -> Car wash opportunity.",
        image: "/car-wash-key-insight.png",
      },
      {
        eyebrow: "Solution 01 | Contextual Entry Point",
        headline: "I placed the service where user intent was strongest.",
        body: [
          "We added the Mobile Car Wash entry point to the active parking screen, allowing users to discover the service while their car was already parked.",
          "This shifted the service from a passive feature inside the car wash section to a contextual opportunity that appeared when users were more likely to understand its value.",
        ],
        visual: "Before / after entry point comparison.",
        image: "/car-wash-solution-01.png",
      },
      {
        eyebrow: "Solution 02 | Low-effort Booking",
        headline: "I used parking context to reduce booking friction.",
        body: [
          "Since users entered the flow during an active parking session, the parking location could be automatically brought into the order. This reduced manual input and lowered the risk of location errors that could delay the provider.",
          "Instead of asking users to choose a traditional service time slot, we asked for their expected vehicle departure time, helping providers plan the service before the user needed the car again.",
        ],
        visual:
          "Booking flow screens: package selection, auto-filled location, expected departure time.",
      },
      {
        eyebrow: "Solution 03 | Provider Operations",
        headline: "I designed the backend flow to help the service scale.",
        body: [
          "As orders increased, relying on customer service for manual dispatching and gate access support became harder to manage.",
          "I designed a provider-side dashboard for order management, job acceptance / dispatching, and service status tracking. This helped providers operate more independently, reduced customer service workload, and made fulfillment smoother.",
        ],
        visual: "Provider dashboard: order list, job status, dispatch / accept flow.",
      },
    ],
  },
];

export function getCustomProjectBySlug(slug: string) {
  return customProjects.find((project) => project.slug === slug);
}
