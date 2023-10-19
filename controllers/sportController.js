const {db, sequelize, QueryTypes} = require("../models");

const Sports = db.sport;

const getSportsOfUser = async (req, res) => {
    const userId = req.params.id;
    console.log(userId)
    const SportsUser = await sequelize.query('CALL ObtenirLesSportsDeLutilisateur(:userId)', {replacements: {userId}, type: sequelize.QueryTypes.RAW,})
    res.status(200).send(SportsUser);
};

module.exports = {
    getSportsOfUser
}