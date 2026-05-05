// src/core/sections/About/variants/split.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Reveal } from "../../../engine/animationEngine";

type Props = {
    title: string;
    subtitle?: string;
    content: string;
    imageUrl?: string;
    __background?: any;
};

export default function AboutSplit({
    title,
    subtitle,
    content,
    imageUrl,
    __background,
}: Props) {
    return (
        <section
            id="about"
            className={`relative py-32 overflow-hidden ${
                __background || "bg-gray-50"
            }`}
        >
            {/* Decorative background circles */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>

            <div
                className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
                style={{ maxWidth: "var(--container-width)" }}
            >
                {imageUrl && (
                    <Reveal>
                        <img
                            src={imageUrl}
                            alt={title}
                            className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            style={{ borderRadius: "var(--radius)" }}
                        />
                    </Reveal>
                )}

                <div className="space-y-6">
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
                            <p className="text-xl md:text-2xl text-gray-700">
                                {subtitle}
                            </p>
                        </Reveal>
                    )}

                    <Reveal delay={0.4}>
                        <p className="text-gray-600 leading-relaxed">
                            {content}
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
