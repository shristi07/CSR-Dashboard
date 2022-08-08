const express = require("express");
const router = express.Router();

const newer = require('../controllers/contribution');
const schema = require('../models/contribution');

router.get('/',newer.getUserContributions);  
router.get('/me',newer.getUserInfo);  
router.post('/',newer.createContributionRequest);  
router.post('/api/v1/auth/google',newer.createUser);  

module.exports = router