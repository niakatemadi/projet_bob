module.exports = (sequelize, DataTypes) => {

    const Voiture = sequelize.define("voitures", {

        immatriculation: {
            type: DataTypes.STRING
        },
        marque: {
            type: DataTypes.STRING
        },
        modele: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.INTEGER
        }
    })

    return Voiture
}