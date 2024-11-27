const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const appDirectory = path.resolve(__dirname);
const {presets} = require(`${appDirectory}/babel.config.js`);

const compileNodeModules = [
  // Add every react-native package that needs compiling
  // 'react-native-gesture-handler',
].map((moduleName) => path.resolve(appDirectory, `node_modules/${moduleName}`));

const devServer = {
  compress: false,
  liveReload: false,
  host: 'localhost',
  port: 3000,
  allowedHosts: "all",

  static: {
    directory: path.join(__dirname, 'public'),
  },
  historyApiFallback: true,
  https: false,
  // open: true,
  hot: true,
  proxy: {
    '/api': 'http://localhost:9000',
  },
  watchFiles: [path.join(__dirname, 'node_module/@voltmoney/*')],
  devMiddleware: {
    writeToDisk: true,
  },
};

const babelLoaderConfiguration = {
  test: /\.js$|tsx?$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(__dirname, 'index.web.js'), // Entry to your application
    path.resolve(__dirname, 'App.web.tsx'), // Change this to your main App file
    path.resolve(__dirname, 'src'),
    ...compileNodeModules,
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets,
      plugins: ['react-native-web'],
    },
  },
};

const svgLoaderConfiguration = {
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
    },
  ],
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

module.exports = {
  entry:['webpack/hot/dev-server', path.join(__dirname, 'index.web.js')],
  output: {
    clean: true,
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js'],
    alias: Object.assign({
      'react-native$': 'react-native-web',
      'react-native-svg': 'react-native-svg-web',
      'lottie-react-native': 'react-native-web-lottie',
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
      'react-native-fast-image': 'react-native-web-fast-image',
      '@react-native-clipboard/clipboard': 'react-native-web-clipboard',
      '@react-native-google-signin/google-signin': 'react-google-login',
      'react-navigation': path.resolve(__dirname, './react-navigation.web.js'),
      'react-native-web/dist/exports/DeviceInfo': path.resolve(
        './react-native-web-device-info.web.js',
      ),
      'react-native-webview': 'react-native-web-webview',
      './Image.base.native':'./Image.base.web',
      '@sentry/react-native': '@sentry/react',
      "react-native-code-push": "./codepush.web.ts",
    }),
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js|mjs)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'],
      },
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      svgLoaderConfiguration,
      {
        // Many react-native libraries do not compile their ES6 JS.
        test: /\.(tsx|ts|jsx|js|mjs)$/,
        include: /node_modules\/react-native-/,
        exclude: /node_modules\/react-native-web\//,
        loader: 'babel-loader',
      },
      {
        // Many react-native libraries do not compile their ES6 JS.
        test: /\.(tsx|ts|jsx|js|mjs)$/,
        include: /node_modules\/@react-native-/,
        exclude: /node_modules\/react-native-web\//,
        loader: 'babel-loader',
      },
      {
        // Many react-native libraries do not compile their ES6 JS.
        test: /\.(tsx|ts|jsx|js|mjs)$/,
        include: /node_modules\/rn-fetch-blob/,
        exclude: /node_modules\/react-native-web\//,
        loader: 'babel-loader',
      },
      {
        test: [/\.js?$/, /\.ts?$/, /\.jsx?$/, /\.tsx?$/],
        enforce: 'pre',
        exclude: /node_modules/,
        use: ['source-map-loader'],
      },
    ],
  },
  devServer,
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: [path.resolve(appDirectory, 'dist')],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
      favicon: './public/favicon.ico',
      filename: 'index.html',
      manifest: './public/manifest.json',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      // See: https://github.com/necolas/react-native-web/issues/349
      __DEV__: JSON.stringify(true),
    }),
  ],
};
