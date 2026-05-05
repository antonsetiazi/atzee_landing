// src/App.tsx

import { useEffect } from "react";

import SectionRenderer from "./core/engine/SectionRenderer";

import Header from "./core/layout/Header";
import Footer from "./core/layout/Footer";
import { applySEO } from "./core/engine/seoEngine";
import { applyAnalytics } from "./core/engine/analyticsEngine";
import { applyTheme } from "./core/engine/themeEngine";

export default function App() {
    useEffect(() => {
        applyTheme();
        applySEO();
        applyAnalytics();
    }, []);

    return (
        <>
            <Header />
            <SectionRenderer />
            <Footer />
        </>
    );
}
