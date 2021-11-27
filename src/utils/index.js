const isValidPersonId = require("./isValidPersonId");
const updatePerson = require("./updatePerson");
const checkRequiredFields = require("./checkRequiredFields");
const deletePerson = require("./deletePerson");
const findPersonById = require("./findPersonById");
const checkPersonIdInUrl = require("./checkPersonIdInUrl");

module.exports = {
  isValidPersonId,
  updatePerson,
  checkRequiredFields,
  deletePerson,
  findPersonById,
  checkPersonIdInUrl,
};
