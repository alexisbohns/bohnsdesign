// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-plugin-pug',
      options: {
        pug: { /* Options for `pug-plain-loader` */ },
        pugLoader: { /* Options for `pug-loader` */ }
      }
    }
  ]
};
