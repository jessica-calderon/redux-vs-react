import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  // Use base path for production builds (GitHub Pages)
  // In development, use '/' for easier local development
  const base = process.env.NODE_ENV === 'production' ? '/redux-vs-react/' : '/'
  
  return {
    plugins: [react()],
    base,
  }
})
