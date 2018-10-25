const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Category = new Schema({
  name: String,
  icon: String
})

module.exports = Category
