// src/core/sections/About/About.tsx

import { Reveal } from "../../engine/animationEngine";

type Props = {
    title: string;
    subtitle?: string;
    content: string;
};

export default function About({ title, subtitle, content }: Props) {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <Reveal>
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                </Reveal>
                {subtitle && (
                    <Reveal delay={0.2}>
                        <p className="text-xl mb-6 text-gray-700">{subtitle}</p>
                    </Reveal>
                )}
                <Reveal delay={0.4}>
                    <p className="text-gray-600">{content}</p>
                </Reveal>
            </div>
        </section>
    );
}
