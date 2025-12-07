// Import
import express from 'express';
import * as indexController from '../controllers/indexController.js';

const router = express.Router();

// GET Routes
router.get('/', indexController.indexGet);
router.get('/test-error', (req, res) => {throw new Error('This is a test error!');}); // Show the errorHandler working

// POST Routes
router.post('/ip/logging', (req, res) => {
    const ipAddress = req.body.ipAddress;
    if (ipAddress) {
        req.session.ipAddress = ipAddress;
        console.log(`Logged IP Address: ${ipAddress}`);
        res.json({ message: 'successfully'});
    } else {
        res.status(400).json({ message: 'error' });
    }
});
export default router;