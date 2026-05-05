// src/core/registry/section.registry.ts
/* eslint-disable @typescript-eslint/no-explicit-any */

const componentModules = import.meta.glob(
    "../../core/sections/**/!(*.meta).tsx",
    { eager: true },
);
const metadataModules = import.meta.glob("../../core/sections/**/*.meta.ts", {
    eager: true,
});
const variantModules = import.meta.glob(
    "../../core/sections/*/variants/*.tsx",
    { eager: true },
);

// build variants map
const variantMap: Record<string, Record<string, any>> = {};
for (const vPath in variantModules) {
    const match = vPath.match(/\/([^/]+)\/variants\/([^/]+)\.tsx$/);
    if (!match) continue;

    const sectionName = match[1].toLowerCase();
    const variantName = match[2].toLowerCase();

    if (!variantMap[sectionName]) variantMap[sectionName] = {};
    variantMap[sectionName][variantName] = (
        variantModules[vPath] as any
    ).default;
}

export const sectionRegistry: Record<
    string,
    { component: any; metadata: any; variants?: Record<string, any> }
> = {};

for (const path in componentModules) {
    const module: any = componentModules[path];
    const name = path.split("/").slice(-2)[0].toLowerCase(); // folder name sebagai id

    const metaPath = Object.keys(metadataModules).find(
        (p) => p.includes(name) && p.endsWith(".meta.ts"),
    );
    const metaModule = metaPath
        ? (metadataModules[metaPath] as any).metadata
        : {};

    sectionRegistry[name] = {
        component: module.default,
        metadata: metaModule,
        variants: variantMap[name],
    };
}
