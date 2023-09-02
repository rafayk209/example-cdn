module.exports = {
    entry: './src/index.js', // Your React.js entry file
    output: {
      filename: 'bundle.js', // Output JavaScript file name
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
              options: {
                modules: true, // Enable CSS modules if needed
              },
            },
          ],
        },
      ],
    },
  };
  