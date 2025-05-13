// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Roboto",
        weights: [400],
        styles: ["normal"],
        subsets: ["latin"],
        cssVariable: "--font-roboto",
      },
    ],
    responsiveImages: true,
  },
  site: "http://localhost/",
  integrations: [sitemap()],
});
