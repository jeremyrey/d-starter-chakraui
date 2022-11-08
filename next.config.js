// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
      },
    ],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}