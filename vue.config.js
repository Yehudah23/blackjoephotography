const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080
  },
  // Suppress warnings in the browser console
  lintOnSave: 'warning',
  // Optimize production build
  productionSourceMap: false
})