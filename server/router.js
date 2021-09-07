const todoRegisterRoute = require('./routes/todo');
const todoItemsRegisterRoute = require('./routes/todoItem');

module.exports = (app) => {

    todoRegisterRoute(app);
    todoItemsRegisterRoute(app);

};