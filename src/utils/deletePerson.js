const findPersonById = require("./findPersonById");

const deletePerson = (arr, personID) => {
  const person = findPersonById(arr, personID);
  const personIndex = arr.indexOf(person);
  if (personIndex !== -1) {
    arr.splice(personIndex, 1);
    return true;
  }
  return false;
};

module.exports = deletePerson;
