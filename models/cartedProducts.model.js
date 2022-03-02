const mongoose = require("mongoose");

const carted__productsSchema = mongoose.Schema({
  cartedProduct: {
    type: Object,
    trim: true,
    require: true,
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
    require: true,
    lowercase: true,
  },
});

// make this schema a data model
const Carted__Products = mongoose.model(
  "Carted__Products",
  carted__productsSchema
);

module.exports = Carted__Products;
