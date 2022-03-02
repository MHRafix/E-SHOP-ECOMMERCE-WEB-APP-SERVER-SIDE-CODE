// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  post__carted__products,
} = require("../controllers/addToCartList.controller");

// products get api here
router.post("/", post__carted__products);

module.exports = router;
