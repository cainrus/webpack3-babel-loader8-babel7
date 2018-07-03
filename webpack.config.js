const path = require('path');
module.exports = {
	
        entry: './index.js',
		context: path.resolve(__dirname),
        output: {
            filename: 'dist.js',
            libraryTarget: 'commonjs2',			
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					}
                }
            ]
        },

}