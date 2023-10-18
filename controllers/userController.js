db = require("../config/db.config.js");

const Users = db.user;
// créer un utilisateur

const createUser = async(req,res) => {

    console.log("inside req", req.body);

    let info = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        email: req.body.email
    };
    console.log('datasss'+ info);
    const parent = await Users.create(info);
    res.status(200).send(parent);
    
};

const getUsers = (req,res) => {

    const parent = Users.findAll({});
    res.status(200).send(parent);
};

module.exports = {
    createUser,
    getUsers
}