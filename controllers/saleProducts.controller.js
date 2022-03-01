// internal imports are here
const productsCollection = require("../models/products.model");

// get products api controller here
exports.getSaleProducts = async (req, res, next) => {
  try {
    const sale__products = await productsCollection.find();
    res.send(sale__products);
  } catch (err) {
    next(err);
  }
};
