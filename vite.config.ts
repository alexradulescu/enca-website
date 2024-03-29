import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import linaria from '@linaria/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    linaria({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react']
      }
    }),
    tsconfigPaths()
  ]
})
