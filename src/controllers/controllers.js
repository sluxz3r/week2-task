const bookModels = require('../models/models')
const BookHelper = require('../helpers/helpers')

module.exports = {
  getIndex: (req, res) => {
    return res.json({ message: 'Hello!!! Welcome to Arkademy' })
  },

  // Get ALl Books
  getBooks: (req, res) => {
    bookModels.getBooks()
      .then((resultUser) => {
        const result = resultUser
        BookHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  // Get Book By Id
  bookId: (req, res) => {
    const bookid = req.params.bookid
    bookModels.bookId(bookid)
    .then((resultUser) => {
      const result = resultUser
      BookHelper.response(res, result, 200)
    })
    .catch((error) => {
      console.log(error)
    })
  },

  // Get By Category
  bookCategory: (req, res) => {
    const category = req.params.category
  
    bookModels.bookCategory(category)
      .then((resultUser) => {
          const result = resultUser
          BookHelper.response(res, result, 200)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // Get By Location
    bookLocation: (req, res) => {
      const location = req.params.location
  
      bookModels.bookLocation(location)
        .then((resultUser) => {
          const result = resultUser
          BookHelper.response(res, result, 200)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // POST User
    postBook: (req, res) => {
      const data = {
        name: req.body.name,
        writer: req.body.writer,
        location: req.body.location,
        category: req.body.category
      }
  
      bookModels.postBook(data)
        .then((resultUser) => {
          const result = resultUser[0]
          BookHelper.response(res, data, 200)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // Update Book
    patchBook: (req, res) => {
      const data = {
        name: req.body.name,
        writer: req.body.writer,
        location: req.body.location,
        category: req.body.category
      }
      const bookid = req.params.bookid

      bookModels.patchBook(bookid, data)
        .then((resultUser) => {
          const result = resultUser[0]
          BookHelper.response(res, data, 200)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // Delete User By Id
    bookDelete: (req, res) => {
      const bookid = req.params.bookid
  
      bookModels.bookDelete(bookid)
        .then((resultUser) => {
          const result = resultUser
          BookHelper.response(res, result, 200)
        })
        .catch((error) => {
          console.log(error)
        })
    }
}
