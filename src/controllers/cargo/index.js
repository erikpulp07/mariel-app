const cargo = require('../../models/cargo');

module.exports ={
    async index(req, res) {
         // console.log("hola k ace");
         const allcargos = await cargo.getAll();
         //console.log(allcargos)
         res.status(200).json(allcargos);
      },
      async createCargo(req, res) {
        console.log("post cargo " + req.body.cargo_desc)
        const postCargo = await cargo.post(req.body);
        res.status(200).json(postCargo);
      },
      async updateCargo(req, res) {
        const putCargo = await cargo.put(req.body, req.params.pk1);
        res.status(200).json(putCargo);
      },
      async deleteCargo(req, res) {
        const deleteCargo = await cargo.delete(req.params.pk1);
        res.status(200).json(deleteCargo);
      },
      async getCargo(req, res) {
        const allcargos = await cargo.get(req.params.pk1);
        //console.log(allcargos)
        res.status(200).json(allcargos);
      },

};