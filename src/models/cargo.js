const db = require('../../dbConnection');

const cargo ={
    async getAll(){
        const findAllQuery = 'SELECT * FROM cargos where cargoEstado = ?';
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
        const findAllQuery = 'SELECT * FROM cargos where idCargo = ?';
        //console.log("hola k ace 2 " + findAllQuery);
        try {
        const rows = await db.query(findAllQuery, 10000, [id]);
        //console.log(rows);
        return { success: true, data: rows };
        } catch (error) {
        return { success: false, data: error };
        }
    },
    async post(data){
        const insertQuery = `INSERT INTO cargos(
            cargoDesc, cargoEstado, usuarioId)
            VALUES (?,?,?)`;
        const arrayData = [
        data.cargo_desc,
        data.cargo_estado,
        data.user_id,
        ];
        try {
            const { rows } = await db.query(insertQuery, 10000, arrayData);
            console.log("after query")
            return { success: true, data: rows };
        } catch (error) {
       // console.log('Error', error);
        return { success: false, data: error };
        }
    },
    async put(data, id){
        const updateQuery = `UPDATE cargos 
        SET  cargo_desc = ?, cargo_estado = ?, user_id = ?
        WHERE cargoId = ?; SELECT LAST_UPDATED_ID`;
        const arrayData = [
            data.cargo_desc,
            data.cargo_estado,
            data.user_id,
            id.pk1,
        ];
        try {
            const { rows } = await db.query(updateQuery, 10000, arrayData);
            return { success: true, data: rows };
        } catch (error) {
            //logger.error('Error', error);
            return { success: false, data: error };
        }
    },
    async delete(id){
        const updateQuery = `UPDATE cargos 
        SET  cargo_estado = 2 WHERE cargoId = ?; SELECT LAST_UPDATED_ID`;
        const arrayData = [
            id.pk1,
        ];
        try {
            const { rows } = await db.query(updateQuery, 10000, arrayData);
            return { success: true, data: rows };
        } catch (error) {
            //logger.error('Error', error);
            return { success: false, data: error };
        }
    },
}
module.exports = cargo;