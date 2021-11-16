/** @type {import('next').NextConfig} */
const { withEffectorReactAliases } = require("effector-next/tools");

const enhance = withEffectorReactAliases();

// module.exports = enhance({
//   experimental: {
//     concurrentFeatures: true
//   },
//   // reactStrictMode: true,
//   webpack: (config) => {
//     // config.experiments = config.experiments || {};
//     // config.experiments.buildHttp = true;
//     // config.experiments.concurrentFeatures = true

//     return config;
//   },
// });
// const config = {
//   eslint: { ignoreDuringBuilds: false },
//   webpack5: true,
//   distDir: 'build',
//   optimizeFonts: true,
//   // swcMinify: true,
//   // reactStrictMode: true,
//   generateEtags: true,
//   outputFileTracing: true,
//   experimental: {
//     plugins: true,
//     // serverComponents: false,
//     concurrentFeatures: process.env.NODE_ENV === 'production',
//     reactRoot: true,
//     optimizeImages: true,
//     optimizeCss: true,

//   }
// }
// module.exports = process.env.NODE_ENV === 'production'
//   ? enhance(config)
//   : config

// const Critters = require('critters-webpack-plugin')
// const HtmlPlugin = require('html-webpack-plugin')
module.exports = enhance({
  eslint: { ignoreDuringBuilds: true },
  optimizeFonts: true,
  // swcMinify: true,
  reactStrictMode: true,
  generateEtags: true,
  outputFileTracing: true,
  experimental: {
    plugins: true,
    reactRoot: true,
    optimizeImages: true,
    optimizeCss: true,
    reactStrictMode: true,

  },
  // webpack(config, options) {
  //   const newConfig = {...config}
  //   newConfig.plugins.push(new HtmlPlugin())
  //   newConfig.plugins.push(new Critters({
  //     // external: true,
  //     preload: 'swap',
  //     // fonts: true,
  //     preloadFonts: true,
  //     // inlineThreshold: 1024,
  //   }))
  //   const cfg = typeof newConfig.webpack === "function"
  //     ? newConfig.webpack(config, options)
  //     : newConfig
  //   console.dir(cfg, { depth: 9 })
  //   return cfg
  // }
});
