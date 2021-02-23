module.exports = {
  webpack: (config) => {

    // Remove minifed react aliases for material-ui so production builds work
    if (config.resolve.alias) {
      delete config.resolve.alias.react;
      delete config.resolve.alias['react-dom']
    }
    config.devtool = 'eval-source-map';
    config.module.noParse = `/(mapbox-gl)\.js$/`;
    return config
  },
  exportPathMap: async function (
  ) {
    return {
      '/': { page: '/' },
    }
  },
};
