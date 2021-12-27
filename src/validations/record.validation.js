const { Joi } = require("express-validation");

//Validate given request
const recordValidation = {
  body: Joi.object().keys({
    startDate: Joi.date().iso().required(),
    endDate: Joi.date().iso().greater(Joi.ref("startDate")).required(),
    minCount: Joi.number().required(),
    maxCount: Joi.number().required(),
  }),
};

module.exports = {
  recordValidation,
};
