import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Prevent empty chunks by excluding specific modules or adjusting the logic
          if (id.includes('node_modules')) {
            return id.split('/').pop().split('.')[0]; // Use last part as chunk name
          }
        },
        // Remove empty chunks if they are generated
        chunkFileNames: '[name]-[hash].js',
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
