// middleware/checkPermissions.js
export function requireRole(roles = []) {
  return (req, res, next) => {
    if (!req.session || !req.session.user) {
      return res.status(401).render('error', { title: '401', message: 'You must be logged in.' });
    }

    const userRole = req.session.user.role;

    if (!roles.includes(userRole)) {
      return res.status(403).render('error', { title: '403', message: 'You do not have permission.' });
    }

    next();
  };
}