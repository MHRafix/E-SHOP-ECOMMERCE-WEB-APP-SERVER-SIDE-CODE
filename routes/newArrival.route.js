// external improts are here
const express = require("express");
const {
  getNewArrivalProducts,
} = require("../controllers/newArrivalProducts.controller");
const router = express.Router();

// internal exports are here

// products get api here
router.get("/", getNewArrivalProducts);

module.exports = router;
