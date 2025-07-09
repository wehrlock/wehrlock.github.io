// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "/",
  output: "static",
  site: "https://wehrle.net/",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()]
  }
});