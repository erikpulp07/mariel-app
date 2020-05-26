const empleado = require('../../models/empleado');

module.exports ={
    async index(req, res) {
        res.status(200).json({res:'lista de empleados'});
      },
      async createEmpleado(req, res) {
        res.status(200).json({res:'empleado insertado'});
      },
      async updateEmpleado(req, res) {
        res.status(200).json({res:'empleado actualizado'});
      },
      async deleteEmpleado(req, res) {
        res.status(200).json({res:'empleado eliminado'});
      },
      async getEmpleado(req, res) {
        res.status(200).json({res:'obtener empleado'});
      },

};