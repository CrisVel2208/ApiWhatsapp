const express = require('express');
const router = express.Router();

const whatsAppController = require('../controllers/whatsappController');


router.get('/', whatsAppController.verifyToken);
router.post('/', whatsAppController.recivedMessages);

module.exports = router;
