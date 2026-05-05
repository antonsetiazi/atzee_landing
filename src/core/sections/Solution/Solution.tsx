// src/core/sections/Solution/Solution.tsx

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

export default function Solution({
    title,
    subtitle,
    items,
    __background,
}: Props) {
    return (
        <section
            id="solution"
            className={`relative py-32 overflow-hidden ${
                __background || "bg-gray-50"
            }`}
        >
            <div
                className="max-w-6xl mx-auto px-6"
                style={{ maxWidth: "var(--container-width)" }}
            >
                {/* Header */}
                <div className="text-center mb-16">
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
                            <p className="mt-4 text-xl text-gray-600">
                                {subtitle}
                            </p>
                        </Reveal>
                    )}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="p-6 rounded-2xl border bg-white hover:shadow-lg transition-all duration-300">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
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
