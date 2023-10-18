const userController = require('../controllers/userController.js');
const router = require('express').Router();

// Créer un utilisateur
router.post('/createUsername', userController.createUser);
router.get("/getusers", userController.getUsers);
router.get("/get_users_who_practice_musculation", userController.getUsersWhoPracticeMusculation);

module.exports = router;