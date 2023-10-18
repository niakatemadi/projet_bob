module.exports = (sequelize, DataTypes) => {

    const Sport = sequelize.define("sport", {

        nom: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Sport
}