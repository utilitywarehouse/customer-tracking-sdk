const path = require('path');

module.exports = {
    entry: './src/tracker.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'uw_tracking.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'uw_tracking',
    },
};