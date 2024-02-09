import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/landing-page-freedom-gateway/",
  plugins: [react()],
})
