const path = require('path');
var webpack = require('webpack')

module.exports = {
  entry: {
    jg: './src/jg.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './release/')
  }
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_debugger: true,
        drop_console: true,
        unused: false,
        side_effects: false,
      }
    }),
    new webpack.DefinePlugin({
      'dcDomain': '"dc"',
      'dctest': ''
    })
  ])
} else if (process.env.NODE_ENV === 'beta') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_debugger: true,
        drop_console: true,
        unused: false,
        side_effects: false,
      }
    }),
    new webpack.DefinePlugin({
      'dcDomain': '"dcbeta"',
      'dctest': '"zmkm=1&test=1&"'
    })
  ])

  module.exports.output.path = path.resolve(__dirname, './beta/')
} else {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'dcDomain': '"dcbeta"',
      'dctest': '"zmkm=1&test=1&"'
    })
  ])
  module.exports.output.path = path.resolve(__dirname, './dev/')
}
