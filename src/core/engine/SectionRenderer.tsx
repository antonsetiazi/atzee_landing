// src/core/engine/SectionRenderer.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { Suspense } from "react";
import { sectionRegistry } from "../registry/section.registry";
import { loadSectionData } from "./dataLoader";
import { loadPageStructure } from "./pageLoader";

export default function SectionRenderer() {
    const [sections, setSections] = useState<any[]>([]);

    useEffect(() => {
        async function loadSections() {
            const pageStructure = await loadPageStructure();

            const loaded: any[] = [];

            for (const s of pageStructure) {
                const { type, variant, background } =
                    typeof s === "string" ? { type: s } : s;
                const entry = sectionRegistry[type];

                if (!entry) {
                    console.warn(`Section not found: ${type}`);
                    continue;
                }

                const data = await loadSectionData(type);

                loaded.push({
                    component:
                        variant && entry.variants?.[variant]
                            ? entry.variants[variant]
                            : entry.component,
                    data: {
                        ...entry.metadata?.defaultProps,
                        ...data,
                        __background: background,
                    },
                });
            }

            setSections(loaded);
        }

        loadSections();
    }, []);

    return (
        <>
            {sections.map((section, i) => {
                const Component = section.component;
                return (
                    <Suspense key={i} fallback={<div>Loading...</div>}>
                        <Component key={i} {...section.data} />
                    </Suspense>
                );
            })}
        </>
    );
}
