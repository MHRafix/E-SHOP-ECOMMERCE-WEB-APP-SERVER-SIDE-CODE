const mongoose = require("mongoose");

const wishlist__productsSchema = mongoose.Schema({
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
const wishlist__products = mongoose.model(
  "wishlist__products",
  wishlist__productsSchema
);

module.exports = wishlist__products;
