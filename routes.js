'use strick'
module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/cek')
        .get(todoList.cek);

    app.route('/')
        .get(todoList.users);

    app.route('/location/:location')
        .get(todoList.location);

    app.route('/category/:category')
        .get(todoList.category);

    app.route('/:userid')
        .patch(todoList.createUsers);

    app.route('/:userid')
        .delete(todoList.deleteUsers);
};