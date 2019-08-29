const Order = require('../models/Order')
const errorHandler = require('../utils/errorHandler')


module.exports.getAll = async (req, res) => {
  try {
    const orders = Order.find({}).exec();
    res.status(201).json(orders)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async (req, res) => {
  try {
    const lastOrder = await Order
      .findOne({})
      .sort({date: -1})

    const maxOrder = lastOrder ? lastOrder.order : 0

    const order = await new Order({
      list: req.body.list,
      order: maxOrder + 1
    }).save()

    res.status(201).json(order)
  } catch (e) {
    errorHandler(res, e)
  }
}