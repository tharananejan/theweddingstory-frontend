import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  
  return {
    plugins: [react()],
    // Only use the repo name as base when building for production
    base: isProduction ? '/theweddingstory-frontend/' : '/',
  }
})
