// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const { getCartedProducts } = require("../controllers/cartProducts.controller");

// products get api here
router.get("/:email", getCartedProducts);

module.exports = router;
