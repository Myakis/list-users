const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const babelOptions = preset => {
  const opts = {
    presets: ['@babel/preset-env'],
    // plugins: ['@babel/plugin-proposal-class-properties'],
  };
  if (preset) {
    opts.presets.push(preset);
  }
  return opts;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.tsx'],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    port: 4000,
    hot: isDev,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {},
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: isProd,
      inject: 'body',
      scriptLoading: 'blocking',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader', options: babelOptions() },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader', options: babelOptions('@babel/preset-typescript') },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader', options: babelOptions('@babel/preset-react') },
      },

      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
};
