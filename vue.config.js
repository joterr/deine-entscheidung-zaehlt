const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      patterns: [
        path.resolve(__dirname, 'node_modules/normalize.css/normalize.css'),
        path.resolve(__dirname, 'src/global.scss')
      ],
      preProcessor: 'scss'
    }
  }
}
