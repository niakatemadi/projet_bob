const sportController = require('../controllers/sportController.js');
const router = require('express').Router();

router.get("/getSportsOfUser", sportController.getSportsOfUser);

module.exports = router;