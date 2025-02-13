
# Template Node.js Express Server

This node.js express server template is setup to be a ready to go with or without docker.
### Install/Running:
#### Node.js
> - [Install node](https://nodejs.org/en/download/package-manager)
> - Download and extract [code](https://github.com/JacobMS2020/node-express-webserver-template.git)
> - **`cd`** to a folder for the project
> - setup a .env file in the root folder (not inside the node folder) with the following:
>   - SESSION_KEY = "your_key"
>   - NODE_ENV = 'development' OR 'production'
> - run **`node server.js`**
> - go to **`http://localhost:3000`**
#### Docker
> - [Install Docker](https://docs.docker.com/engine/install/)
> - Download and extract [code](https://github.com/JacobMS2020/node-express-webserver-template.git)
> - **`cd`** to a folder for the project
> - setup a .env file with the following:
>   - SESSION_KEY = "your_key"
>   - NODE_ENV = 'development' OR 'producation'
> - run **`sudo docker compose up -d`**
> - go to **`http://localhost:3000`**
### Services:
#### node.js
> - EJS
> - Express Services
> - dotenv (required .env file)
#### Docker
> - Docker compose with:
> - 18-alpine
> - mounted volume for easy testing
### Structure:
```
node/
├── server.js
├── app.js
├── .env
├── public/
│   ├── styles/
|   |   └── main.css
│   ├── 404.html
│   └── 500.html
├── src/
│   ├── controllers/
│   │   └── indexController.js
│   ├── middlewares/
│   │   ├── errorHandler.js
│   │   └── logger.js
│   ├── routes/
│   │   └── mainRoutes.js
├── views/
│   └── index.ejs
```

#### File Descriptions

- **`server.js`**: Entry point for the Node.js application.
- **`app.js`**: Main application logic and middleware setup.
- **`.env`**: Environment variables configuration file.

##### Public
- **`public/`**: Directory for static assets.
  - **`404.html`**, **`500.html`**: Error pages.
  - **`styles/`**: Subdirectory for CSS files.
    - **`main.css`**: Website theme

##### Source Code (`src/`)
- **`controllers/`**: Contains controller logic.
  - **`indexController.js`**: Handles application routes and responses.
- **`middlewares/`**: Middleware functions for request handling.
  - **`errorHandler.js`**: Custom error handling middleware.
  - **`logger.js`**: Logging middleware.
- **`routes/`**: Defines application routes.
  - **`mainRoutes.js`**: Main routes of the application.

##### Views
- **`views/`**: Templates for server-side rendering.
  - **`index.ejs`**: Main HTML template.

