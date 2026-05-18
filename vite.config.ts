import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  ...(mode === 'embed' && {
    build: {
      outDir: 'dist-embed',
      lib: {
        entry: 'src/embed.tsx',
        name: 'RitzWidget',
        fileName: 'ritz-widget',
        formats: ['iife'],
      },
      rollupOptions: {
        external: [],
      },
    },
  }),
}))
