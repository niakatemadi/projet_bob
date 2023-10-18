module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {

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