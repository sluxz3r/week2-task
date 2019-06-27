const connection = require('../configs/db')

module.exports = {
  getUsers: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT book.bookid, book.name, book.writer, cat.category, loc.location FROM book INNER JOIN cat ON book.category=cat.catid INNER JOIN loc ON book.location=loc.locid ', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      }) 
    })
  },

  userDetail: (bookid) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT book.bookid, book.name, book.writer, cat.category, loc.location FROM book INNER JOIN cat ON book.category=cat.catid INNER JOIN loc ON book.location=loc.locid WHERE book.bookid = ?', bookid, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  userCategory: (category) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT book.bookid, book.name, book.writer, cat.category, loc.location FROM book INNER JOIN cat ON book.category=cat.catid INNER JOIN loc ON book.location=loc.locid WHERE cat.category = ?', category, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  userLocation: (location) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT book.bookid, book.name, book.writer, cat.category, loc.location FROM book INNER JOIN cat ON book.category=cat.catid INNER JOIN loc ON book.location=loc.locid WHERE loc.location = ?', location, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  postUser: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO book SET ? ', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  patchUser: (bookid, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE book SET ? WHERE bookid= ?', [data, bookid], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
            reject(new Error(err))
        }
      })
    })
  },

  userDelete: (bookid) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM book WHERE bookid = ?', bookid, (err) => {
        if (!err) {
          resolve( `Data dengan Id : ${bookid} berhasil di Hapus`)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
}
