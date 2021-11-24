const findPersonById = (personArr, personId) => {
    return personArr.find((person) => person.id.toString() === personId.toString())
}

module.exports = findPersonById