// https://sequelize.org/master/manual/model-querying-basics.html#simple-update-queries
const BaseController = require('./BaseController');
const async = require('async');
const jwt = require('jsonwebtoken');
const RequestHandler = require('./../utils/RequestHandler');
const Logger = require('./../utils/logger');
const stringUtil = require('./../utils/stringUtil');

const logger = new Logger();
const requestHandler = new RequestHandler(logger);
const tokenList = {};

const {
    Todo,
    TodoItem
} = require('../models');

class TodosController extends BaseController {

    async all(req, res) {
        const todos = await super.all(Todo);
        requestHandler.sendSuccess(res, 'list todos', 201, todos)();
    }

    async create(req, res) {
        const todo = await super.create(Todo, { title: req.body.title }).catch(error => res.status(400).send(error));
        res.status(201).send(todo);
    }

    async retrieve(req, res) {
        const todo = await super.findById(Todo, req.params.todoId, [{ model: TodoItem, as: 'todoItems' }]).catch(error => res.status(400).send(error));
        if (!todo) {
            return res.status(404).send({
                message: 'Todo Not Found',
            });
        }
        return res.status(200).send(todo);
    }

    async destroy(req, res) {
        if (!(await super.findById(Todo, req.params.todoId))) {
            return res.status(404).send({
                message: 'Todo Not Found',
            });
        }
        return res.status(204).send("Deleted");
    }

    async update(req, res) {
        let todo;
        if (!(todo = await super.findById(Todo, req.params.todoId))) {
            return res.status(404).send({
                message: 'Todo Not Found',
            });
        }
        await super.update(todo, { title: req.body.title || todo.title, }, req.params.todoId).catch(error => res.status(400).send(error));
        return res.status(200).send(todo);
    }

}

module.exports = TodosController;
