const TodoItemsController = require('../controllers').TodoItemsController;
const todoItemsController = new TodoItemsController(); 

module.exports = (app) => {

    app.post('/api/todos/:todoId/items', todoItemsController.create);
}