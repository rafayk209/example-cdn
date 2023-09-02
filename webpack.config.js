const path = require('path');

module.exports = {
  entry: './src/index.js', // Your React.js entry file
  output: {
    filename: 'bundle.js', // Output JavaScript file name
    path: path.resolve(__dirname, 'dist'), // Output directory (create a 'dist' folder)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader', // Use Babel for JS files
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader', // Inject styles into the DOM
          },
          {
            loader: 'css-loader', // Handle CSS files
          },
        ],
      },
    ],
  },
};
