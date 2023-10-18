const userController = require('../controllers/userController.js');
const router = require('express').Router();

// Créer un utilisateur
router.post('/createUsername', userController.createUser);
router.get("/getusers", userController.getUsers);

module.exports = router;