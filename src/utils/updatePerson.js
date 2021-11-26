const updatePerson = (arr, person) => {
  const currentPerson = arr.find((p) => p.id === person.id);

  if (!currentPerson) {
    return null;
  }
  currentPerson.name = person.name;
  currentPerson.age = person.age;
  currentPerson.hobbies = person.hobbies;

  return currentPerson;
};

module.exports = updatePerson;
