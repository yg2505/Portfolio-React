import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: (id) => {
        // Exclude node built-ins and possibly unsupported modules
        return ['fs', 'path', 'os'].includes(id);
      }
    }
  }
});
