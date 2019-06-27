const express = require('express')
const Route = express.Router()

const UserController = require('../controllers/controllers')

Route
  .get('/cek', UserController.getIndex)
  .get('/', UserController.getUsers)
  .get('/:bookid', UserController.userDetail) 
  .get('/category/:category', UserController.userCategory)
  .get('/location/:location', UserController.userLocation)
  .post('/', UserController.postUser)
  .patch('/:bookid', UserController.patchUser)
  .delete('/:bookid', UserController.userDelete)

module.exports = Route
