// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__products__by__price,
} = require("../controllers/productsByPrice.controller");

// products get api here
router.get("/:minPrice/:maxPrice", get__products__by__price);

module.exports = router;
