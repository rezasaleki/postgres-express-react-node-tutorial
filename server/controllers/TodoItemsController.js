const { TodoItem } = require('../models');
const BaseController = require('./BaseController');

class TodoItemsController extends BaseController {
  async create(req, res) {
    const todoItem = await super.create(TodoItem, { content: req.body.content, complete: req.body.complete, todoId: req.params.todoId }).catch(error => res.status(400).send(error));
    return res.status(201).send(todoItem);
  }
}

module.exports = TodoItemsController;
