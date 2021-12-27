const { recordService } = require("../services/index");
const { customResponse } = require("../utils/customResponse");

// Will call the service and pass the request body
const getRecords = async (req, res) => {
  const records = await recordService.getRecords(req.body);
  res.status(200).send(customResponse(0, "Success", "records", records));
};

module.exports = {
  getRecords,
};
