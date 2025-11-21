import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime
          react: ["react", "react-dom"],
          // Split three.js ecosystem so no single chunk exceeds 500 kB
          "three-core": ["three"],
          "three-fiber": ["@react-three/fiber"],
          "three-drei": ["@react-three/drei"],
          "three-post": [
            "@react-three/postprocessing",
            "postprocessing",
          ],
          // Animation + scroll
          gsap: ["gsap", "@gsap/react"],
          // Other shared deps
          vendor: ["@emailjs/browser", "react-responsive"],
        },
      },
    },
  },
});
