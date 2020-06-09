const usuario = require('../../models/usuario');

module.exports ={
    async index(req, res) {
       // console.log("hola k ace");
        const allUsers = await usuario.getAll();
        console.log(allUsers)
        res.status(200).json(allUsers);
      },
      async createUsuario(req, res) {
        res.status(200).json({res:'Usuario insertado'});
      },
      async updateUsuario(req, res) {
        res.status(200).json({res:'Usuario actualizado'});
      },
      async deleteUsuario(req, res) {
        res.status(200).json({res:'Usuario eliminado'});
      },
      async getUsuario(req, res) {
        res.status(200).json({res:'obtener Usuario'});
      },
      async login(req, res) {
        res.status(200).json({res:'login exitoso'});
      },
};