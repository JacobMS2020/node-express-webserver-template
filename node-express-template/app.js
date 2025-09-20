// app.js
import express from 'express';
import session from 'express-session';
import favicon from 'serve-favicon';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Middlewares
import logger from './src/middlewares/logger.js';
import errorHandler from './src/middlewares/errorHandler.js';

// Routes
import mainRoutes from './src/routes/mainRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';

// Define __dirname for ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

// Express setup
const app = express();

// Logger
app.use(logger);

// Serve favicon
app.use(favicon(path.join(__dirname, 'public', 'images', 'icon.png')));

// Insure the latest version of the public folder is served
app.use(express.static('public', {
    setHeaders: (res, filePath) => {
        if (process.env.NODE_ENV === 'development') {
            res.setHeader('Cache-Control', 'no-store');
        } else {
            // Allow caching in production for better performance
            res.setHeader('Cache-Control', 'public, max-age=3600'); // 1 hour
        }
    }
}));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine
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
app.use('/admin', adminRoutes);

// Handle 404
app.use((req, res) => {
    res.status(404).render('error', {
        title: '404',
        message: 'Page not found. Looks like you are lost!'
    });
});

// Error handler
app.use(errorHandler);

export default app;