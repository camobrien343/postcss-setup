module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-sort-alphabetically'),
        require('cssnano')({
          discardComments: false,
        }),
    ],
};
