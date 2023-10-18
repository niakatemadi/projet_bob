module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("users", {

        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prenom: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        }
    })

    return User
}