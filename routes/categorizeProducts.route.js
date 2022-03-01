// external improts are here
const express = require("express");
const {
  getCatgorizeProducts,
} = require("../controllers/categorizeProducts.controller");
const router = express.Router();

// internal exports are here

// products get api here
router.get("/:category", getCatgorizeProducts);

module.exports = router;
