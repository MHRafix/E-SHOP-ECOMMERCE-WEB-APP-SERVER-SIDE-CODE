// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__sale__products,
} = require("../controllers/saleProducts.controller");

// products get api here
router.get("/", get__sale__products);

module.exports = router;
