/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
      /** IT SHOUD be of WIndows Ip address Currently it is for testing only */
        DOMAIN_URL: 'http://localhost:8000',
  
      }
}

module.exports = nextConfig
