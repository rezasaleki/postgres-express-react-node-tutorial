const express = require('express');
const log = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const uuid = require('uuid');
const cookieParser = require('cookie-parser');

const config = require('./server/config/appconfig');
const Logger = require('./server/utils/logger');

// Set up the express app
const app = express();
const logger = new Logger();


// Log requests to the console
app.use(log('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(compression());
app.use(cors());

app.set('config', config); // the system configrationsx
app.set('port', process.env.DEV_APP_PORT);

process.on('SIGINT', () => {
    logger.log('stopping the server', 'info');
    process.exit();
});

// Require our routes into the application.
require('./server/router')(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

app.use((req, res, next) => {
    req.identifier = uuid();
    const logString = `a request has been made with the following uuid [${req.identifier}] ${req.url} ${req.headers['user-agent']} ${JSON.stringify(req.body)}`;
    logger.log(logString, 'info');
    next();
});

app.use((req, res, next) => {
    logger.log('the url you are trying to reach is not hosted on our server', 'error');
    const err = new Error('Not Found');
    err.status = 404;
    res.status(err.status).json({ type: 'error', message: 'the url you are trying to reach is not hosted on our server' });
    next(err);
});

module.exports = app;
