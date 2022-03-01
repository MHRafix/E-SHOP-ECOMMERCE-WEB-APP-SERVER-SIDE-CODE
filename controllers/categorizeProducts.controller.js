// external imports are here
const createError = require("http-errors");

// internal imports are here
const productsCollection = require("../models/products.model");

// get products api controller here
exports.getCatgorizeProducts = async (req, res, next) => {
  try {
    const cat = req.params.category;
    const query = { category: cat };
    const categorize__products = await productsCollection.find(query);
    res.send(categorize__products);
  } catch (err) {
    next(err);
  }
};
