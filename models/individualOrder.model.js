const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  orderedProducts: {
    type: Array,
    require: true,
  },
  customerInfo: {
    type: Object,
    require: true,
  },
  userEmail: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
  },
  grandTotalPrice: {
    type: String,
    trim: true,
    require: true,
  },
  status: {
    type: String,
    enum: ["PENDDING", "COMPLETED", "PAID"],
    require: true,
  },
});

// make this schema a data model
const Ordered__Products = mongoose.model("Ordered__Products", orderSchema);

module.exports = Ordered__Products;
