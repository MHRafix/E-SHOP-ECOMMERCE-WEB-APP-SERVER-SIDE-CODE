// internal imports are here
const products__collection = require("../models/products.model");

// get products api controller here
exports.get__sale__products = async (req, res, next) => {
  try {
    const sale__products = await products__collection.find();
    res.send(sale__products);
  } catch (err) {
    next(err);
  }
};
