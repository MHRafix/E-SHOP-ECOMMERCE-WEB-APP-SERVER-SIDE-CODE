// internal imports are here
const products__collection = require("../models/products.model");

// get products api controller here
exports.get__new__arrival__products = async (req, res, next) => {
  try {
    const new__arrival__products = await products__collection.find().limit(8);
    res.send(new__arrival__products);
  } catch (err) {
    next(err);
  }
};
