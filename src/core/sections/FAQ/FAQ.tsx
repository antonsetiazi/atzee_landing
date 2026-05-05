// src/core/sections/FAQ/FAQ.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { loadSectionData } from "../../engine/dataLoader";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Reveal } from "../../engine/animationEngine";

type Props = {
    __background?: string;
};

export default function FAQ({ __background }: Props) {
    const [faq, setFaq] = useState<any[]>([]);
    const [open, setOpen] = useState<number | null>(null);

    useEffect(() => {
        async function loadData() {
            const data = await loadSectionData("faq");
            setFaq(data);
        }
        loadData();
    }, []);

    if (!faq.length) return null;

    return (
        <section
            id="faq"
            className={`relative py-32 overflow-hidden ${
                __background || "bg-gray-50"
            }`}
        >
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <Reveal>
                        <h2
                            className="text-4xl md:text-5xl font-extrabold"
                            style={{
                                fontFamily: "var(--font-heading)",
                                color: "var(--color-primary)",
                            }}
                        >
                            Frequently Asked Questions
                        </h2>
                    </Reveal>
                </div>

                <div className="space-y-4">
                    {faq.map((item: any, index: number) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                        >
                            <button
                                className="w-full flex justify-between items-center p-5 text-lg font-semibold text-gray-800"
                                onClick={() =>
                                    setOpen(open === index ? null : index)
                                }
                            >
                                {item.question}
                                <motion.span
                                    animate={{
                                        rotate: open === index ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDownIcon className="w-5 h-5 text-gray-600" />
                                </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                                {open === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-5 pb-5 text-gray-600 text-sm"
                                    >
                                        {item.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
