// vite.config.js
const defineConfig = ({
  css: {
    devSourcemap: true,
  },
  optimizeDeps: {
    include: ["gsap/ScrollTrigger"]
  }
});
export default defineConfig;