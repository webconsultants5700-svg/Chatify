import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { webcrypto } from 'crypto'

// ✅ Ensure Vite can access the Web Crypto API properly
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
