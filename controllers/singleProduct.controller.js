const ObjectId = require("mongodb").ObjectId;

// internal imports are here
const productsCollection = require("../models/products.model");
// get products api controller here
exports.getSingleProduct = async (req, res, next) => {
  try {
    const uniqueId = req.params.productId;
    console.log(uniqueId);
    const query = { _id: ObjectId(uniqueId) };
    const single__product = await productsCollection.find(query);
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
