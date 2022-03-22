/** @type {import('next').NextConfig} */
const withPreact = require('next-plugin-preact');
// const WebpackModules = require('webpack-modules');

// const withCSS = require('@zeit/next-css');

module.exports = //withCSS(
  withPreact({
        eslint: { ignoreDuringBuilds: true },
        optimizeFonts: true,
        swcMinify: true,
        // // reactStrictMode: true,
        generateEtags: true,
        outputFileTracing: true,
        experimental: {
        //   plugins: true,
        // reactRoot: true,
        //   optimizeImages: true,
          optimizeCss: true,
        //   // reactStrictMode: true,

        },
        // webpack(config, options) {
        //   const newConfig = {...config}
        //   newConfig.plugins.push(new WebpackModules())
        //   // newConfig.plugins.push(new Critters({
        //   //   // external: true,
        //   //   preload: 'swap',
        //   //   // fonts: true,
        //   //   preloadFonts: true,
        //   //   // inlineThreshold: 1024,
        //   // }))
        //   const cfg = typeof newConfig.webpack === "function"
        //     ? newConfig.webpack(config, options)
        //     : newConfig
        //   return cfg
        // }
})
// );
