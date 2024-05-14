import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
    base: "/ecommerce/",
    plugins: [plugin()],
    server: {
        host: true
    }
})
