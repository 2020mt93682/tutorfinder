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
  console.log("req", user);
  res.json("user login");
});

// users/authenticate


app.post('/api/authenticate', (req, res) => {
  const user = req.body.user;
  // console.log("user" , user)
  // users.push(user);
  res.json("user login");
});

app.get('/', (req, res) => {
  res.send('App Works !!!!');
});

app.post('/api/addUser', (req, res) => {
  const user = req.body;
  // users.push(user);
  console.log("req", user);
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
      password: 'Z5uzX9DkGm',
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
});

app.get('/api/get-role', (req, res) => {
  try {
    mysql.createConnection({
      host: 'remotemysql.com',
      port: 3306,
      user: 'svQtxIxilZ',
      database: 'svQtxIxilZ',
      password: 'Z5uzX9DkGm',
    })
      .then(conn => conn.query('select * from role'))
      .then(([rows, fields]) => {
        console.log(rows);
        res.json(rows);
      });
  }
  catch (err) {
    console.log("ERROR");
    res.json(err);
  }
});

app.get('/api/get-subject', (req, res) => {
  try {
    mysql.createConnection({
      host: 'remotemysql.com',
      port: 3306,
      user: 'svQtxIxilZ',
      database: 'svQtxIxilZ',
      password: 'Z5uzX9DkGm',
    })
      .then(conn => conn.query('select * from subject'))
      .then(([rows, fields]) => {
        console.log(rows);
        res.json(rows);
      });
  }
  catch (err) {
    console.log("ERROR");
    res.json(err);
  }
});

app.get('/api/get-tutor', (req, res) => {
  try {
    mysql.createConnection({
      host: 'remotemysql.com',
      port: 3306,
      user: 'svQtxIxilZ',
      database: 'svQtxIxilZ',
      password: 'Z5uzX9DkGm',
    })
      .then(conn => conn.query(`select role_id from role where name = 'tutor'`))
      .then(([rows, fields]) => {
        console.log(rows);
        res.json(rows);
      });
  }
  catch (err) {
    console.log("ERROR");
    res.json(err);
  }
});

app.post("/insert-user-grade-subjects", (req, res) => {
  console.log(req.body)
  try {
    mysql.createConnection({
      host: 'remotemysql.com',
      port: 3306,
      user: 'svQtxIxilZ',
      database: 'svQtxIxilZ',
      password: 'Z5uzX9DkGm',
    })
      .then(conn => conn.query(`insert into user_grade_subjects (user_id, grade,subject_name,enroll_date) VALUES (?,?,?)`,
        [req.body.user_id, req.body.grade, req.body.enroll_date],
        (error, results) => {
          if (error)
            return res.json({ error: error });
            else
            return true;
        }));
  }
  catch (err) {
    console.log("ERROR");
    res.json(err);
  }
});

app.post("/insert-user-detail", (req, res) => {
  console.log(req.body)
  try {
    mysql.createConnection({
      host: 'remotemysql.com',
      port: 3306,
      user: 'svQtxIxilZ',
      database: 'svQtxIxilZ',
      password: 'Z5uzX9DkGm',
    })
      .then(conn => conn.query(`insert into user (userid, phone, password, first_name, last_name, email, address_line1, address_line2, city, state, zipcode, role_id)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
        [req.body.userid, req.body.phone, req.body.password, req.body.first_name, req.body.last_name, req.body.email, req.body.address_line1, req.body.address_line2, req.body.city, req.body.state, req.body.zipcode, req.body.role_id],
        (error, results) => {
          if (error)
            return res.json({ error: error });
            else
            return true;
        }));
  }
  catch (err) {
    console.log("ERROR");
    res.json(err);
  }
});