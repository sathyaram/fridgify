const {Item, Category} = require('./models/index.js')
const itemData = require('./item-data.json')
const categoryData = require('./category-data.json')

Item.remove({}).then(() => {
  Item.collection.insert(itemData).then((items) => {
    console.log(items)
  })
}).catch((err) => {
  console.log(err)
})

Category.remove({}).then(() => {
  Category.collection.insert(categoryData).then(categories => {
    console.log(categories)
  })
}).catch(err => console.log(err))