const { User } = require('../models');

const createUser = async ({ name, email, password }) =>
  User.create({ name, email, password });


module.exports = {
    createUser
}
