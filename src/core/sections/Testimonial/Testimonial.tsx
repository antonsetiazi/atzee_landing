// src/core/sections/Testimonial/Testimonial.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Reveal } from "../../engine/animationEngine";

export default function Testimonial({ title, items, __background }: any) {
    if (!items?.length) return null;

    return (
        <section
            id="testimonial"
            className={`relative py-32 overflow-hidden ${
                __background || "bg-gray-50"
            }`}
        >
            {/* Decorative blurred circles */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>

            <div className="container mx-auto max-w-[var(--container-width)] px-6">
                {title && (
                    <Reveal>
                        <h2
                            className="text-4xl md:text-5xl font-extrabold text-center mb-16"
                            style={{
                                fontFamily: "var(--font-heading)",
                                color: "var(--color-primary)",
                            }}
                        >
                            {title}
                        </h2>
                    </Reveal>
                )}

                <div className="grid md:grid-cols-2 gap-12">
                    {items.map((item: any, i: number) => (
                        <Reveal key={i} delay={i * 0.15}>
                            <div
                                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                                style={{ borderRadius: "var(--radius)" }}
                            >
                                {item.avatar && (
                                    <div className="flex justify-center mb-4">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-full object-cover"
                                        />
                                    </div>
                                )}

                                <p className="mb-6 text-gray-700 italic leading-relaxed">
                                    "{item.quote}"
                                </p>

                                <div className="text-lg font-semibold text-gray-900">
                                    {item.name}
                                </div>

                                {item.company && (
                                    <div className="text-sm text-gray-500">
                                        {item.company}
                                    </div>
                                )}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
