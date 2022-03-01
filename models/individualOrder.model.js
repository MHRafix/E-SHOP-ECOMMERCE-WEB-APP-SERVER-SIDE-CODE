const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  orderedProducts: {
    type: Array,
    required: true,
  },
  customerInfo: {
    type: Object,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  grandTotalPrice: {
    type: String,
    trim: true,
    required: true,
  },
  status: {
    type: String,
    enum: ["PENDDING", "COMPLETED", "PAID"],
    required: true,
  },
});

// make this schema a data model
const Ordered__Products = mongoose.model("Ordered__Products", orderSchema);

module.exports = Ordered__Products;
