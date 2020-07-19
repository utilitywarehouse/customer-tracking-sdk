const path = require('path');

module.exports = {
    devtool: "source-map",
    entry: './src/browser_tracker.ts',
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
        path: path.resolve(__dirname, 'browser'),
        library: 'uw_tracking',
    },
};