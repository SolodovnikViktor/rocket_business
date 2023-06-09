/* eslint-disable quotes */
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/variables.scss";`,
      },
    },
  },
  publicPath: '/rocket_business_test/',
});
