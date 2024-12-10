const version = "0.0.0.0";  // add "m" to version number *.*.*.*m if anything in here is modified

require('dotenv').config();
require('colors');
const app = require('./app');

const PORT = process.env.EXPRESS_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Version: ${version}`);
    console.log(`App listening on port ${PORT}`.green);
});