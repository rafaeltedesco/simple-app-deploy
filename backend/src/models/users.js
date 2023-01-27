const encrypter = require('../utils/enctryper');

const UserSchema = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    },
    {
        tableName: 'users',
        timestamps: false
    })


    User.beforeCreate(async (user, _options) => {
        const hashedPassword = await encrypter.hashPassword(user.password);
        user.password = hashedPassword;
    })

    return User;
}


module.exports = UserSchema;