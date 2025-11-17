import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // Use base path for production builds (GitHub Pages)
  // In development, use '/' for easier local development
  // command is 'build' for production builds, 'serve' for dev server
  const base = command === 'build' ? '/redux-vs-react/' : '/'
  
  return {
    plugins: [react()],
    base,
  }
})
