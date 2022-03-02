// internal imports are here
const wishlist__products = require("../models/wishlistProducts.model");

// get products api controller here
exports.get__wish__list__products = async (req, res, next) => {
  try {
    const query = { userEmail: req.params.email };
    const wishlist__product = await wishlist__products.find(query);
    res.send(wishlist__product);
  } catch (err) {
    next(err);
  }
};
