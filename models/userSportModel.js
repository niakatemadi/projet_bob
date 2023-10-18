module.exports = (sequelize, DataTypes) => {

    const UserSport = sequelize.define("user_sport", {

        idUser: {
            type: DataTypes.INTEGER
        },
        idSport: {
            type: DataTypes.INTEGER
        }
    })

    return UserSport
}