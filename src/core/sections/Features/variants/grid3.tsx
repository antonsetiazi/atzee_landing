// src/core/sections/Features/variants/grid3.tsx

import { Reveal } from "../../../engine/animationEngine";

type Feature = {
    title: string;
    description: string;
    icon?: React.ReactNode;
};

type Props = {
    items: Feature[];
    __background?: string;
};

export default function FeaturesGrid3({ items, __background }: Props) {
    return (
        <section
            id="features"
            className={`relative py-32 overflow-hidden ${
                __background || "bg-gray-50"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
                {items.map((item, i) => (
                    <Reveal key={i} delay={i * 0.15}>
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            {item.icon && (
                                <div className="text-primary text-4xl mb-4">
                                    {item.icon}
                                </div>
                            )}
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
            {/* Decorative blurred circles */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        </section>
    );
}
