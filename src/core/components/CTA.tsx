// src/core/components/CTA.tsx

import { useEffect, useState } from "react";
import { loadSectionData } from "../engine/dataLoader";

type CTAData = {
    text: string;
    link: string;
    variant?: "primary" | "secondary";
};

export default function CTA() {
    const [cta, setCTA] = useState<CTAData | null>(null);

    useEffect(() => {
        async function loadData() {
            const data = await loadSectionData("cta");
            setCTA(data);
        }

        loadData();
    }, []);

    if (!cta) return null;

    const styles = {
        primary: "bg-primary text-white",
        secondary: "border border-primary text-primary",
    };

    const variant = cta.variant || "primary";

    return (
        <a
            href={cta.link}
            className={`inline-block px-6 py-3 rounded-lg font-medium ${styles[variant]}`}
        >
            {cta.text}
        </a>
    );
}
