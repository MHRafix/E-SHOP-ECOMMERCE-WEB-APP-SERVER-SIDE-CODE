// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__wish__list__products,
} = require("../controllers/wishListProducts.controller");

// products get api here
router.get("/:email", get__wish__list__products);

module.exports = router;
