var path = require('path');

module.exports = {
    entry: {
        idea: ['./js/controllers/ideaPage.js'],
        index: ['./js/controllers/indexPage.js'],
        newIdea: ['./js/controllers/newIdeaPage.js'],
        settings: ['./js/controllers/settingsPage.js'],
        profile: ['./js/controllers/profilePage.js']

    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
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