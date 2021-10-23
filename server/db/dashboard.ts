import { connection } from "./mysql-conn";

export class dashboard {

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

}