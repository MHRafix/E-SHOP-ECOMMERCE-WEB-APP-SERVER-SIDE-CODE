// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  getSearchResult,
} = require("../controllers/searchedProducts.controller");

// products get api here
router.get("/:productTitle", getSearchResult);

module.exports = router;
