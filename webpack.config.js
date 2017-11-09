//import * as path from 'path';

const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
       // path: path.resolve('__dirname', 'dist')
    },

    resolve: {
        extensions:['.ts', '.tsx', '.js']
    },

    module:{
        rules:[
            {test: /\.tsx?$/, loader: 'ts-loader'}
        ]
    }
}