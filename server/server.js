const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const cors = require('cors');

const dashboardLocal = require('./db/dashboard');
console.log(typeof dashboardLocal.getGrades); // => 'function'

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
      console.log("I AM HERE");
      /* const grade = connection.query(
        'select * from grade',
        function (err, results, fields) {
          console.log(results);
          console.log(fields);
        }
      ); */
      //const getGrade = require('getGrades');
      console.log(typeof dashboardLocal.getGrades);
      const grade = dashboardLocal.getGrades().then((result) => {
        console.log("RESULT QUERY: " + result);
      });
      //const grade = getGrade();
      //console.log("Grade -> " + grade);
      //console.log("Grade -> " + grade[0]);
      //console.log(typeof grade[0].grade);
      //console.log("Grade -> " + grade);
    }
    catch (err) {

    }
    res.json("get grade");
  });
