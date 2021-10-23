const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const cors = require('cors');

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

app.get('/getGrades', (req,res) => {
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

app.get('/getGrades', (req,res) => {
  res.json("user login");
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
    }
    catch (err) {
      console.log("ERROR");
      res.json(err);
    }
    //res.json("get grade");
  });
