// external imports are here
const createError = require("http-errors");

// internal imports are here
const productsCollection = require("../models/products.model");

// get products api controller here
exports.getSearchResult = async (req, res, next) => {
  try {
    const all__products = await productsCollection.find();
    const searchText = req.params.productTitle;
    const searched__products = all__products.filter((products) =>
      products.productTitle.toLowerCase().includes(searchText.toLowerCase())
    );
    res.send(searched__products);
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
