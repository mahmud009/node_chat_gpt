var express = require("express");
var router = express.Router();

router.get("/books", function (req, res) {
  let books = [
    {
      id: 1,
      name: "Foo",
      author: "Bar",
    },
    {
      id: 2,
      name: "Foo",
      author: "Bar",
    },
    {
      id: 3,
      name: "Foo",
      author: "Bar",
    },
    {
      id: 4,
      name: "Foo",
      author: "Bar",
    },
  ];

  res.send(books).status(200);
});

module.exports = router;
