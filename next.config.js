/** @type {import('next').NextConfig} */
const { withEffectorReactAliases } = require("effector-next/tools");

const enhance = withEffectorReactAliases();

module.exports = enhance({
  // reactStrictMode: true,
  webpack: (config) => {
    // config.experiments = config.experiments || {};
    // config.experiments.buildHttp = true;

    return config;
  },
});
