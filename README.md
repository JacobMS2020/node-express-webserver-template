
# Template Node.js Express Server

This node.js express server template is setup to be a ready to go with or without docker.
### Install/Running (Linux):
#### Node.js Install
> - Install node ([help](https://nodejs.org/en/download/package-manager))
> - Clone [code](https://github.com/JacobMS2020/node-express-webserver-template.git) `git clone https://github.com/JacobMS2020/node-express-webserver-template.git`)
> - **`cd`** into the cloned folder.
> - **`cd`** into `node-express-template`
> - run **`cp example.env .env`**
> - Change/add what you need using **`nano .env`**
>   - SESSION_KEY = "your_key"
>   - NODE_ENV = 'development' OR 'production'
> - run **`node server.js`** (unless you want to run in docker)
> - go to **`http://localhost:3000`**
> - Done.
#### Docker Startup (Optional)
> - [Install Docker](https://docs.docker.com/engine/install/)
> - Follow the steps above (Node.js Install).
> - **`cd`** into the the root of the project folder
> - run **`sudo docker compose up -d`**
> - go to **`http://localhost:3000`**
> - Done.
### Features:
#### Security
> On server startup required and optional ENV variables are checked to be present. Admin routes (example.com/admin/...) are automatically secured, requiring user authentication. Any errors are automatically displayed via the consol. Server breaking errors result in an error server being started to render an error page preventing 404 or null endpoints.
#### Docker
> Setup to work in docker.
#### Fast setup
> If you chose not to setup a .env file, that is fine. You will get warnings but the server will still work unless you have specified "requored" ENV values in the env.js script.
### Folder Structure:
```
node/
├── server.js
├── app.js
├── .env
├── config/
|   ├── env.js
|   └── errorServer.js
├── public/
|   ├── images/
|   |   └── icon.png
│   ├── styles/
|   |   └── main.css
│   ├── 404.html
│   └── 500.html
├── src/
│   ├── controllers/
│   │   └── indexController.js
│   ├── middlewares/
|   |   ├── checkPermissions.js
│   │   ├── errorHandler.js
│   │   └── logger.js
│   ├── routes/
|   |   ├── adminRoutes.js
│   │   └── mainRoutes.js
├── views/
|   ├── error.ejs
│   └── index.ejs
```

#### File Descriptions

- **`server.js`**: Entry point for the Node.js application.
- **`app.js`**: Main application logic and middleware setup.
- **`.env`**: Environment variables configuration file.

##### Config
- **`env.js`**: Checks that all required an optional ENV values are present.
- **`errorServer.js`**: Used to render the error.ejs page ifthere is a server error on startup.

##### Public
- **`public/`**: Directory for static assets.
  - **`404.html`**, **`500.html`**: Error pages.
  - **`images/`**: Subdirectory for image files.
    - **`icon.png`**: This is the fav icon.
  - **`styles/`**: Subdirectory for CSS files.
    - **`main.css`**: Website theme

##### SRC
- **`controllers/`**: Contains controller logic.
  - **`indexController.js`**: Handles application routes and responses.
- **`middlewares/`**: Middleware functions for request handling.
  - **`checkPermissions.js`**: Check that the user is logged in and if they are authorized. 
  - **`errorHandler.js`**: Custom error handling middleware.
  - **`logger.js`**: Logging middleware.
- **`routes/`**: Defines application routes.
  - **`adminRoutes.js`**: Handles all /admin/... routes and requirs authorisation via the `checkPermissions.js` script.
  - **`mainRoutes.js`**: Main routes of the application.

##### Views
- **`views/`**: Templates for server-side rendering.
  - **`error.ejs`**: Used to display any errors to the client.
  - **`index.ejs`**: Main HTML template.

