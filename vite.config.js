import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://nedtelustraining.github.io/gh-actions-training-1/',
  plugins: [react()]
})
