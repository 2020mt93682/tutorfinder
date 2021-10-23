export class dashboard {

    public async getGrades(){
        try{
            return await connection.query(
                'select * from grade',
                function(err: any, results: any, fields: any) {
                  console.log(results); // results contains rows returned by server
                  console.log(fields); // fields contains extra meta data about results, if available
                }
              );

        }
        catch(err: any){

        }
    }

}

// app.get('/api/get-grade', (req, res) => {
//     try {
//       const grade = connection.query(
//         'select * from grade',
//         function (err, results, fields) {
//           console.log(results); // results contains rows returned by server
//           console.log(fields); // fields contains extra meta data about results, if available
//         }
//       );
//       console.log("Grade -> " + grade);
//     }
//     catch (err) {

//     }
//     res.json("get grade");
//   });