const express = require('express');
const controller = require('../controllers/obucheniye');
const router = express.Router();

router.get('/getDate', controller.getDate);
router.post('/setDate', controller.setDate);

module.exports = router;
