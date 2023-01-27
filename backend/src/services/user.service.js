const { User } = require('../models');

const createUser = async ({ name, email, password }) =>
  User.create({ name, email, password });


const getUsers = async () => User.findAll();

module.exports = {
    createUser,
    getUsers,
}
