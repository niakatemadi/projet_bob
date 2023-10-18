const {db, sequelize, QueryTypes} = require("../models");

const Voitures = db.voiture;

const createVoiture = async(req,res) => {
    let info = {
        immatriculation: req.body.immatriculation,
        marque: req.body.marque,
        modele: req.body.modele,
        user_id: req.body.user_id
    };
    const parent = await Voitures.create(info);
    res.status(200).send(parent);
};

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
    getVoiture,
    createVoiture
}