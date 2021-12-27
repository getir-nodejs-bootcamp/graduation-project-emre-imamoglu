const express = require("express");
const recordRoute = require("./record.routes");
require("dotenv").config();
const router = express.Router();

const defaultRoutes = [
  {
    path: "/records",
    route: recordRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
