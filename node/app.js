// Require
const express = require('express');
const session = require('express-session');
const path = require('path');
require('dotenv').config();
require('colors');

// Express setup
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware setup
const logger = require('./src/middlewares/logger');
app.use(logger);
const errorHandler = require('./src/middlewares/errorHandler');
app.use(errorHandler);

// Setup session middleware
app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' } // For HTTP, set to true for HTTPS
}));

// Routes
const mainRoutes = require('./src/routes/mainRoutes');
app.use(mainRoutes);

// Handle 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
});

module.exports = app;