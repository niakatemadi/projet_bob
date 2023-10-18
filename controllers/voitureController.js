const {db, sequelize, QueryTypes} = require("../models");

const Voitures = db.voiture;

const getVoitures = async (req,res) => {
    const parent = await Voitures.findAll({});
    res.status(200).send(parent);
};

const getVoiture = async (req,res) => {
    const voitureId = req.params.id;
    const voitureDatas = await sequelize.query("SELECT * FROM voitures WHERE id =:voitureId", {
        replacements: { voitureId },
        type: sequelize.QueryTypes.SELECT,
    }); 
    res.status(200).send(voitureDatas);
};

module.exports = {
    getVoitures,
    getVoiture
}