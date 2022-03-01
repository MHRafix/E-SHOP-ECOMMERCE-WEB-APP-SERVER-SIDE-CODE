// internal imports are here
const products__collection = require("../models/products.model");

// get products api controller here
exports.get__catgorize__products = async (req, res, next) => {
  try {
    const cat = req.params.category;
    const query = { category: cat };
    const categorize__products = await products__collection.find(query);
    res.send(categorize__products);
  } catch (err) {
    next(err);
  }
};
