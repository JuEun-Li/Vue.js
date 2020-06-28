module.exports = {
    publicPath: './',
    configureWebpack: {
        devtool: 'source-map'
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        },
        finals1: {
            entry: 'src/finals/finals1/main.js',
            template: 'public/index.html',
            filename: 'finals1.html'
        },
        finals2: {
            entry: 'src/finals/finals2/main.js',
            template: 'public/index.html',
            filename: 'finals2.html'
        },
        finals3: {
            entry: 'src/finals/finals3/main.js',
            template: 'public/index.html',
            filename: 'finals3.html'
        },
        finals4: {
            entry: 'src/finals/finals4/main.js',
            template: 'public/index.html',
            filename: 'finals4.html'
        },
        finals5: {
            entry: 'src/finals/finals5/main.js',
            template: 'public/index.html',
            filename: 'finals5.html'
        },
        finals6: {
            entry: 'src/finals/finals6/main.js',
            template: 'public/index.html',
            filename: 'finals6.html'
        },
        finals7: {
            entry: 'src/finals/finals7/main.js',
            template: 'public/index.html',
            filename: 'finals7.html'
        }
    }
}

