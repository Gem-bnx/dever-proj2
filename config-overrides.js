const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@style': 'src/assets/styles/scss',
    // '@features': 'src/features',
    // '@pages': 'src/pages',
    // '@shared': 'src/shared'
  })(config);

  return config;
};