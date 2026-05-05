// src/core/sections/Hero/Hero.tsx

import { Reveal } from "../../engine/animationEngine";
import CTA from "../../components/CTA";

type Props = {
    title: string;
    subtitle: string;
};

export default function Hero({ title, subtitle }: Props) {
    return (
        <section
            id="hero"
            className="relative py-36 text-center overflow-hidden"
            style={{
                background: `
                    radial-gradient(circle at 20% 20%, rgba(99,102,241,0.08), transparent 40%),
                    radial-gradient(circle at 80% 80%, rgba(30,58,138,0.08), transparent 40%),
                    var(--color-background)
                `,
            }}
        >
            {/* Decorative glow */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--color-secondary)]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>

            <div
                className="relative z-10 mx-auto px-6"
                style={{ maxWidth: "var(--container-width)" }}
            >
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
                            style={{
                                fontFamily: "var(--font-heading)",
                                color: "var(--text-primary)",
                            }}
                        >
                            {title}
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p
                            className="mt-6 text-lg md:text-xl leading-relaxed"
                            style={{
                                color: "var(--text-secondary)",
                            }}
                        >
                            {subtitle}
                        </p>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <div className="mt-10">
                            <CTA />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
