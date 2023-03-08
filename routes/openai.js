var express = require("express");
var router = express.Router();
const { createCompletion } = require("../services/openai");

/* GET users listing. */
router.get("/createCompletion", async function (req, res, next) {
  let response = await createCompletion();
  res.send(response.data);
});

module.exports = router;
