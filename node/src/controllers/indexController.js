require('dotenv').config();
const session = require('express-session');

exports.indexGet = (req, res) => {
    const dateTime = new Date();
    let welcomeMSG;
	let clientIp = req.ip;
	if (clientIp.startsWith('::ffff:')) {
		clientIp = clientIp.split(':').pop(); // Extract the IPv4 part
	}
    if (req.session.active) {
        welcomeMSG = "Welcome back!";
    } else {
        welcomeMSG = "Welcome!";
        req.session.active = true;
    }
    return res.render('index', {
		clientIp: clientIp, 
		welcomeMSG: welcomeMSG, 
		dateTime: dateTime.toString()
	});
}