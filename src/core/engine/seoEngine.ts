// src/core/engine/seoEngine.ts

import { datasetConfig } from "../../config/dataset.config";

export async function applySEO() {
    const dataset = datasetConfig.dataset;

    try {
        const module = await import(`../../data/${dataset}/site.json`);
        const config = module.default;

        const seo = config.seo;
        const favicon = config.favicon;
        if (!seo) return;

        document.title = seo.title;

        const setMeta = (name: string, content: string) => {
            let tag = document.querySelector(`meta[name="${name}"]`);

            if (!tag) {
                tag = document.createElement("meta");
                tag.setAttribute("name", name);
                document.head.appendChild(tag);
            }

            tag.setAttribute("content", content);
        };

        const setOG = (property: string, content: string) => {
            let tag = document.querySelector(`meta[property="${property}"]`);

            if (!tag) {
                tag = document.createElement("meta");
                tag.setAttribute("property", property);
                document.head.appendChild(tag);
            }

            tag.setAttribute("content", content);
        };

        // =========================
        // BASIC SEO
        // =========================
        setMeta("description", seo.description);

        // =========================
        // OPEN GRAPH (Facebook, WhatsApp)
        // =========================
        setOG("og:title", seo.title);
        setOG("og:description", seo.description);
        setOG("og:image", seo.image);

        // =========================
        // TWITTER
        // =========================
        setMeta("twitter:card", "summary_large_image");
        setMeta("twitter:title", seo.title);
        setMeta("twitter:description", seo.description);
        setMeta("twitter:image", seo.image);

        // =========================
        // 🔥 FAVICON (NEW)
        // =========================
        if (favicon) {
            let link =
                document.querySelector<HTMLLinkElement>("link[rel='icon']");

            if (!link) {
                link = document.createElement("link");
                link.rel = "icon";
                document.head.appendChild(link);
            }

            link.href = favicon;
        }
    } catch (error) {
        console.warn(`SEO config not found for dataset: ${dataset}`);
        console.error(error);
    }
}
