module.exports = {
  use: 'vue',

  webpack: function (provide, config) {
    var HtmlWebpackPlugin = provide.HtmlWebpackPlugin;

    config.nodeServer = true;
    config.port = 8101;
    config.entry = { app: 'example/entry.js' };
    config.output.path = __dirname + '/example/build';

    config.module.loaders.push({
      test: /\.md$/,
      loader: 'vue-html!highlight!markdown'
    });

    config.plugins = (config.plugins || []).concat([
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'example/index.html',
        inject: true
      })
    ]);

    return config;
  }
};
