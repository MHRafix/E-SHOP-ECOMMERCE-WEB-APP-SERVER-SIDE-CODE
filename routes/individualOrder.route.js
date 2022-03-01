// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__individual__order,
} = require("../controllers/individualOrder.controller");

// products get api here
router.get("/:email", get__individual__order);

module.exports = router;
