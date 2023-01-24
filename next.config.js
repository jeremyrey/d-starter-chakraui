// next.config.js
module.exports = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
