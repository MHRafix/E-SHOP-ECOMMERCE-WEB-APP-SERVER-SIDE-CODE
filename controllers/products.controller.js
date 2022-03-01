// external imports are here
const createError = require("http-errors");

// internal imports are here
const productsCollection = require("../models/products.model");

// get products api controller here
exports.getProducts = async (req, res, next) => {
  try {
    const all__products = await productsCollection.find();
    res.send(all__products);
  } catch (err) {
    next(err);
  }
};

// post products api controller here
exports.postProducts = async (req, res, next) => {
  try {
    const product__data = req.body;
    const result = await productsCollection.insertOne(product__data);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
