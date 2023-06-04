
module.exports = {
  entry: {
    index: './sample/index.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/sample/dist/js',
  },
  experiments: {
    topLevelAwait: true,
  }
};