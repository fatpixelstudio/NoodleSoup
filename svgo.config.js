// svgo.config.js
module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // or disable plugins
          removeViewBox: false,
        },
      },
    },
  ],
};
