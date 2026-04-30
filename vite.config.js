import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    target: 'es2020',
    sourcemap: false,
    rollupOptions: {
      input: {
        main:     resolve(__dirname, 'index.html'),
        blog:     resolve(__dirname, 'blog.html'),
        artigo:   resolve(__dirname, 'artigo.html'),
        cardapio: resolve(__dirname, 'cardapio.html'),
        sobre:    resolve(__dirname, 'sobre.html'),
        admin:    resolve(__dirname, 'admin.html')
      }
    }
  }
});
