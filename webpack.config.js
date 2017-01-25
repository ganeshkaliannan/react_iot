var config = {
  entry: './main.js',

  output: {
    path: '/',
    publicPath: '/',
    filename: 'index.js',
  },

  devServer: {
    inline: true,
    port: 3000
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"]
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=100000'
    }, {
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader?name=fonts/[name].[ext]'
    }]
  }
}

module.exports = config;