// internal imports are here
const carted__products__collection = require("../models/cartedProducts.model");

// get products api controller here
exports.get__carted__products = async (req, res, next) => {
  try {
    const query = { userEmail: req.params.email };
    const cart__products = await carted__products__collection.find(query);
    res.send(cart__products);
  } catch (err) {
    next(err);
  }
};
