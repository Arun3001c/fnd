import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // Accept all incoming connections
    port: 5173,       // Optional: can specify custom port
  }
})
