const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { validationHandler } = require("./middlewares/validate");
const { customResponse } = require("./utils/customResponse");
const routes = require("./routes/index");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {});
  }).catch(e => console.log(e));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", routes);
app.use(validationHandler);
app.all("*", (req, res) => {
  res
    .status(404)
    .send(
      customResponse(
        404,
        "Not Found",
        "details",
        "URL You are looking for is invalid"
      )
    );
});

module.exports = {
  app,
};
