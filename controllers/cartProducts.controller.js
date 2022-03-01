// internal imports are here
const cartedProductsCollection = require("../models/cartedProducts.model");

// get products api controller here
exports.getCartedProducts = async (req, res, next) => {
  try {
    const query = { userEmail: req.params.email };
    const cart__products = await cartedProductsCollection.find(query);
    res.send(cart__products);
  } catch (err) {
    next(err);
  }
};
