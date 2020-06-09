const express = require('express');

const {
    index,
    createCargo,
    updateCargo,
    deleteCargo,
    getCargo,
  } = require('../../controllers/cargo');
 // const { verifyToken } = require('../../../helpers/auth/isAuth');
  
  const router = express.Router();
  
  router.get('/' , index);
  router.get('/:pk1', getCargo);
  router.post('/', createCargo);
  router.put('/:pk1', updateCargo);
  router.delete('/:pk1', deleteCargo);
  
  module.exports = router;