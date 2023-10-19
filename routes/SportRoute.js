const sportController = require('../controllers/sportController.js');
const router = require('express').Router();

router.get("/getSportsOfUser/:id", sportController.getSportsOfUser);

module.exports = router;