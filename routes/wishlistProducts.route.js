// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  getWishListProducts,
} = require("../controllers/wishListProducts.controller");

// products get api here
router.get("/:email", getWishListProducts);

module.exports = router;
