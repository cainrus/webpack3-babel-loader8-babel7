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
						options: {
							presets: [
								["@babel/preset-env", {
									"debug": true,
                    				'useBuiltIns': 'usage',
									'modules': false,
									"shippedProposals": true,
									"targets": { node: 10.5 }
								}]
							],
							babelrc: false
						}
					}
                }
            ]
        },

}