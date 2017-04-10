var path = require('path');

module.exports = {
    entry: {
        idea: ['./public/js/controllers/ideaPage.js'],
        index: ['./public/js/controllers/indexPage.js'],
        newIdea: ['./public/js/controllers/newIdeaPage.js'],
        settings: ['./public/js/controllers/settingsPage.js'],
        profile: ['./public/js/controllers/profilePage.js']

    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};