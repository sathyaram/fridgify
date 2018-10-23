const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

app.use('/api', require('./routes/api'))

// Heroku
app.set('port', process.env.PORT || 8008)

app.listen(app.get('port'), () => {
  console.log('up and running')
})