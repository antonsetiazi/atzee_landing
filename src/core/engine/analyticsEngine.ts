// src/core/engine/analyticsEngine.ts

export function applyAnalytics() {
    const provider = import.meta.env.VITE_ANALYTICS_PROVIDER;

    if (!provider) return;

    if (provider === "ga") {
        const id = import.meta.env.VITE_GA_ID;
        if (!id) return;

        const script1 = document.createElement("script");
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
        script1.async = true;

        const script2 = document.createElement("script");
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${id}');
    `;

        document.head.appendChild(script1);
        document.head.appendChild(script2);
    }

    if (provider === "plausible") {
        const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
        if (!domain) return;

        const script = document.createElement("script");
        script.src = "https://plausible.io/js/script.js";
        script.defer = true;
        script.setAttribute("data-domain", domain);

        document.head.appendChild(script);
    }
}
