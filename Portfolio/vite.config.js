import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // lets Docker Container port mapping work
    strictPort: true,
    port: 5173, // default Vite port
  }
})
