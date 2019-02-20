const express = require('express')
const bodyParser = require('body-parser')
const setup = require('./setup')
require('dotenv').config()

const app = express()

app.use(bodyParser.json())

setup(app)

app.listen(process.env.PORT || 4000, () => {
  console.info(`server started on port ${process.env.PORT}`)
})

app.use((err, req, res) => {
  console.error(err.stack)
})
