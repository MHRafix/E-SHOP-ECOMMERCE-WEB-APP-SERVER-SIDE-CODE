// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const { getSaleProducts } = require("../controllers/saleProducts.controller");

// products get api here
router.get("/", getSaleProducts);

module.exports = router;
