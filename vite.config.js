import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Had l-base hiya li kat-solu l-mouchkil d path 404
})
