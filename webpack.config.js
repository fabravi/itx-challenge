const path = require('path');
const dotenv = require('dotenv');

const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// Load environment variables from .env file
const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

console.log('Using environment keys: ', JSON.stringify(envKeys, null, 2));

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
    new DefinePlugin(envKeys),
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
    devtool: !isProduction ? 'source-map' : false,
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
        '@/styles': path.resolve(__dirname, 'src/styles/'),
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
                additionalData: `@import "@/styles/variables.scss";`,
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
            'css-loader',
            {
              loader: 'sass-loader',
                options: {
                additionalData: `@import "@/styles/variables.scss";`,
              },
          },
        ],
        exclude: /\.module\.scss$/,
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
          test: /\.svg$/, // For SVG favicon
          type: 'asset/inline',
        },
      ],
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: {
              unused: true,
              dead_code: true,
            },
          },
        }),
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        chunks: 'all',
        minSize: 1000, // 20kb
        maxSize: 70000, // 70kb
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
          },
        },
      },
    },
    plugins,
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      clean: true,
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
      hot: !isProduction,
      compress: true,
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      proxy: [
        {
          context: ['/api'],
          target: 'https://itunes.apple.com/',
          pathRewrite: { '^/api': '' },
          changeOrigin: true,
          secure: false, // Disable SSL verification
        },
      ],
    },
    performance: {
      maxEntrypointSize: 512000,
    },
  };
};
