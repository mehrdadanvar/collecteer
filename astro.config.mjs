import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import cityLights from "./city-lights.json";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), mdx()],
  markdown: {
    // syntaxHighlight: "shiki",

    shikiConfig: {
      theme: {
        name: "city-lights",
        type: "dark",
        settings: cityLights.tokenColors,
      },
    },
    // Add custom languages
    // Note: Shiki has countless langs built-in, including .astro!
    // https://github.com/shikijs/shiki/blob/main/docs/languages.md
    // langs: ["js", "python"],
    // // Enable word wrap to prevent horizontal scrolling
    // wrap: true,
  },
});
