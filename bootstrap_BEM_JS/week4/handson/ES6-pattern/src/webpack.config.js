const path = require('path');

module.exports = {
  entry: './index',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  }
};