const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// set up express app
const app = express()

// connect to mongoDB
if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MLAB_URL, {useMongoClient: true})
} else {
  mongoose.connect('mongodb://localhost/fridgify', {useMongoClient: true})
}
mongoose.Promise = global.Promise

app.use(bodyParser.json())

app.use('/api', require('./routes/api'))

// listen for requests
app.listen(process.env.port || 3001, function () {
  console.log('Listening on port 3001')
})