const checkRequiredFields = (person) => {
  let answer = true;

  console.log(
    "checkForStringArray(person.hobbies)",
    checkForStringArray(person.hobbies)
  );

  if (typeof person.name !== "string") {
    answer = false;
  } else if (typeof person.age !== "number") {
    answer = false;
  } else if (!Array.isArray(person.hobbies)) {
    answer = false;
  } else if (!checkForStringArray(person.hobbies)) {
    console.log("dddd");
    answer = false;
  }

  return answer;
};

const checkForStringArray = (arr) => {
  console.log("arr", arr);
  if (arr.length === 0) {
    return true;
  }

  let answer = true;
  arr.forEach((hobbie) => {
    if (typeof hobbie !== "string") {
      answer = false;
    }
  });
  return answer;
};

module.exports = checkRequiredFields;
