const { defineConfig } = require('@vue/cli-service')

// Get backend port from environment variable, fallback to 8001
const backendPort = process.env.VUE_APP_BACKEND_PORT || '8001'
const backendUrl = process.env.VUE_APP_API_URL || `http://127.0.0.1:${backendPort}`

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: backendUrl,
        changeOrigin: true,
        secure: false,
        logLevel: 'debug'
      },
      '/sanctum': {
        target: backendUrl,
        changeOrigin: true,
        secure: false,
        logLevel: 'debug'
      }
    }
  },
  // Suppress warnings in the browser console
  lintOnSave: 'warning',
  // Optimize production build
  productionSourceMap: false
})