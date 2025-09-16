// Import
import express from 'express';
import * as indexController from '../controllers/indexController.js';

const router = express.Router();

// GET Routes
router.get('/', indexController.indexGet);
router.get('/test-error', (req, res) => {throw new Error('This is a test error!');}); // Show the errorHandler working

export default router;