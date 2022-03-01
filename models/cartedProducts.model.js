const mongoose = require("mongoose");

const carted__productsSchema = mongoose.Schema({
  cartedProduct: {
    type: Object,
    trim: true,
    required: true,
  },
  size: {
    type: String,
    default: "M",
  },
  quantity: {
    type: Number,
    default: 1,
  },
  userEmail: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },
});

// make this schema a data model
const Carted__Products = mongoose.model(
  "Carted__Products",
  carted__productsSchema
);

module.exports = Carted__Products;
