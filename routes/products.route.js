// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const { get__products } = require("../controllers/products.controller");

// products get api here
router.get("/", get__products);

module.exports = router;
