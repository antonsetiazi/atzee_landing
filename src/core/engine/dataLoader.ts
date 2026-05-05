// src/core/engine/dataLoader.ts
/* eslint-disable @typescript-eslint/no-explicit-any */

import { datasetConfig } from "../../config/dataset.config";

const datasets = import.meta.glob("../../data/*/*.json", {
    eager: true,
});

export async function loadSectionData(section: string) {
    const dataset = datasetConfig.dataset;

    const path = `../../data/${dataset}/${section}.json`;

    const module = datasets[path] as any;

    if (!module) {
        console.warn(`Dataset not found: ${dataset}/${section}.json`);
        return {};
    }

    return module.default;
}
