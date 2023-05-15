var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
let dotenv = require("dotenv");
let cors = require("cors");
dotenv.config();
const PORT = 8100;
const openaiRouter = require("./routes/openai");
const libraryRouter = require("./routes/liibrary");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/openai", openaiRouter);
app.use("/library", libraryRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

app.listen(PORT, () => {
  console.log(`Chat gpt server is running on ${PORT}`);
});

module.exports = app;
