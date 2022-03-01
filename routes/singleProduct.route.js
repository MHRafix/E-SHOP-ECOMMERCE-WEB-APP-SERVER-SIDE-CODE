// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const { getSingleProduct } = require("../controllers/singleProduct.controller");

// products get api here
router.get("/:productId", getSingleProduct);

module.exports = router;
