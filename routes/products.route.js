// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  getProducts,
  postProducts,
} = require("../controllers/products.controller");

// products get api here
router.get("/", getProducts);

// products post api here
router.post("/", postProducts);

module.exports = router;
