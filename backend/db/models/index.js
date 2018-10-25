const mongoose = require('../connection')

module.exports = {
  Item: mongoose.model('Item', require('./Item')),
  Category: mongoose.model('Category', require('./Category'))
}