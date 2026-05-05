// src/core/sections/Hero/variants/center.tsx

import { Reveal } from "../../../engine/animationEngine";

type Props = {
    title: string;
    subtitle: string;
    cta: string;
};

export default function HeroCenter({ title, subtitle, cta }: Props) {
    return (
        <section
            id="hero"
            className="relative py-36 text-center overflow-hidden"
            style={{
                background: `
                    linear-gradient(
                        135deg,
                        var(--color-primary),
                        var(--color-secondary)
                    )
                `,
            }}
        >
            {/* Subtle glow only (no aggressive colors) */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[var(--color-secondary)]/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <Reveal>
                    <h1
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white"
                        style={{
                            fontFamily: "var(--font-heading)",
                        }}
                    >
                        {title}
                    </h1>
                </Reveal>

                <Reveal delay={0.2}>
                    <p className="mt-6 text-lg md:text-xl leading-relaxed text-white">
                        {subtitle}
                    </p>
                </Reveal>

                <Reveal delay={0.4}>
                    <div className="mt-10">
                        <button
                            className="px-5 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300"
                            style={{
                                backgroundColor: "var(--color-primary)",
                                color: "white",
                            }}
                        >
                            {cta}
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
