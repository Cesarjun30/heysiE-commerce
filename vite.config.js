
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'public/index.html',
        tienda: 'public/tienda.html',
        partyservice: 'public/party-service.html',
        blog: 'public/blog.html',
        contacto: 'public/contacto.html',
        nosotros: 'public/nosotros.html'
      }
    }
  }
});





