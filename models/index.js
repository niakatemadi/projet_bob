const dbConfig = require('../config/db.config.js');
const {Sequelize, DataTypes} = require('sequelize');
const { QueryTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host : dbConfig.HOST,
        dialect : dbConfig.dialect,
        operatorsAliases : false

    }
);

sequelize.authenticate()
.then( () => {
    console.log('connected to Database ! ')
}).catch( (err) => {
    console.log('Error : ' + err)
})

db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./userModel.js')(sequelize, DataTypes)
db.sport = require('./sportModel.js')(sequelize, DataTypes)
db.user_sport = require('./userSportModel.js')(sequelize, DataTypes)
db.voiture = require('./voitureModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force : false})
.then( () => {
    console.log('yes re-sync done !')
})

module.exports = {db, sequelize, QueryTypes}