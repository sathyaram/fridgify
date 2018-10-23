const express = require('express')
const router = express.Router()
const Item = require('../db/models/Item')

// get a list of items from the db
router.get('/items', (req, res) => {
  res.send({type: 'GET'})
})

// add a new item to the db
router.post('/items', (req, res) => {
  Item.create(req.body).then(item => {
    res.send(item)
  })
})

// update the item in the db
router.put('/items/:id', (req, res) => {
  res.send({type: 'PUT'})
})

// delete an item from db
router.delete('/items/:id', (req, res) => {
  res.send({type: 'DELETE'})
})

module.exports = router
