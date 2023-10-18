const {db, sequelize, QueryTypes} = require("../models");

const Voitures = db.voiture;

const getVoitures = async (req,res) => {
    const parent = await Voitures.findAll({});
    res.status(200).send(parent);
};

module.exports = {
    getVoitures
}