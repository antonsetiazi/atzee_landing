// src/core/layout/Footer.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { loadSectionData } from "../engine/dataLoader";
import CTA from "../components/CTA";

export default function Footer() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        async function loadData() {
            const footer = await loadSectionData("footer");
            setData(footer);
        }
        loadData();
    }, []);

    if (!data) return null;

    return (
        <footer className="bg-gradient-to-tr from-gray-50 via-gray-100 to-gray-50 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Columns */}
                <div className="grid md:grid-cols-3 gap-12">
                    {data.columns?.map((col: any, i: number) => (
                        <div key={i}>
                            <h4 className="font-bold text-lg text-gray-800 mb-5">
                                {col.title}
                            </h4>
                            <ul className="space-y-3">
                                {col.links.map((link: any, j: number) => (
                                    <li key={j}>
                                        <a
                                            href={link.href}
                                            className="text-gray-600 text-sm hover:text-primary transition-colors duration-200"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social Links */}
                {data.social && (
                    <div className="mt-12 flex flex-wrap gap-6 items-center">
                        {data.social.map((s: any, i: number) => (
                            <a
                                key={i}
                                href={s.href}
                                className="text-gray-600 hover:text-primary text-sm transition-colors duration-200"
                            >
                                {s.label}
                            </a>
                        ))}
                    </div>
                )}

                {/* CTA */}
                {data.ctaEnabled && (
                    <div className="mt-12">
                        <CTA />
                    </div>
                )}

                {/* Copyright */}
                {data.copyright && (
                    <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
                        {data.copyright}
                    </div>
                )}
            </div>
        </footer>
    );
}
