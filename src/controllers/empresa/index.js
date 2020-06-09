const empresa = require('../../models/empresa');

module.exports ={
    async index(req, res) {
        res.status(200).json({res:'lista de Empresas'});
      },
      async createEmpresa(req, res) {
        res.status(200).json({res:'Empresa insertado'});
      },
      async updateEmpresa(req, res) {
        res.status(200).json({res:'Empresa actualizado'});
      },
      async deleteEmpresa(req, res) {
        res.status(200).json({res:'Empresa eliminado'});
      },
      async getEmpresa(req, res) {
        res.status(200).json({res:'obtener Empresa'});
      },

};