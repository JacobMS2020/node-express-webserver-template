import express from 'express';

const router = express.Router();

// Middleware to check if user is authenticated
import { requireRole } from '../middlewares/checkPermissions.js';

// Secure routes
router.use(requireRole(['admin', 'user']));

router.get('/', (req, res) => {
    res.send('This is a secure route accessible to authenticated users.');
});

// Export the router
export default router;
