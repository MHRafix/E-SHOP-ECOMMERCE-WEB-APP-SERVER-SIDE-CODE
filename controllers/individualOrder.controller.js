// internal imports are here
const individualOrderCollection = require("../models/individualOrder.model");

// get products api controller here
exports.getIndividualOrder = async (req, res, next) => {
  try {
    const query = { userEmail: req.params.email };
    const order__products = await individualOrderCollection.find(query);
    res.send(order__products);
  } catch (err) {
    next(err);
  }
};
