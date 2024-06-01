const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ];

  if (!isProduction) {
    plugins.push(
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        files: ['src'],
      })
    );
  }

  if (isProduction) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return {
    mode: argv.mode || 'production',
    entry: './src/index.tsx',
    devtool: argv.mode === 'development' ? 'source-map' : false,
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@/components': path.resolve(__dirname, 'src/components/'),
        '@/pages': path.resolve(__dirname, 'src/pages/'),
        '@/domain': path.resolve(__dirname, 'src/domain/'),
        '@/adapters': path.resolve(__dirname, 'src/adapters/'),
        '@/infra': path.resolve(__dirname, 'src/infra/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.module\.scss$/, // For SCSS modules
          use: [
            argv.mode === 'development'
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                esModule: false,
                modules: {
                  mode: 'local',
                  localIdentName: '[name]__[local]__[hash:base64:5]',
                  exportLocalsConvention: 'camelCase',
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                additionalData: `@import "${path.resolve(__dirname, 'src/styles/variables.scss')}";`,
              },
            },
          ],
        },
        {
          test: /\.scss$/, // For regular SCSS files
          use: [
            argv.mode === 'development'
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
            ,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                additionalData: `@import "${path.resolve(__dirname, 'src/styles/variables.scss')}";`,
              },
            },
          ],
          exclude: /\.module\.scss$/,
        },
      ],
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          parallel: true,
        }),
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 70000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: '~',
        cacheGroups: {
          defaultVendors: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
            minSize: 30000,
            maxSize: 100000,
          },
          common: {
            name: 'common',
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
            enforce: true,
            minSize: 20000,
            maxSize: 70000,
          },
          infra: {
            name: 'infra',
            test: /[\\/]src[\\/]infra[\\/]/,
            priority: -30,
            reuseExistingChunk: true,
            minSize: 10000,
            maxSize: 70000,
          },
        },
      },
    },
    plugins,
    output: {
      publicPath: '',
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
      hot: true,
    },
  };
};
