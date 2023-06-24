import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ script: { propsDestructure: true } }),
    svgLoader({ defaultImport: "component" }),
  ],

  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/app/styles/auxi/media.scss";',
      },
    },
  },
});
