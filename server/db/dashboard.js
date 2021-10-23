//import { connection } from "./mysql-conn";

/* export class dashboard {

    public async getGrades(){
        try{
            return await connection.query(
                'select * from grade',
                function(err: any, results: any, fields: any) {
                  console.log(results);
                  console.log(fields);
                }
              );
        }
        catch(err: any){

        }
    }

} */
var mysqlConn = require("./mysql-conn");
module.exports = {
  getGrades: async function () {
    try{
      await mysqlConn.connection.query(
          'select * from grade',
          function(err, results, fields) {
            console.log(results);
            console.log(fields);
            return results;
          }
        );
  }
  catch(err){
  }
  }
  /* getGrades: async function () {
    try{
      return await mysqlConn.connection.
      then(
        conn=> mysqlConn.connection.query(
          'select * from grade')).
          then();
  }
  catch(err){
  }
  } */
};
