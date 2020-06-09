const express = require('express');

const {
    index,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado,
    getEmpleado,
  } = require('../../controllers/empleado');
 // const { verifyToken } = require('../../../helpers/auth/isAuth');
  
  const router = express.Router();
  
  router.get('/' , index);
  router.get('/:pk1', getEmpleado);
  router.post('/', createEmpleado);
  router.put('/:pk1', updateEmpleado);
  router.delete('/:pk1', deleteEmpleado);
  
  module.exports = router;