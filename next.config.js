/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
      /** IT SHOUD be of WIndows Ip address Currently it is for testing only */
        DOMAIN_URL: 'https://trustqr-backend.centralindia.cloudapp.azure.com',
  
      },
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
}

module.exports = nextConfig
