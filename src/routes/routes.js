const express = require('express')
const Route = express.Router()

const UserController = require('../controllers/controllers')

Route
  .get('/', UserController.getUsers) // get All

  .get('/:bookid', UserController.userDetail) // get By ID
  .get('/category/:category', UserController.userCategory) // get By Category
  .get('/location/:location', UserController.userLocation) // get By Location

  .post('/', UserController.postUser) // add New Data

  .patch('/:bookid', UserController.patchUser) // update Data

  .delete('/:bookid', UserController.userDelete) // delete Data By ID

module.exports = Route
