// example valid id: 54933f38-46e8-4933-a3dd-0a78658d8c3f
const isValidPersonId = (id) => {
    return /^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/.test(id)
}

module.exports = isValidPersonId


