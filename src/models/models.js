const conn = require('../configs/db')

module.exports = {
  // Get All Books
  getBooks: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT book.bookid, book.name, book.writer, cat.category, loc.location FROM book INNER JOIN cat ON book.category=cat.catid INNER JOIN loc ON book.location=loc.locid ', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      }) 
    })
  },

  // Get by Id
  bookId: (bookid) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT book.bookid, book.name, book.writer, cat.category, loc.location FROM book INNER JOIN cat ON book.category=cat.catid INNER JOIN loc ON book.location=loc.locid WHERE book.bookid = ?', bookid, (err, result) => {
        if (!err) {
        resolve(result)
      } else {
        reject( new Error(err))
      }
    })
  })
},

  // Get By Category
  bookCategory: (category) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT book.bookid, book.name, book.writer, cat.category, loc.location FROM book INNER JOIN cat ON book.category=cat.catid INNER JOIN loc ON book.location=loc.locid WHERE cat.category = ?', category, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  // Get By Location
  bookLocation: (location) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT book.bookid, book.name, book.writer, cat.category, loc.location FROM book INNER JOIN cat ON book.category=cat.catid INNER JOIN loc ON book.location=loc.locid WHERE loc.location = ?', location, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  // Add Book 
  postBook: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO book SET ? ', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  // Edit Book
  patchBook: (bookid, data) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE book SET ? WHERE bookid= ?', [data, bookid], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
            reject(new Error(err))
        }
      })
    })
  },

  // Delete Book
  bookDelete: (bookid) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM book WHERE bookid = ?', bookid, (err) => {
        if (!err) {
          resolve( `Data dengan Id : ${bookid} berhasil di Hapus`)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
