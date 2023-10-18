module.exports = (sequelize, DataTypes) => {

    const UserSport = sequelize.define("user_sports", {

        idUser: {
            type: DataTypes.INTEGER
        },
        idSport: {
            type: DataTypes.INTEGER
        }
    })

    return UserSport
}