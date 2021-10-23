const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const cors = require('cors');

/* const dashboardLocal = require('./db/dashboard');
console.log(typeof dashboardLocal.getGrades); // => 'function' */
const mysql = require('mysql2/promise'); // or require('mysql2').createConnectionPromise

app.use(cors());

const users = [];

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body;
  // users.push(user);
    console.log("req" , user);
    res.json("user login");
});

// users/authenticate


app.post('/api/authenticate', (req, res) => {
  const user = req.body.user;
 // console.log("user" , user)
 // users.push(user);
  res.json("user login");
});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.post('/api/addUser', (req, res) => {
  const user = req.body;
  // users.push(user);
    console.log("req" , user);
    res.json("user added");
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

app.get('/api/get-grade', (req, res) => {
    try {
      mysql.createConnection({
        host: 'remotemysql.com',
        port: 3306,
        user: 'svQtxIxilZ',
        database: 'svQtxIxilZ',
        password : 'Z5uzX9DkGm',
      })
      .then(conn => conn.query('select * from grade'))
      .then(([rows, fields]) => {
      console.log(rows);
      res.json(rows);
      });

      /* const grade = connection.query(
        'select * from grade',
        function (err, results, fields) {
          console.log(results);
          console.log(fields);
        }
      ); */
      //const getGrade = require('getGrades');
      //console.log(typeof dashboardLocal.getGrades);
      //const grade = dashboardLocal.getGrades();
      //const grade = getGrade();
      //console.log("Grade -> " + grade);
      //console.log("Grade -> " + grade[0]);
      //console.log(typeof grade[0].grade);
      //console.log("Grade -> " + grade);
      //example1();
      /* async function example1 () {
        const mysql = require('mysql2/promise');
        const conn = await mysql.createConnection({
          host: 'remotemysql.com',
          port: 3306,
          user: 'svQtxIxilZ',
          database: 'svQtxIxilZ',
          password : 'Z5uzX9DkGm',
        });
        const [rows, fields] = await conn.execute('select grade from grade', [2, 2]);
        console.log("ROWS 1: " + rows[0][0].grade);
        //console.log("ROWS 2: " + rows[1]);
        console.log("fields 1: " + fields[0]);
        //console.log("fields 2: " + fields[1]);
        await conn.end();
      } */
    }
    catch (err) {
      console.log("ERROR");
      res.json(err);
    }
    //res.json("get grade");
  });
