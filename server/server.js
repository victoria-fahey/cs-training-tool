const path = require('path')
const express = require('express')
const cors = require('cors')

// const routes = require('./routes/routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use(cors('*'))

// server.use('/cs-training', routes)

module.exports = server
