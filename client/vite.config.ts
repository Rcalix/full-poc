import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';


dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      GITHUB_USER: JSON.stringify(process.env.GITHUB_USER),
      GITHUB_REPO: JSON.stringify(process.env.GITHUB_REPO),

    },
  },
})
