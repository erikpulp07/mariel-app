const db = require('../../dbConnection');

const Empleado ={
    async getAll(){
        const findAllQuery = 'SELECT * FROM empleados where estado = ?';
        try {
        const { rows } = await db.query(findAllQuery);
        return { success: true, data: rows };
        } catch (error) {
        logger.error('Error', error);
        return { success: false, data: error };
        }
    },
    async get(id){
        
    }
}
module.exports = Empleado;