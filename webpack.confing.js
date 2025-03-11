module.exports = {
    module: {
        rules:[
            {
                test: /\.s[as]ss$/i,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};