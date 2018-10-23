const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Category = new Schema({
  _id: Number,
  name: String
})

module.exports = mongoose.model('Category', Category)
