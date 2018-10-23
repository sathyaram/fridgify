const mongooseItem = require('./models/Item')
const mongooseCategory = require('./models/Category')
const Item = mongooseItem.model('Item')
const Category = mongooseCategory.model('Category')
const itemData = require('./item-data.json')
const categoryData = require('./category-data.json')

Item.remove({}).then(() => {
  Item.collection.insert(itemData).then((items) => {
    console.log(items)
    process.exit()
  })
}).catch((err) => {
  console.log(err)
})

Category.remove({}).then(() => {
  Category.collection.insert(categoryData).then((categories) => {
    console.log(categories)
    process.exit()
  })
}).catch((err) => {
  console.log(err)
})
