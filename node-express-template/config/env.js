// ===============================================================
// CHNAGE THIS IF YOU WANT TO CHANGE HOW ENV VARS ARE CHECKED
const requiredEnvVars = [];
const optionalEnvVars = ['SESSION_KEY', 'NODE_ENV'];
// ===============================================================

// project_folder/node/config/env.js
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from project root
dotenv.config({ path: path.join(__dirname, '../.env') });

export function checkEnv() {
  // === .env checking ===
  const missingVars = requiredEnvVars.filter(
    (key) => !process.env[key] || process.env[key].trim() === ''
  );
  if (missingVars.length > 0) {
    console.error('(env.js) Missing required environment variables (.env file):'.red, missingVars.join(', ').yellow);
    throw new Error('Missing required environment variables. Check your .env file.');
  }

  const presentOptionalVars = optionalEnvVars.filter(
    (key) => !process.env[key] || process.env[key].trim() === ''
  );
  if (presentOptionalVars.length > 0) {
    console.log('(env.js) WARNING: Optional environment variables missing:'.yellow, presentOptionalVars.join(', '));
  }

  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'development') {
    console.log("(env.js) WANRING: A .env file is highly recommended with NODE_ENV = 'development' OR 'production'. Without one you could run into errors".red);
    process.env.NODE_ENV = 'development';
  }

  if (!process.env.SESSION_KEY) {
    console.log('(env.js) WARNING: SESSION_KEY environment variable is not set. Using default session key. This is insecure and should only be used for development.'.yellow);
    process.env.SESSION_KEY = 'default_session_key_sdfkjhskjfh2398fh2398fhdsjfakjfdhq2398rhqefj';
  }

  if (process.env.NODE_ENV === 'development') {
    console.log(`WARNING: Project in development`.yellow);
  }
}
