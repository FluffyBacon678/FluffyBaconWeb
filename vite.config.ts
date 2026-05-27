import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages project sites, set base to "/REPOSITORY_NAME/"
// For username.github.io sites (e.g. FluffyBacon678.github.io), set base to "/"
// Change "FluffyBaconWeb" below to your exact repository name.
export default defineConfig({
  plugins: [react()],
  base: '/FluffyBaconWeb/',
})
