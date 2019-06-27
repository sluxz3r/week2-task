const userModels = require('../models/models')
const MiscHelper = require('../helpers/helpers')

module.exports = {
  getIndex: (req, res) => {
    return res.json({ message: 'Hello!!! Welcome to Arkademy' })
  },

  // Get ALl Books
  getUsers: (req, res) => {
    userModels.getUsers()
      .then((resultUser) => {
        const result = resultUser
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  // Get By ID
  userDetail: (req, res) => {
    const bookid = req.params.bookid

    userModels.userDetail(bookid)
      .then((resultUser) => {
        const result = resultUser[0]
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

    // Get By Category
    userCategory: (req, res) => {
      const category = req.params.category
  
      userModels.userCategory(category)
        .then((resultUser) => {
          const result = resultUser
          MiscHelper.response(res, result, 200)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // Get By Location
    userLocation: (req, res) => {
      const location = req.params.location
  
      userModels.userLocation(location)
        .then((resultUser) => {
          const result = resultUser
          MiscHelper.response(res, result, 200)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // POST User
    postUser: (req, res) => {
      const data = {
        name: req.body.name,
        writer: req.body.writer,
        location: req.body.location,
        category: req.body.category
      }
  
      userModels.postUser(data)
        .then((resultUser) => {
          const result = resultUser[0]
          MiscHelper.response(res, data, 200)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // Update Book
    patchUser: (req, res) => {
      const data = {
        name: req.body.name,
        writer: req.body.writer,
        location: req.body.location,
        category: req.body.category
      }
      const bookid = req.params.bookid

      const dataa = {
        bookid : req.params.bookid,
        name: req.body.name,
        writer: req.body.writer,
        location: req.body.location,
        category: req.body.category
      }
  
      userModels.patchUser(bookid, data)
        .then((resultUser) => {
          const result = resultUser[0]
          MiscHelper.response(res, dataa, 200)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // Delete User By Id
    userDelete: (req, res) => {
      const bookid = req.params.bookid
  
      userModels.userDelete(bookid)
        .then((resultUser) => {
          const result = resultUser
          MiscHelper.response(res, result, 200)
        })
        .catch((error) => {
          console.log(error)
        })
    },
}
