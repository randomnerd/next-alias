/** @type {import('next').NextConfig} */

module.exports = {
        eslint: { ignoreDuringBuilds: true },
        // optimizeFonts: true,
        // swcMinify: true,
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
};
