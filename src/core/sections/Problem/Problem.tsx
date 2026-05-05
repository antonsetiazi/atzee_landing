// src/core/sections/Problem/Problem.tsx

import { Reveal } from "../../engine/animationEngine";

type Item = {
    title: string;
    description: string;
};

type Props = {
    title: string;
    subtitle?: string;
    items: Item[];
    __background?: string;
};

export default function Problem({
    title,
    subtitle,
    items,
    __background,
}: Props) {
    return (
        <section
            id="problem"
            className={`relative py-32 overflow-hidden ${
                __background || "bg-gray-50"
            } `}
        >
            <div
                className="mx-auto px-6"
                style={{ maxWidth: "var(--container-width)" }}
            >
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Reveal>
                        <h2
                            className="text-4xl md:text-5xl font-extrabold"
                            style={{
                                fontFamily: "var(--font-heading)",
                                color: "var(--color-primary)",
                            }}
                        >
                            {title}
                        </h2>
                    </Reveal>

                    {subtitle && (
                        <Reveal delay={0.2}>
                            <p
                                className="mt-4 text-lg"
                                style={{
                                    color: "var(--text-secondary)",
                                }}
                            >
                                {subtitle}
                            </p>
                        </Reveal>
                    )}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {items.map((item, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div
                                className="p-6 rounded-2xl transition-all duration-300 hover:shadow-lg"
                                style={{
                                    background: "var(--color-background)",
                                    border: "1px solid var(--color-border)",
                                    borderRadius: "var(--radius)",
                                }}
                            >
                                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
