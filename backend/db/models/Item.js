const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create items Schema & model
const Item = new Schema({
  category: String,
  name: String,
  expiration: String,
  quantity: Number,
  freezer: {
    type: Boolean,
    default: false
  }
})
module.exports = mongoose.model('Item', Item)
