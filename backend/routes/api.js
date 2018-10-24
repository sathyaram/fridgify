const express = require('express')
const router = express.Router()
const Item = require('../db/models/Item')

// get a list of items from the db
router.get('/items', (req, res, next) => {
  Item.find().then((items) => {
    res.json(items)
  })
})

// add a new item to the db
router.post('/items', (req, res, next) => {
  console.log('adding an item');
  console.log(req.body);
  Item.create(req.body).then(item => {
    res.send(item)
  }).catch(next)
})

// update the item in the db
router.put('/items/:id', (req, res, next) => {
  Item.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
    Item.findOne({_id: req.params.id}).then(item => {
      res.send(item)
    })
  })
})

// delete an item from db
router.delete('/items/:id', (req, res, next) => {
  Item.findByIdAndRemove({_id: req.params.id}).then(item => {
    res.send(item)
  })
})

module.exports = router
