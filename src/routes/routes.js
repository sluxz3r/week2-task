const express = require('express')
const Route = express.Router()

const BookController = require('../controllers/controllers')

Route
  .get('/cek', BookController.getIndex)
  .get('/', BookController.getBooks)
  .get('/name/:name', BookController.nameBook)
  .get('/:bookid', BookController.bookId)
  .get('/category/:category', BookController.bookCategory)
  .get('/location/:location', BookController.bookLocation)
  .post('/', BookController.postBook)
  .patch('/:bookid', BookController.patchBook)
  .delete('/:bookid', BookController.bookDelete)

module.exports = Route
