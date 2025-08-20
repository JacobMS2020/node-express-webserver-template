// project_folder/node/config/env.js
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from project root
dotenv.config({ path: path.join(__dirname, '../../.env') });

export function checkEnv() {
  // === .env checking ===
  const requiredEnvVars = ['SESSION_KEY', 'NODE_ENV'];
  const missingVars = requiredEnvVars.filter(
    (key) => !process.env[key] || process.env[key].trim() === ''
  );
  if (missingVars.length > 0) {
    console.error('(env.js) Missing required environment variables (.env file):'.red, missingVars.join(', ').yellow);
    throw new Error('Missing required environment variables. Check your .env file.');
  }

  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'development') {
    console.log("A .env file is needed with NODE_ENV = 'development' OR 'production'".red);
    throw new Error("Invalid NODE_ENV value. Must be 'development' or 'production'.");
  }

  if (process.env.NODE_ENV === 'development') {
    console.log(`WARNING: Project in development`.yellow);
  }

  console.log('(env.js) Environment variables loaded successfully'.green);
}
