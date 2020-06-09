const express = require('express');

const {
    index,
    createProyecto,
    updateProyecto,
    deleteProyecto,
    getProyecto,
  } = require('../../controllers/proyecto');
 // const { verifyToken } = require('../../../helpers/auth/isAuth');
  
  const router = express.Router();
  
  router.get('/' , index);
  router.get('/:pk1', getProyecto);
  router.post('/', createProyecto);
  router.put('/:pk1', updateProyecto);
  router.delete('/:pk1', deleteProyecto);
  
  module.exports = router;