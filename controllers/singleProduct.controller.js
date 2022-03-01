const ObjectId = require("mongodb").ObjectId;

// internal imports are here
const products__collection = require("../models/products.model");
// get products api controller here
exports.get__single__product = async (req, res, next) => {
  try {
    const unique__id = req.params.productId;
    const query = { _id: ObjectId(unique__id) };
    const single__product = await products__collection.find(query);
    let selected__product;
    for (const product of single__product) {
      selected__product = product;
    }
    if (selected__product) {
      res.send(selected__product);
    }
  } catch (err) {
    next(err);
  }
};
