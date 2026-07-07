import { defineConfig } from "astro/config";

// Every canonical / og:url / sitemap URL derives from this.
export default defineConfig({
  site: "https://measurekit.irvintorres.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
