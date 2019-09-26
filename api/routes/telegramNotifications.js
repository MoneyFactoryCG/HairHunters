const express = require('express');
const controller = require('../controllers/telegramNotifications');

const router = express.Router();

router.post('/sendMessage', controller.sendMessage);
router.post(
  '/sendMessageObucheniye',
  controller.sendMessageObucheniye,
);

module.exports = router;
