const {db, sequelize, QueryTypes} = require("../models");

const Users = db.user;
// créer un utilisateur

const createUser = async(req,res) => {

    let info = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        email: req.body.email
    };

    const parent = await Users.create(info);
    res.status(200).send(parent);
};

const getUsers = (req,res) => {

    const parent = Users.findAll({});
    res.status(200).send(parent);
};

const getUsersWhoPracticeMusculation = async(req,res) => {

   const response = await sequelize.query("SELECT u.nom, u.prenom FROM users as u JOIN user_sports as us ON u.id = us.idUser JOIN sports as s ON us.idSport = s.id WHERE s.nom = 'musculation' GROUP BY u.nom", { type: QueryTypes.SELECT })
   console.log("respoooonse", response);
   res.status(200).send(response);
};

module.exports = {
    createUser,
    getUsers,
    getUsersWhoPracticeMusculation
}