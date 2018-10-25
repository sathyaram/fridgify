const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// set up express app
const app = express()

// connect to mongoDB
if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MLAB_URL, {useNewUrlParser: true})
} else {
  mongoose.connect('mongodb://localhost/fridgify', {useNewUrlParser: true})
}
mongoose.Promise = global.Promise

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frontend/build/index.html')
})

app.use(express.static('frontend/build'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())

// initialize routes
app.use('/', require('./routes/api'))

// error handling middleware
// app.use(function (err, req, res, next) {
//   res.status(422).send({error: err.message})
// })

// listen for requests
app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`PORT: ${app.get('port')}`)
})