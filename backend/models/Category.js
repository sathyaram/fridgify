const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Category = new Schema({
  _id: Number,
  name: String,
  // items: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Item'
  // }
})

module.exports = mongoose.model('Category', Category)
