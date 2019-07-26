const express = require("express");
const controller = require("../controllers/telegramNotifications");

const router = express.Router();

router.post('/sendMessage', controller.sendMessage);

module.exports = router;