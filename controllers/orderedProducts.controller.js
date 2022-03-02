// internal imports are here
const ordered__products__collection = require("../models/individualOrder.model");

// get products api controller here
exports.post__ordered__products = async (req, res, next) => {
  try {
    const ordered__products = req.body;
    const order__result = await ordered__products__collection.insertOne(
      ordered__products
    );
    res.json(order__result);
  } catch (err) {
    next(err);
  }
};
