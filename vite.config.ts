import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  // server: {
  //   host: '0.0.0.0',
  //   port: 5173,
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000',
  //       ws: true,
  //       changeOrigin: true,
  //       rewrite: (path: string) => path.replace(/^\/api/, '/')
  //     },
  //   }
  // },
  base: './'
})
