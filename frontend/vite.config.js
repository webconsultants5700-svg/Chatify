import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { webcrypto } from 'crypto'

// Ensure Vite can access Web Crypto API
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto
}

export default defineConfig({
  plugins: [react()],

  // ✅ Use relative paths for static hosting
  base: './',

  build: {
    // 🚫 Disable eval-based sourcemaps (Fix CSP error)
    sourcemap: false,
    minify: 'esbuild', // no eval
    rollupOptions: {
      output: {
        inlineDynamicImports: true // safer for strict CSP
      }
    }
  },

  esbuild: {
    // 🚫 Remove comments from build
    legalComments: 'none'
  },

  // Optional: for React Router static hosting
  resolve: {
    alias: {
      // make sure crypto alias works for Web Crypto
      crypto: 'crypto-browserify'
    }
  }
})
