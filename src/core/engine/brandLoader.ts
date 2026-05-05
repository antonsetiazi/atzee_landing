// src/core/engine/brandLoader.ts

export async function loadBrand(brand: string) {
    try {
        const brandData = await import(`../../brands/${brand}/brand.json`);
        await import(`../../brands/${brand}/theme.css`);

        return brandData.default;
    } catch (error) {
        console.warn(`Brand not found: ${brand}`);
        console.error(error);

        const fallback = await import(`../../brands/default/brand.json`);
        await import(`../../brands/default/theme.css`);

        return fallback.default;
    }
}
