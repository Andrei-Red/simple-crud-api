const checkRequiredFields = (person) => {
  let answer = true;

  if (typeof person.name !== "string") {
    answer = false;
  } else if (typeof person.age !== "number") {
    answer = false;
  } else if (!Array.isArray(person.hobbies)) {
    answer = false;
  } else if (!checkForStringArray(person.hobbies)) {
    answer = false;
  }

  return answer;
};

const checkForStringArray = (arr) => {
  if (arr.length === 0) {
    return true;
  }

  let answer = true;
  arr.forEach((hobby) => {
    if (typeof hobby !== "string") {
      answer = false;
    }
  });
  return answer;
};

module.exports = checkRequiredFields;
