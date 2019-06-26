'use strick';
const response = require('./res');
const conn = require('./conn');

// 
exports.cek = function (req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};
// Get All Data
exports.users = function (req, res) {
    conn.query('SELECT * FROM user', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            response.ok(result, res)
        }
    })
};

// Get data By Location
exports.location = function (req, res) {
    const location = req.params.location
    conn.query('SELECT * FROM user WHERE location = ?', location, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            response.ok(result, res)
        }
    })
}

// Get data By Category
exports.category = function (req, res) {
    const category = req.params.category
    conn.query('SELECT * FROM user WHERE category = ?', category, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            response.ok(result, res)
        }
    })
}

//   // POST data
exports.createUsers = function (req, res) {
    const data = {
        name: req.body.name,
        writer: req.body.writer,
        location: req.body.location,
        category: req.body.category
    }

    conn.query('INSERT INTO user SET ?', data, (err) => {
        if (err) {
            console.log(err)
        } else {
            response.ok(data, res)
        }
    })
}

// Mengupdate data dengan Patch
exports.updateUsers = function (req, res) {
    const userid = req.params.userid
    const data = {
        name: req.body.name,
        writer: req.body.writer,
        location: req.body.location,
        category: req.body.category
    }

    conn.query('UPDATE user SET ? WHERE id = ?', [data, userid], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            response.ok(results, res)
        }
    })
}

// DELETE data berdasarkan ID
exports.deleteUsers = function (req, res) {
    const userid = req.params.userid
    conn.query('DELETE FROM user WHERE id = ?', userid, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            response.ok(` Data dengan Id : ${userid} berhasil di Hapus `, res)
        }
    })
}