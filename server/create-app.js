const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

function createApp() {

  const app = express()

  app
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.json())

  return app
}

module.exports = { createApp }
