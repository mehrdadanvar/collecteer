/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // body: ["Source Sans Pro"],
        // logo: ["Quicksand"],
        // FiraMono: ["fira mono"],
        display: ["Russo One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
