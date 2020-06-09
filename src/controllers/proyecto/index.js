const proyecto = require('../../models/proyecto');

module.exports ={
    async index(req, res) {
        res.status(200).json({res:'lista de Proyectos'});
      },
      async createProyecto(req, res) {
        res.status(200).json({res:'Proyecto insertado'});
      },
      async updateProyecto(req, res) {
        res.status(200).json({res:'Proyecto actualizado'});
      },
      async deleteProyecto(req, res) {
        res.status(200).json({res:'Proyecto eliminado'});
      },
      async getProyecto(req, res) {
        res.status(200).json({res:'obtener Proyecto'});
      },

};