import 'dotenv/config';

export function indexGet(req, res) {
    let welcomeMSG;
    if (req.session.active) {
        welcomeMSG = "Welcome back";
    } else {
        welcomeMSG = "Welcome";
        req.session.active = true;
    }

    // Retrieve the IP address from the session
    const ipAddress = req.session.ipAddress || 'Not logged (refresh the page)';
    console.log(`IP Address from session: ${ipAddress}`);

    return res.render('index', { welcomeMSG: welcomeMSG, ipAddress: ipAddress, version: global.version });
}