const userController = require('../controllers/userController.js');
const router = require('express').Router();

// Créer un utilisateur
router.post('/createUsername', userController.createUser);
router.get("/getusers", userController.getUsers);
router.get("/get_users_who_practice_musculation", userController.getUsersWhoPracticeMusculation);
router.get("/get_current_user/:id", userController.getCurrentUserDatas);
router.get("/get_users_with_burger_car", userController.getUsersWithBurgerCar);

module.exports = router;