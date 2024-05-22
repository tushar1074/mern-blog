import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

// Optional: Handle the root /api/user route

  
router.get('/test', test);

export default router;