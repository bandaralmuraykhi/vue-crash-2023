import { defineConfig } from '@vue/cli-service'
export default defineConfig({
  transpileDependencies: true
})

export const devServer = {
  proxy: {
    '^/api': {
      target: 'http://localhost:5050',
      changeOrigin: true,
      logLevel: 'debug',
      pathRewrite: { '^/api': '/' },
    },
  },
}