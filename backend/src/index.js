const express = require('express')
const cores = require('cores')
const routes = require('./routes')


const app = express()
app.use(cores())
app.use(express.json())
app.use(routes)

app.listen(3333)