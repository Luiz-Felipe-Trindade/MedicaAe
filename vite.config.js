import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    logLevel: "silent", // Isso vai silenciar todos os logs de avisos do esbuild, incluindo os do react-input-mask
  },
});
