/** @type {import('next').NextConfig} */
// const { withEffectorReactAliases } = require("effector-next/tools");

// const enhance = withEffectorReactAliases();

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
module.exports = {
  eslint: { ignoreDuringBuilds: true },
  webpack5: true,
  optimizeFonts: true,
  swcMinify: true,
  reactStrictMode: true,
  generateEtags: true,
  outputFileTracing: true,
  experimental: {
    // plugins: true,
    // serverComponents: true,
    // concurrentFeatures: true,
    reactRoot: true,
    optimizeImages: true,
    optimizeCss: true,

  }
}