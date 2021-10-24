const express = require('express');
const app = express(),
  bodyParser = require("body-parser");
port = 3080;

const cors = require('cors');

const mysql = require('mysql2/promise'); // or require('mysql2').createConnectionPromise
const { request } = require('http');

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

app.get('/getGrades', (req, res) => {
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

app.get('/getGrades', (req, res) => {
  res.json("user login");
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

app.post("/api/insert-user-grade-subjects", (req, res) => {
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

app.post("/api/insert-user-detail", (req, res) => {
  console.log(req.body);
  let userSubject = req.body.gradeSubjects;
  try {
    let userInsert = mysql.createConnection({
      host: 'remotemysql.com',
      port: 3306,
      user: 'svQtxIxilZ',
      database: 'svQtxIxilZ',
      password: 'Z5uzX9DkGm',
    })
      .then(conn => conn.query(`insert into user (phone, password, first_name, last_name, email, address_line1, address_line2, city, state, zipcode, role_id)
      VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
        [req.body.phoneNumber, req.body.password, req.body.firstName, req.body.lastName, req.body.email, req.body.addressLine1, req.body.addressLine2, req.body.city, req.body.state, req.body.zipcode, req.body.role],
        (error, results) => {
          if (error)
            return res.json({ error: error });
          else
            return true;
        }));

    if (userInsert == true) {
      let userid = mysql.createConnection({
        host: 'remotemysql.com',
        port: 3306,
        user: 'svQtxIxilZ',
        database: 'svQtxIxilZ',
        password: 'Z5uzX9DkGm',
      })
        .then(conn => conn.query(`select userid from user where phone = ${req.body.phone}`))
        .then(([rows, fields]) => {
          console.log(rows);
          res.json(rows);
        });

      userSubject.map(insertUserGradeSubject);
      function insertUserGradeSubject(item) {
        return mysql.createConnection({
          host: 'remotemysql.com',
          port: 3306,
          user: 'svQtxIxilZ',
          database: 'svQtxIxilZ',
          password: 'Z5uzX9DkGm',
        })
          .then(conn => conn.query(`insert into user_grade_subjects (user_id, grade,subject_name,enroll_date) VALUES (?,?,?,?)`,
            [userid, item.grade, item.subject_name, item.enroll_date],
            (error, results) => {
              if (error)
                return res.json({ error: error });
              else
                return true;
            }));
      }
    }
    return true;
  }
  catch (err) {
    console.log("ERROR");
    res.json(err);
  }
});