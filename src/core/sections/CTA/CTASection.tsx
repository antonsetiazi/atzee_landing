// src/core/sections/CTA/CTASection.tsx

import { Reveal } from "../../engine/animationEngine";

type Action = {
    label: string;
    href: string;
};

type Props = {
    title: string;
    subtitle?: string;
    primaryAction: Action;
    secondaryAction?: Action;
};

export default function CTASection({
    title,
    subtitle,
    primaryAction,
    secondaryAction,
}: Props) {
    return (
        <section
            id="cta"
            className="relative py-32 overflow-hidden"
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
            {/* Glow effects */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

            <div
                className="relative z-10 max-w-4xl mx-auto px-6 text-center"
                style={{ maxWidth: "var(--container-width)" }}
            >
                <Reveal>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        {title}
                    </h2>
                </Reveal>

                {subtitle && (
                    <Reveal delay={0.2}>
                        <p className="mt-4 text-lg md:text-xl text-white/80">
                            {subtitle}
                        </p>
                    </Reveal>
                )}

                <Reveal delay={0.4}>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={primaryAction.href}
                            className="px-6 py-3 rounded-xl font-semibold bg-white text-black hover:opacity-90 transition"
                        >
                            {primaryAction.label}
                        </a>

                        {secondaryAction && (
                            <a
                                href={secondaryAction.href}
                                className="px-6 py-3 rounded-xl font-semibold border border-white/40 text-white hover:bg-white/10 transition"
                            >
                                {secondaryAction.label}
                            </a>
                        )}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
