import 'dotenv/config';

export function indexGet(req, res) {
    let welcomeMSG;
    if (req.session.active) {
        welcomeMSG = "Welcome back";
    } else {
        welcomeMSG = "Welcome";
        req.session.active = true;
    }
    return res.render('index', { welcomeMSG: welcomeMSG });
}