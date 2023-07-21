import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import path from "node:path"

export default defineConfig({
  plugins: [solid()],
  build: {
    outDir: "build-ui",
    emptyOutDir: true,
  },
  base: "./",
  server: {
    open: false,
    port: 3030,
    cors: {
      origin: "*",
      methods: "*",
    },
  },
  mode: "production",
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "./src/"),
    },
  }
})
