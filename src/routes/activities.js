const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/ActivityController');

router.get('/', ActivityController.listActivities);

module.exports = router; 