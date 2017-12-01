var webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: './index.js',
    devtool: 'source-map',
    output: {
        path: '/Users/skanda2/Desktop/apache-tomcat-7.0.82/webapps/react-redux-thunk-app/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loaders: [ 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0' ]
            },
            { 
                test: /\.css?$/, 
                loader: 'style-loader!css-loader' 
            }
        ]
    },
    resolve: {
        alias: {
            "ag-grid-root" : __dirname + "/node_modules/ag-grid"
        }
    }
};
//path: '/Users/skanda2/Desktop/apache-tomcat-7.0.82/webapps/react-redux-thunk-app/build',
//path: __dirname + '/build',
