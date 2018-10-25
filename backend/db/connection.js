const mongoose = require('mongoose')

// connect to mongoDB
if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MLAB_URL, {useNewUrlParser: true})
} else {
  mongoose.connect('mongodb://localhost/fridgify', {useNewUrlParser: true})
}

module.exports = mongoose
