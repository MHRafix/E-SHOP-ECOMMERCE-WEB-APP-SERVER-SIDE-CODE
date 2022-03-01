// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__carted__products,
} = require("../controllers/cartProducts.controller");

// products get api here
router.get("/:email", get__carted__products);

module.exports = router;
