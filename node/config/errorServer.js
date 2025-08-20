import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// For ES modules, recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use((req, res) => {
    res.status(500).render('error', {
        message: 'An error occurred starting the server. Please see server console logs for more details.',
        title: 'Error'
    });
});

export default app;