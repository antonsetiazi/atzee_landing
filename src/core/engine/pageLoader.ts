// src/core/engine/pageLoader.ts

import { datasetConfig } from "../../config/dataset.config";

export async function loadPageStructure() {
    const dataset = datasetConfig.dataset;

    try {
        const module = await import(`../../data/${dataset}/page.json`);
        return module.default;
    } catch (error) {
        console.warn(`page.json not found for dataset: ${dataset}`);
        console.error(error);
        return [];
    }
}
