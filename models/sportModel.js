module.exports = (sequelize, DataTypes) => {

    const Sport = sequelize.define("sports", {

        nom: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Sport
}