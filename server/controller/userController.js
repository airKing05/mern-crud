

const getUsers = (req, res) => {
    res.status(200).json('hello form the server side')
};
const addUser = (req, res) => {
    res.status(200).json('hello form the server side, this is addUser calling')
};

module.exports = getUsers, addUser; 