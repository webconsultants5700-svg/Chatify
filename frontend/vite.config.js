import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { webcrypto } from 'crypto'

// Ensure Vite can access Web Crypto API
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto
}

export default defineConfig({
  plugins: [react()],
  
  // 🚫 Disable eval-based sourcemaps (Fix CSP error)
  build: {
    sourcemap: false, 
    minify: 'esbuild',  // no eval used
    rollupOptions: {
      output: {
        inlineDynamicImports: true  // safer for strict CSP
      }
    }
  },

  // 🚫 Remove development HMR code from production
  esbuild: {
    legalComments: "none"
  }
})
