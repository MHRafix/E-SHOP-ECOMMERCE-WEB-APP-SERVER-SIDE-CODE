// internal imports are here
const wishlistProducts = require("../models/wishlistProducts.model");

// get products api controller here
exports.getWishListProducts = async (req, res, next) => {
  try {
    const query = { userEmail: req.params.email };
    const wishlist__products = await wishlistProducts.find(query);
    res.send(wishlist__products);
  } catch (err) {
    next(err);
  }
};
