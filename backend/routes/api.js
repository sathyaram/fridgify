const express = require('express')
const router = express.Router()
const Item = require('../db/models/Item')
const Category = require('../db/models/Category')

// router.get('/',(req, res) => {
//   res.sendFile(__dirname + '../../frontend/build/index.html')
// })

// GET for Categories
router.get('/api/categories', (req, res, next) => {
  Category.find().then((items) => {
    res.json(items)
  }).catch(next)
})

// temporary POST for Categories
router.post('/api/categories', (req, res, next) => {
  Category.create(req.body).then(category => {
    res.send(category)
  }).catch(next)
})

// get a list of items from the db
router.get('/api/items', (req, res, next) => {
  Item.find().then((items) => {
    res.json(items)
  }).catch(next)
})

// add a new item to the db
router.post('/api/items', (req, res, next) => {
  console.log('adding an item');
  console.log(req.body);
  Item.create(req.body).then(item => {
    res.send(item)
  }).catch(next)
})

// get the item in the db
router.get('/api/items/:id', (req, res) => {
  Item.findById(req.params.id).then(item =>{
    res.json(item)
  }).catch((err) => {
    console.log(err)
  })
})

// update the item in the db
router.put('/api/items/:id', (req, res, next) => {
  Item.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
    Item.findOne({_id: req.params.id}).then(item => {
      res.send(item)
    })
  })
})

// delete an item from db
router.delete('/api/items/:id', (req, res, next) => {
  Item.findByIdAndRemove({_id: req.params.id}).then(item => {
    res.send(item)
  })
})

module.exports = router
