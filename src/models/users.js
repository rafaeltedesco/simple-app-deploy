const bcrypt = require('bcrypt');

const UserSchema = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    })


    User.beforeCreate(async (user, _options) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
    })

    return User;
}


module.exports = UserSchema;