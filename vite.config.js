import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import federation from '@originjs/vite-plugin-federation'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'module-member',
      filename: 'remoteEntry.js',
      exposes: {
        './MemberTable': './src/components/MemberTable.vue'
      },
      shared: ['vue']
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    target: 'esnext'
  }
})
