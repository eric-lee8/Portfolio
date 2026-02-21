
export type ContentBlock =
    | { type: "text"; title?: string; content: string }
    | { type: "image"; src: string; alt: string; caption?: string }
    | { type: "stats"; items: { label: string; value: string }[] };

export interface Project {
    id: number;
    title: string;
    subheading: string;
    description: string;
    client: string;
    image: string;
    slug: string;
    timeline?: string;
    team?: string;
    results?: string[];
    content?: ContentBlock[];
}

export const bio = {
    name: "Eric",
    role: "Product Technologist & Experience Designer",
    tagline: "Bridging Design & Engineering with Logic-Heavy Prototypes",
    description: "I build logic-heavy prototypes and AI-driven systems that bridge the gap between a vision and a shipped product.",
};

export const skills = [
    {
        title: "Product Strategy & Research",
        description: "Aligning client needs with actionable development plans by validating them directly with the market. I lead research to define the product's direction, focusing on the User Problem and Business Model validation.",
    },
    {
        title: "UX Architecture & Interaction",
        description: "Bridging the gap between design and engineering by building simulations so realistic they feel like production code. Specializing in logic-based interactions, variables, and API integrations for complex, multi-modal systems.",
    },
    {
        title: "Product Engineering & Prototyping",
        description: "Acting as a 'consulting prototyper' who builds foundational libraries to scale workflows. I write code to validate idea feasibility (POCs) and create high-fidelity, interactive simulations using APIs.",
    },
    {
        title: "AI-Driven Systems",
        description: "Integrating AI into the fabric of the product experience. From designing multimodal UI patterns to automating workflows with Make.com and engineering prompts for LLM-based platforms.",
    },
];

export const projects: Project[] = [
    {
        id: 1,
        title: "ProtoPie: AI Interaction Patterns",
        subheading: "Defining the Future of AI-Prototyping",
        description:
            "Led the research and development of AI-driven interaction patterns for ProtoPie's high-fidelity prototyping tool. Engineered functional prototypes integrating OpenAI's API to demonstrate voice-controlled interfaces and generative UI flows, bridging the gap between static design and dynamic AI behavior.",
        client: "ProtoPie",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protopie-ai-cover-placeholder.png", // Placeholder
        slug: "protopie-ai-interaction-patterns",
        timeline: "Product Technologist Lead",
        team: "Solo R&D Initiative",
        results: [
            "Developed 5 functional AI-prototyping patterns now referenced in internal design systems",
            "Integrated OpenAI API directly into ProtoPie Connect for real-time demo capabilities",
            "Published technical documentation on 'Designing for Deterministic vs. Probabilistic UI'"
        ],
        content: [
            {
                type: "text",
                title: "The Problem",
                content: "<p>Designers struggle to prototype AI interfaces because standard tools are static. They cannot easily simulate non-deterministic responses, streaming text, or voice interactions without writing complex code.</p>"
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protopie-workflow-placeholder.png", // Placeholder
                alt: "AI Prototyping Workflow Diagram",
                caption: "System architecture for connecting ProtoPie to LLMs via local node servers."
            },
            {
                type: "text",
                title: "The Solution",
                content: "<p>I built a bridge between ProtoPie and OpenAI using a local Node.js relay. This allowed designers to input natural language prompts in the prototype and receive real, streaming responses from GPT-4, enabling true usability testing of AI features before engineering handoff.</p>"
            }
        ]
    },
    {
        id: 2,
        title: "Central 1: Fintech Security Architecture",
        subheading: "Modernizing Banking Security for 300+ Financial Institutions",
        description:
            "Architected the user experience and logical flows for 'Lock'N'Block', a critical security feature used by millions of credit union members. Transformed a complex, legacy backend process into a seamless, self-service UI that reduced fraud operation costs and support call volume.",
        client: "Central 1",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lock%20n%20Block%20-%20Changes%20Saved-aNzhWFFzwuX6pcOybc7whJZTei15fS.png",
        slug: "central-1-fintech-security",
        timeline: "Lead UX Designer",
        team: "Product Owner, 3 Engineers",
        results: ["Reduced fraudulent transaction reporting time by 40%", "Cut support center call volume by 30%", "Deployed to 250+ credit union mobile apps"],
        content: [
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.1.jpg-gnQ1Xuc4e1qtKB2jqcZPn13hHbFOyv.jpeg",
                alt: "Final Interface",
                caption: "The redesigned security dashboard."
            },
            {
                type: "text",
                title: "System Logic",
                content: "<p>The challenge wasn't just UI; it was handling the asynchronous nature of banking legacy cores. I mapped out state machines to handle 'Pending', 'Locked', and 'Re-issuing' states to ensure users never acted on stale data.</p>"
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.9.jpg-ytHq5dyVHEcCBh9NYziKP4hh3NEr4B.jpeg",
                alt: "User Flow Diagram",
                caption: "Complex state flow for lost card reporting."
            }
        ]
    },
    {
        id: 3,
        title: "SPYCE Labs: SaaS Product Strategy",
        subheading: "0 to 1 Architecture for a Web3 Data Platform",
        description:
            "Partnered with founders to define the MVP scope and technical architecture for a B2B Web3 data platform. Translated complex blockchain infrastructure into a coherent dashboard for non-technical enterprise users, establishing the initial product roadmap and design system.",
        client: "SPYCE Labs",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spyce-cover-placeholder.png", // Placeholder
        slug: "spyce-labs-saas-strategy",
        timeline: "Founding Product Designer",
        team: "Founders, CTO",
        results: [
            "Defined MVP feature set reducing estimated build time by 2 months",
            "Created the 'Spyce Design System' (React + Tailwind) for rapid developer handoff",
            "Secured initial pilot partners with high-fidelity interactive demos"
        ],
        content: [
            {
                type: "text",
                title: "Strategic Alignment",
                content: "<p>The founders had deep backend tech but lacked a user-facing layer. I facilitated workshops to identify the 'Job to be Done' for enterprise data analysts, pivoting the product from a raw data pipe to an insight-generation tool.</p>"
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spyce-dashboard-placeholder.png", // Placeholder
                alt: "Dashboard MVP",
                caption: "The high-fidelity MVP dashboard design."
            }
        ]
    }
];
