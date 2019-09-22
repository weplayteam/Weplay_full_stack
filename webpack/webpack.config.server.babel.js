// require('source-map-support/register')

var server = require('universal-webpack/server')
var settings = require('./universal-webpack-settings')
var configuration = require('./webpack.config.js')

// Create server-side Webpack config.
server(configuration, settings)