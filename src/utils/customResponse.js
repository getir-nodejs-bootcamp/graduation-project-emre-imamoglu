//Create a Custom response template to return same structure. But
// this is more dynamic the object key of the data will be passed to the function
const customResponse = (code, message, dataName, data) => {
  return {
    code,
    msg: message,
    [dataName]: data,
  };
};

module.exports = {
  customResponse,
};
