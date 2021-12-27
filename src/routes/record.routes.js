const express = require("express");
const router = express.Router();
const { recordController } = require("../controllers/index");
const {recordValidation} = require("../validations/record.validation")
const { validate } = require('express-validation')

router.post("/",validate(recordValidation),recordController.getRecords);

module.exports = router;
