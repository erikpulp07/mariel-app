const  mysql = require('mysql');

//console.log(process.env.DB_CONN_HOST)
var pool = mysql.createConnection({
    host     : process.env.DB_CONN_HOST,
    user     : process.env.DB_CONN_USER,
    password : process.env.DB_CONN_PASS,
    database : process.env.DB_CONN_DATABASE
  });
   
  pool.connect();


module.exports = {
  /**
   * DB Query
   * @param {string} text
   * @param {Array} params
   * @returns {object} object
   */
  query(text, timeout, params) {
    console.log("hola k ace 3 " + params)
    return new Promise((resolve, reject) => {
        pool.query({
          sql: text,
          timeout: timeout, // 40s
        },
        params,
        function (err, results, fields) {
         
         if (err) {
          // console.log("get error: " + err)
           reject(err);
         }
          
       // console.log("hola k ace final " + results)
      //  resolve(JSON.stringify(results))
        resolve(results)
          
            // error will be an Error if one occurred during the query
            // results will contain the results of the query
            // fields will contain information about the returned results fields (if any)
        }
      );
    });
   
  },
  /**
   * DB Query
   * @param {string} text
   * @param {Array} params
   * @returns {object} object
   */
  queryCb(text, params, cb, error) {
    pool
      .query(text, params)
      .then(res => {
        cb(res);
      })
      .catch(err => {
        error(err);
        pool.end();
      });
  },
  closeConn(){
      pool.end();
  }
};