const db = require('../../dbConnection');

const usuario ={
    async getAll(){
        const findAllQuery = 'SELECT * FROM usuarios where userEstado = ?';
        //console.log("hola k ace 2 " + findAllQuery);
        try {
        const rows = await db.query(findAllQuery, 10000, [1]);
        //console.log(rows);
        return { success: true, data: rows };
        } catch (error) {
        return { success: false, data: error };
        }
    },
    async get(id){
        
    },
    async post(data, id){

    },
    async put(data, id){

    },
    async delete(id){

    },
    async login(user, pwd){

    }
}
module.exports = usuario;