const voitureController = require('../controllers/voitureController.js');
const router = require('express').Router();

router.get("/getvoitures", voitureController.getVoitures);
router.get("/getvoiture/:id", voitureController.getVoiture);
router.post('/createVoiture', voitureController.createVoiture);

module.exports = router;