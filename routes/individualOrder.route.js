// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  getIndividualOrder,
} = require("../controllers/individualOrder.controller");

// products get api here
router.get("/:email", getIndividualOrder);

module.exports = router;
