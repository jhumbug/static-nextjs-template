// const dev = process.env.NODE_ENV !== 'production';
const basePath = '';

module.exports = {
    assetPrefix: basePath,
    basePath,
    compress: false,
    publicRuntimeConfig: {
        API_KEY: process.env.API_KEY,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            exclude: /node_modules/,
            use: ['@svgr/webpack', 'url-loader'],
        }, {
            test: /\.md$/,
            exclude: /node_modules/,
            use: ['html-loader', 'markdown-loader'],
        });

        return config;
    },
};
