// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__search__result,
} = require("../controllers/searchedProducts.controller");

// products get api here
router.get("/:productTitle", get__search__result);

module.exports = router;
