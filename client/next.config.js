/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.deso.org']
  }
}

const removeImports = require('next-remove-imports')({
  nextConfig
})



module.exports = removeImports()
