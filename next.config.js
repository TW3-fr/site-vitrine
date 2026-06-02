/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  outputFileTracingRoot: path.join(__dirname, '../../'),
  reactStrictMode: true,
  output: 'export',
  basePath: '/site-vitrine',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
