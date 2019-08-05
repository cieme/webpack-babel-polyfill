const path = require('path');
const config = {
    mode: "production",
    entry: path.join(__dirname, "./js/index.js"),
    output: {
        path: path.join(__dirname, 'js'),
        filename: 'dist.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }]
    }
}
module.exports = config