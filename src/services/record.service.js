const Record = require("../models/record.model");

//Will get the records using the filter data passed from the controller
const getRecords = async (requestBody) => {
  const startDate = new Date(requestBody.startDate);
  const endDate = new Date(requestBody.endDate);
  const minCount = requestBody.minCount;
  const maxCount = requestBody.maxCount;

  let records = await Record.aggregate([
    {
      $project: {
        key: 1,
        createdAt: 1,
        totalCount: {
          $reduce: {
            input: "$counts",
            initialValue: 0,
            in: {
              $sum: ["$$value", "$$this"],
            },
          },
        },
      },
    },
    {
      $match: {
        createdAt: {
          $gte: startDate,
          $lt: endDate,
        },
        totalCount: {
          $gte: minCount,
          $lte: maxCount,
        },
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
  ]);

  return records;
};

module.exports = {
  getRecords,
};
