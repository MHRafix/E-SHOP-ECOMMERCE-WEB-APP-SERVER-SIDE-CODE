// internal imports are here
const productsCollection = require("../models/products.model");

// get products api controller here
exports.getNewArrivalProducts = async (req, res, next) => {
  try {
    const new__arrival__products = await productsCollection.find().limit(8);
    res.send(new__arrival__products);
  } catch (err) {
    next(err);
  }
};
