var webpack = require('webpack')

module.exports = {
	entry: './src/rosetta-markdown.js',
	output: {
		path: '.',
		filename: 'rosetta-markdown.js',
		library: 'rosetta-markdown',
		libraryTarget: 'umd',
		umdNameDefine: true,
	},
	resolve: {
		extensions: ['','.js'],
	},
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
}
