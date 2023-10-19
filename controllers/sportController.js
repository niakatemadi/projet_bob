const {db, sequelize, QueryTypes} = require("../models");

const Sports = db.sport;

const getSportsOfUser = async (req, res) => {
    const userId = req.params.id;
    const SportsUser = await sequelize.query('CALL ObtenirLesSportsDeLutilisateur (:userId)', {remplacements: { userId: userId }})
    res.status(200).send(SportsUser);
};

module.exports = {
    getSportsOfUser
}