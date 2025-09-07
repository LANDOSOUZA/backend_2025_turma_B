const express = require('express');
const router = express.Router();
const {
  getHome,
  getPersonagens,
  getPersonagemById,
  getMultiplosPersonagens
} = require('../controllers/personagens.controller');

router.get('/', getHome);
router.get('/personagens', getPersonagens);
router.get('/personagem/:id', getPersonagemById);
router.get('/multiplospersonagens/:ids', getMultiplosPersonagens);

module.exports = router;
