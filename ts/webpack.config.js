const path = require('path');

module.exports = {
    devtool: "source-map",
    entry: './src-browser/index.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: { loader: 'ts-loader', options: { configFile: 'tsconfig.browser.json' } },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'uw_tracking.js',
        path: path.resolve(__dirname, 'dist-browser'),
        library: 'uw_tracking',
    }
};