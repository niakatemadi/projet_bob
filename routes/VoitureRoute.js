const voitureController = require('../controllers/voitureController.js');
const router = require('express').Router();

router.get("/getvoitures", voitureController.getVoitures);

module.exports = router;