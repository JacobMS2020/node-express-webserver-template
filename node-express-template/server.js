import { checkEnv } from './config/env.js';
import 'colors';

try {
  checkEnv();

  const { default: app } = await import('./app.js');
  
  const PORT = process.env.EXPRESS_PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server Online`.green);
    console.log(`App listening on port ${PORT} (http://localhost:${PORT})`.green);
  });

} catch (error) {
  console.error(`(server.js) Error loading environment variables: ${error.message}`.red);

  const { default: errorServer } = await import('./config/errorServer.js');
  errorServer.listen(process.env.EXPRESS_PORT || 3000, () => {
    console.log(`Error server listening on port ${process.env.EXPRESS_PORT || 3000}`.red);
  });
}