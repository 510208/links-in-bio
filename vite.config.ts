import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath, URL } from "node:url";
import { imagetools } from "vite-imagetools";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    tsconfigPaths(),
    imagetools(),
    vueDevTools({
      componentInspector: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@shConfig": fileURLToPath(
        new URL("./shlinks.config.ts", import.meta.url),
      ),
    },
  },
});
