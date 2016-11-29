var path = require('path');
var webpack = require('webpack');
var findCacheDir = require('find-cache-dir');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
var paths = require('./paths');
var getClientEnvironment = require('./env');
var WebpackConfig = require('./webpack.common');

var publicPath = '/';
var publicUrl = '';
var env = getClientEnvironment(publicUrl);

WebpackConfig.devtool = 'eval';
WebpackConfig.entry.unshift(require.resolve('react-dev-utils/webpackHotDevClient'));

WebpackConfig.output.filename = 'static/js/[name].[hash:8].js';
WebpackConfig.output.pathinfo = true;
WebpackConfig.output.publicPath = publicPath;

WebpackConfig.module.rules.push(
  {
    test: /\.(ts|tsx)$/,
    include: paths.appSrc,
    loader: 'awesome-typescript-loader',
    options: {
      configFileName: paths.appTsconfig,
      forkChecker: true,
      useBabel: true,
      useCache: true,
      cacheDirectory: findCacheDir({
        name: 'react-scripts'
      })
    }
  },
  {
    test: /\.css$/,
    use: [
      {loader: 'style-loader'},
      {
        loader: 'css-loader',
        query: {
          importLoaders: 1,
          minimize: true
        }
      }
    ]
  },
  {
    test: /\.scss/,
    use: [
      {loader: 'style-loader'},
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          camelCase: true,
          localIdentName: '[name]__[local]'
        }
      },
      {
        loader: 'sass-loader',
        options: {
          outputStyle: 'compressed',
          sourcemap: true
        }
      }
    ]
  }
);
WebpackConfig.plugins.push(
  new InterpolateHtmlPlugin({
    PUBLIC_URL: publicUrl
  }),
  new webpack.DefinePlugin(env),
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.appHtml,
  }),
  new webpack.HotModuleReplacementPlugin(),
  new CaseSensitivePathsPlugin(),
  new WatchMissingNodeModulesPlugin(paths.appNodeModules)
);

module.exports = WebpackConfig;
