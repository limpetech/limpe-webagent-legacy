const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    resolve: {
      extensions: [ '.ts', '.js', '*' ],
      modules: [ path.resolve(__dirname, "src"), "node_modules"]
    },
    module: {
        rules: [
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                targets: "defaults",
                presets: [
                  ['@babel/preset-env'],
                  ['@babel/preset-react']
                ]
              }
            }
          }
        ]
      }
};