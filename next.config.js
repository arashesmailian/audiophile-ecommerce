/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'style')],
    prependData: '@import "style/variables.scss";',
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
