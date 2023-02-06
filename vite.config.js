import { resolve } from "path";
import { defineConfig } from "vite";
import { chromeExtension } from "vite-plugin-chrome-extension";

export default defineConfig({
  plugins: [chromeExtension()],

  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },

  build: {
    rollupOptions: {
      // input: {
      //   manifest: "src/manifest.json",
      //   main: "src/main.js",
      // }
      input: "src/manifest.json",
    }
  }
});
