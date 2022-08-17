import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import path from 'path'


export default defineConfig({
  plugins: [vue(),eslint()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src")
    }
  },
  server: {
    proxy: {
      "/magentoGraphql": {
        target: "https://venia.magento.com/graphql",
        changeOrigin: true,
        secure: false
      },
    },
  },
})
