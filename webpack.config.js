var config = {
  entry: './main.js',

  output: {
    path:'./',
    filename: 'index.js',
  },

  devServer: {
    inline: true,
    port: 3000
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg|jpg|gif)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
}

module.exports = config;
