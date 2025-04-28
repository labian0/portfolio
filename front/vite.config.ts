import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // or specify a specific host
    strictPort: true,
    // For serveo.net forwarding
    hmr: {
      host: 'dd44eb339a935545105998c9f0778355.serveo.net',
      port: 443
    }
  }
})