// internal imports are here
const carted__products__collection = require("../models/cartedProducts.model");

// get products api controller here
exports.post__carted__products = async (req, res, next) => {
  try {
    const carted__product = req.body;
    const result = await carted__products__collection.insertOne(
      carted__product
    );
    res.json(result);
  } catch (err) {
    next(err);
  }
};
