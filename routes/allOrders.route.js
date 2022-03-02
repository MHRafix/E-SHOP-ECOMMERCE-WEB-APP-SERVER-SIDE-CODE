// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  post__ordered__products,
} = require("../controllers/orderedProducts.controller");

// products get api here
router.post("/", post__ordered__products);

module.exports = router;
