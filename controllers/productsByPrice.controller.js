// external imports are here
const createError = require("http-errors");

// internal imports are here
const products__collection = require("../models/products.model");

// get products api controller here
exports.get__products__by__price = async (req, res, next) => {
  try {
    const all__products = await products__collection.find();
    const minimum__price = req.params.minPrice;
    const maximum__price = req.params.maxPrice;
    const filtered__products = all__products.filter(
      (product) =>
        product.salePrice >= Number(minimum__price) &&
        product.salePrice <= Number(maximum__price)
    );
    res.send(filtered__products);
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
