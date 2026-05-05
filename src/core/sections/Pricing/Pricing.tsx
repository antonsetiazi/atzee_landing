// src/core/sections/Pricing/Pricing.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { loadSectionData } from "../../engine/dataLoader";
import { Reveal } from "../../engine/animationEngine";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function Pricing({ __background }: any) {
    const [plans, setPlans] = useState<any[]>([]);

    useEffect(() => {
        async function loadData() {
            const data = await loadSectionData("pricing");
            setPlans(data);
        }

        loadData();
    }, []);

    if (!plans.length) return null;

    return (
        <section
            id="pricing"
            className={`relative py-32 overflow-hidden ${
                __background || "bg-gray-50"
            }`}
        >
            {/* Decorative background shapes */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>

            <div className="max-w-6xl mx-auto px-6">
                <h2
                    className="text-4xl md:text-5xl font-extrabold text-center mb-16"
                    style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--color-primary)",
                    }}
                >
                    Pricing
                </h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {plans.map((plan: any, index: number) => (
                        <Reveal key={index} delay={index * 0.15}>
                            <div
                                className={`p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border ${
                                    plan.popular
                                        ? "border-primary bg-primary/5"
                                        : "border-gray-200 bg-white"
                                }`}
                                style={{ borderRadius: "var(--radius)" }}
                            >
                                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                                    {plan.name}
                                </h3>

                                <p
                                    className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900"
                                    style={{
                                        fontFamily: "var(--font-heading)",
                                    }}
                                >
                                    {plan.price}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map(
                                        (f: string, i: number) => (
                                            <li
                                                key={i}
                                                className="flex items-center text-gray-600 text-sm"
                                            >
                                                <CheckIcon className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                                                {f}
                                            </li>
                                        ),
                                    )}
                                </ul>

                                <button
                                    className="w-full py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300"
                                    style={{
                                        backgroundColor: "var(--color-primary)",
                                        color: "white",
                                    }}
                                >
                                    {plan.cta || "Get Started"}
                                </button>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
