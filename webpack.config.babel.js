import path from 'path'

var inputFilePath = 'target/validator'
var outputFileName = 'phonenumvalidator'

export default {
  entry: path.join(__dirname, `${inputFilePath}.js`),
  devtool: 'source-map',
  output: {
    path           : path.join(__dirname, 'bundle'),
    filename       : `${outputFileName}.js`,
    library        : 'phonenumvalidator',
    libraryTarget  : 'umd',
    umdNamedDefine : true
  },
  module: {
    rules: [{
      test    : /(\.js)$/,
      loader  : 'babel-loader',
      exclude : /node_modules/
    }]
  },
  externals: {
    // Use external version of React
    "react"     : "React",
    "react-dom" : "ReactDOM"
  }
}
