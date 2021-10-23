var mysqlConn = require("./mysql-conn");
module.exports = {
  getGrades: async function () {
    try {
      return await mysqlConn.connection()
        .then(
          conn => conn.query(
            'select grade from grade'))
        .then(([rows, fields]) => console.log("RESULTS:" + rows[0].grade));
    }
    catch (err) {
    }
  }
};
