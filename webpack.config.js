module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: './client/src/index.js',
    output: {
        path: __dirname + '/client/public',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        contentBase: './client/public',
        port: 3333
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-2']
            }
        },
        {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader']
        },
        { test: /\.svg$/, loader: 'svg-loader?pngScale=2' },]
    }


}