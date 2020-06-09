const express = require('express');

const {
    index,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    getUsuario,
    login,
  } = require('../../controllers/usuario');
 // const { verifyToken } = require('../../../helpers/auth/isAuth');
  
  const router = express.Router();
  
  router.get('/' , index);
  router.get('/:pk1', getUsuario);
  router.get('/login', login)
  router.post('/', createUsuario);
  router.put('/:pk1', updateUsuario);
  router.delete('/:pk1', deleteUsuario);
  
  module.exports = router;