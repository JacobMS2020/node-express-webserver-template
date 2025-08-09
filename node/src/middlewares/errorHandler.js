import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import 'colors';

// Define __dirname for ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

const errorHandler = (err, req, res, next) => {
    console.error(`[${new Date().toISOString()}] Error: ${err.message}`.red);
    console.error(`Stack trace: ${err.stack}`.red);

    // Serve the custom 500 error page
    res.status(500).sendFile(path.join(__dirname, '../../public/500.html'));
};

export default errorHandler;
