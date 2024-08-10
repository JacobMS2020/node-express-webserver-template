require('dotenv').config();
const session = require('express-session');

exports.indexGet = (req, res) => {
    const dateTime = new Date();
    let welcomeMSG;
    if (req.session.active) {
        welcomeMSG = "Welcome back!";
    } else {
        welcomeMSG = "Welcome!";
        req.session.active = true;
    }
    return res.render('index', {welcomeMSG: welcomeMSG, dateTime: dateTime.toString()});
}