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

const Critters = require('critters-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
module.exports = enhance({
  mode: 'production',
  eslint: { ignoreDuringBuilds: true },
  optimizeFonts: false,
  // swcMinify: true,
  reactStrictMode: true,
  generateEtags: true,
  outputFileTracing: true,
  experimental: {
    plugins: true,
    // serverComponents: true,
    // concurrentFeatures: true,
    // concurrentFeatures: process.env.NODE_ENV === 'production',
    reactRoot: true,
    optimizeImages: false,
    optimizeCss: false,

  },
  webpack(config, options) {
    console.log(config)
    console.log(options)
    config.plugins.push(new HtmlPlugin())
    config.plugins.push(new Critters({
      // external: true,
      preload: 'swap',
      fonts: true,
      // inlineThreshold: 1024,
    }))
    if (typeof config.webpack === "function") {
      return config.webpack(config, options);
    }
    return config
  }
});
