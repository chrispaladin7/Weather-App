const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // ... other Webpack configuration ...

  plugins: [
    // Add this plugin to your plugins array
    new HtmlWebpackPlugin({
      template: 'public/index.html', // Specify your HTML template
      templateParameters: {
        'GOOGLE_MAP_API': process.env.GOOGLE_MAP_API || '', // Inject the value from the environment
      },
    }),
    // ... other plugins ...
  ],

  // ... other configuration ...
};
