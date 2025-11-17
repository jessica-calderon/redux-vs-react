import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Only use base path for production builds (GitHub Pages)
  // In development, use '/' for easier local development
  base: mode === 'production' ? '/redux-vs-react/' : '/',
}))
