const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const cors = require('cors');

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

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});