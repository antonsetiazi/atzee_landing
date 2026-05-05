// src/core/layout/Header.tsx

import { useState, useEffect } from "react";
import { loadSectionData } from "../engine/dataLoader";

type SiteConfig = {
    brand: string;
    logo: string;
    menu: { label: string; target: string }[];
};

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [config, setConfig] = useState<SiteConfig | null>(null);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        async function loadConfig() {
            const data = await loadSectionData("site"); // 🔥 reuse engine
            setConfig(data);
        }
        loadConfig();
    }, []);

    if (!config) return null;

    return (
        <header
            className={`w-full sticky top-0 z-50 transition-all duration-300 ${
                scrolled ? "backdrop-blur-md bg-white/80 shadow-md" : "bg-white"
            }`}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                {/* 🔥 BRAND + LOGO */}
                <div className="flex items-center gap-3">
                    {config.logo && (
                        <img
                            src={config.logo}
                            alt={config.brand}
                            className="h-9 w-auto object-contain"
                            style={{
                                filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))",
                            }}
                        />
                    )}

                    <div
                        className="font-semibold text-lg tracking-wide"
                        style={{
                            background:
                                "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        {config.brand}
                    </div>
                </div>

                {/* Navigation Desktop */}
                <nav className="hidden md:flex gap-8">
                    {config.menu.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(item.target)}
                            className="relative text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                        >
                            {item.label}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    ))}
                </nav>

                {/* 🔥 Mobile Hamburger */}
                <button
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div className="space-y-1">
                        <span className="block w-5 h-[2px] bg-gray-700"></span>
                        <span className="block w-5 h-[2px] bg-gray-700"></span>
                        <span className="block w-5 h-[2px] bg-gray-700"></span>
                    </div>
                </button>
            </div>

            {/* 🔥 Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-6 pb-4">
                    <div className="flex flex-col gap-4 mt-4">
                        {config.menu.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    scrollTo(item.target);
                                    setMenuOpen(false);
                                }}
                                className="text-left text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
