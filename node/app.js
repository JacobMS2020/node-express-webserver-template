// Require

import express from 'express';
import session from 'express-session';
import path from 'path';
import dotenv from 'dotenv';
import 'colors';
import favicon from 'serve-favicon';
import logger from './src/middlewares/logger.js';
import mainRoutes from './src/routes/mainRoutes.js';
import errorHandler from './src/middlewares/errorHandler.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Define __dirname for ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: '../.env' }); // The .env file is outside the ./server.js folder root.

// Express setup
const app = express();

// Logger setup

app.use(logger);

// Serve favicon
app.use(favicon(path.join(__dirname, 'public', 'images', 'icon.png')));

// Set cache control for static files
app.use(express.static('public', {
    setHeaders: (res, filePath) => {
        res.setHeader('Cache-Control', 'no-store');
    }
}));

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Setup session middleware
app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' } // For HTTP, set to true for HTTPS
}));

// Routes

app.use(mainRoutes);

// Handle 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
});

// Error handler should be the last middleware added.

app.use(errorHandler);

export default app;