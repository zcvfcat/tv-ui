const dotenv = require('dotenv')
const { parsed } = dotenv.config({ path: process.env.PATH_ENV })

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: parsed,
}

module.exports = nextConfig
