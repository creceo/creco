const express = require("express");
const router = express.Router();
// start about table
// end about table

router.get("/", function(req, res) {
  res.send("rest router page!");
});

module.exports = router;
