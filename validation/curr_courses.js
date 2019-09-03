const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCurrCourseInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.credits = !isEmpty(data.credits) ? data.credits : "";
  data.teacher = !isEmpty(data.teacher) ? data.teacher : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Course title field is required";
  }

  if (Validator.isEmpty(data.credits)) {
    errors.credits = "No. of credits required";
  }

  if (Validator.isEmpty(data.teacher)) {
    errors.teacher = "Name of Teacher Required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
