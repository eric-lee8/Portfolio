import Link from "next/link";
import Newsletter from "@/components/Newsletter";

const articles = [
    {
        id: 1,
        title: "Designing for Deterministic vs. Probabilistic UI",
        slug: "designing-deterministic-probabilistic-ui",
        date: "October 12, 2024",
        category: "AI Design",
        excerpt:
            "Why traditional wireframing fails for LLM interfaces, and how to prototype ‘fuzzy’ interactions that adapt to user intent.",
    },
    {
        id: 2,
        title: "The Product Engineer's Stack: Next.js + Tailwind + Framer Motion",
        slug: "product-engineer-stack",
        date: "September 28, 2024",
        category: "Engineering",
        excerpt:
            "A technical deep dive into my preferred stack for building rapid, high-fidelity MVPs that scale into production.",
    },
    {
        id: 3,
        title: "System Thinking in B2B SaaS",
        slug: "system-thinking-b2b-saas",
        date: "August 15, 2024",
        category: "Strategy",
        excerpt:
            "Moving beyond 'user flows' to 'object-oriented UX'. How to map complex data relationships before drawing a single pixel.",
    },
];

export default function ThoughtsPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-4xl">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-mono">
                        /thoughts
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        A repository of insights on building intelligent systems.
                        <br />
                        Bridging the gap between design theory and production code.
                    </p>
                </header>

                <div className="space-y-12 mb-24">
                    {articles.map((article) => (
                        <article
                            key={article.id}
                            className="group border-b border-border pb-12 last:border-0 hover:bg-muted/50 p-6 -mx-6 rounded-xl transition-colors cursor-pointer"
                        >
                            <Link href="#" className="block">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3 font-mono">
                                    <span>{article.date}</span>
                                    <span>•</span>
                                    <span className="text-primary font-medium">{article.category}</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {article.title}
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {article.excerpt}
                                </p>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>

            <Newsletter />
        </div>
    );
}
