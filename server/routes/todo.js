const TodosController = require('../controllers').TodosController;
const todosController = new TodosController(); 

module.exports = (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    }));

    app.get('/api/list', todosController.all);

    app.post('/api/todos', todosController.create);

    app.get('/api/todos/:todoId', todosController.retrieve);

    app.put('/api/todos/:todoId', todosController.update);

    app.delete('/api/todos/:todoId', todosController.destroy);

};