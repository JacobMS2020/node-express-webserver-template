const version = "1.0.0.0";

// Load env FIRST (before any other imports)
import './config/env.js';

// === Import app.js ===
import app from './app.js';

const PORT = process.env.EXPRESS_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Version: ${version}`);
  console.log(`App listening on port ${PORT}`.green);
});
