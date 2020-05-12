/* eslint @typescript-eslint/no-var-requires:off */
const path = require('path'),
  Html = require('html-webpack-plugin'),
  ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'),
  VueLoaderPlugin = require('vue-loader/lib/plugin.js');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, './'),
    publicPath: './',
    filename: 'chunk.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.ts(x)?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        resourceQuery: /\?vue/,
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              sourceMap: false,
              shadowMode: false
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(js|vue|ts|tsx|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: false,
              extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
              cache: false,
              emitWarning: true,
              emitError: true
            }
          }
        ]
      }
    ]
  },
  node: false,
  plugins: [
    new VueLoaderPlugin(),
    new Html({
      template: resolve('src/index.html'),
      filename: 'index.html'
    }),
    new ForkTsCheckerWebpackPlugin({
      vue: true,
      tslint: false,
      checkSyntacticErrors: true
    })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json', '.jsx', '.tsx'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: 8080,
    contentBase: [path.join(__dirname, '../')],
    hot: true,
    host: '0.0.0.0',
    compress: true,
    quiet: false,
    disableHostCheck: true,
    publicPath: '/',
    overlay: {
      warnings: true
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};
