const version = 'v3.1-modules-2026.3.5';
global.version = version; // Attach version to the global object

import { checkEnv } from './config/env.js';
import 'colors';

console.log(`Server Version: ${version}`.green);

try {
  checkEnv();

  const { default: app } = await import('./app.js');
  
  const PORT = process.env.EXPRESS_PORT || 3000;

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} (http://localhost:${PORT})`.green);
  });

} catch (error) {
  console.error(`(server.js) Error loading environment variables: ${error.message}`.red);

  const { default: errorServer } = await import('./config/errorServer.js');
  errorServer.listen(process.env.EXPRESS_PORT || 3000, () => {
    console.log(`Error server listening on port ${process.env.EXPRESS_PORT || 3000}`.red);
  });
}