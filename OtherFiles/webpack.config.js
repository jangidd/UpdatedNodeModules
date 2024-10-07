const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './static/frontend'),
    filename: '[name].js',
  },
  resolve: {
    fallback: {
      url: require.resolve('url'),
      assert: require.resolve('assert'),
      crypto: require.resolve('crypto-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify'),
      zlib: require.resolve('browserify-zlib'),
      process: require.resolve('process/browser'),
      'abs-svg-path': require.resolve('abs-svg-path'),
      'parse-svg-path': require.resolve('parse-svg-path'),
      'normalize-svg-path': require.resolve('normalize-svg-path'),
      'color-string': require.resolve('color-string'),
      'hsl-to-hex': require.resolve('hsl-to-hex'),
      'media-engine': require.resolve('media-engine'),
      'hyphen': require.resolve('hyphen'),
      'restructure': require.resolve('restructure'),
      'dfa': require.resolve('dfa'),
      'clone': require.resolve('clone'),
      'brotli': require.resolve('brotli'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$|.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      process: { env: {} },
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser', // Ensure this is correct
    }),
  ],
};
