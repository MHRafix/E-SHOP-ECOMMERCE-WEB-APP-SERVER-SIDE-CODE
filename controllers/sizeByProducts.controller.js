// external imports are here
const createError = require("http-errors");

// internal imports are here
const products__collection = require("../models/products.model");

// get products api controller here
exports.get__size__by__products = async (req, res, next) => {
  try {
    const size__by__products = await products__collection.find();
    const req__size = req.params.size;
    let sizes__arr;
    let matched__products = [];
    for (const product of size__by__products) {
      sizes__arr = product.sizes;
      if (sizes__arr.includes(req__size) === true) {
        matched__products.push(product);
      } else {
        //Nothing here
      }
    }
    if (matched__products) {
      res.send(matched__products);
    }
  } catch (err) {
    next(err);
  }
};
