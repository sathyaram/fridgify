const mongoose = require('./models/Item.js')
const Item = mongoose.model('Item')
const itemData = require('./item-data.json')

Item.remove({}).then(() => {
  Item.collection.insert(itemData).then((items) => {
    console.log(items)
    process.exit()
  })
}).catch((err) => {
  console.log(err)
})
