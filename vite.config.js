import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: 'app',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsInlineLimit: 2048,
    rollupOptions: {
      output: {
        // Keep the motion runtime out of the critical path so the first paint
        // only waits on React + the page shell.
        manualChunks: { motion: ['motion/react'] },
      },
    },
  },
  server: { port: 5173, host: true },
});
