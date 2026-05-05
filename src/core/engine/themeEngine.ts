// src/core/engine/themeEngine.ts

import { datasetConfig } from "../../config/dataset.config";

export async function applyTheme() {
    const root = document.documentElement;

    try {
        const module = await import(
            `../../data/${datasetConfig.dataset}/site.json`
        );

        const theme = module.default?.theme;

        if (!theme) return;

        const { colors, font, radius, container } = theme;

        if (colors?.primary)
            root.style.setProperty("--color-primary", colors.primary);

        if (colors?.secondary)
            root.style.setProperty("--color-secondary", colors.secondary);

        if (font?.body) root.style.setProperty("--font-body", font.body);

        if (font?.heading)
            root.style.setProperty("--font-heading", font.heading);

        if (font?.logo) root.style.setProperty("--font-logo", font.logo);

        if (radius) root.style.setProperty("--radius", radius);

        if (container) root.style.setProperty("--container-width", container);
    } catch (err) {
        console.warn(
            "Theme not found for dataset:",
            datasetConfig.dataset,
            err,
        );
    }
}
