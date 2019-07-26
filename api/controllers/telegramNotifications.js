const telegram = require("telegram-bot-api");
const errorHandler = require('../utils/errorHandler');

const api = new telegram({
  token: "877996443:AAGKM5wRaj22J9FLK8-obd_IIBaDSfFgDq0"
});

module.exports.sendMessage = async (req, res) => {
  const title = "<b>" + req.body.title + "</b>";
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  let date = new Date();
  date =
    "#date" +
    date.getFullYear() +
    "_" +
    (date.getMonth() + 1) +
    "_" +
    date.getDate();
  const text =
    title +
    "\n\n" +
    "Имя: " +
    name +
    "\n" +
    "Телефон: " +
    phoneNumber +
    "\n\n" +
    date;

  api
    .sendMessage({
      chat_id: "406019468",
      text: text,
      parse_mode: "HTML"
    })
    .then(data => {
      res.status(200).json({
        message: "Notification sent"
      })
    })
    .catch(err => {
      errorHandler(res, err);
    });
};
