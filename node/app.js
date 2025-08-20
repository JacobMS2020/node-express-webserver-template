/**
 * ====================
 * Import
 * ====================
**/

// Express
import express from 'express';
import session from 'express-session';
import favicon from 'serve-favicon';
import logger from './src/middlewares/logger.js';
import errorHandler from './src/middlewares/errorHandler.js';
// File system
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import 'colors';
// Routes
import mainRoutes from './src/routes/mainRoutes.js';
import secureRoutes from './src/routes/secureRoutes.js';

/**
 * ====================
 * App Setup
 * ====================
**/

// Define __dirname for ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

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
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// Routes

app.use(mainRoutes);
app.use('/secure', secureRoutes);

// Handle 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
});

// Error handler should be the last middleware added.

app.use(errorHandler);

export default app;