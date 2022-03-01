// external improts are here
const express = require("express");
const {
  get__new__arrival__products,
} = require("../controllers/newArrivalProducts.controller");
const router = express.Router();

// internal exports are here

// products get api here
router.get("/", get__new__arrival__products);

module.exports = router;
