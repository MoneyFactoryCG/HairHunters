const Obucheniye = require('../models/Obucheniye');
const errorHandler = require('../utils/errorHandler');
const fs = require('fs');

module.exports.getDate = async (req, res) => {
  try {
    const rawdata = fs.readFileSync('data/date.json');
    const date = JSON.parse(rawdata);
    res.status(201).json(date);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.setDate = async (req, res) => {
  try {
    const rawdata = fs.readFileSync('data/date.json');
    const date = JSON.parse(rawdata);

    date.courses_date = req.date;

    if (Obucheniye(date)) {
      fs.writeFileSync('data/date.json', date);
      res.status(201).json(date);
    } else {
      const error = new Error(
        'Date format incorrect. Use dd.mm.yyyy',
      );
      throw error;
    }
  } catch (e) {
    errorHandler(res, e);
  }
};
