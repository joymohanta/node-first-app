const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from my New personal and own dashing world");
});

const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com", price: "12000" },
  { id: 2, name: "sabnoor", email: "sabnoor@gmail.com", price: "12100" },
  { id: 3, name: "shuchorita", email: "shuchorita@gmail.com", price: "12700" },
  { id: 4, name: "sraboni", email: "sraboni@gmail.com", price: "13000" },
  { id: 5, name: "omorsunny", email: "omorsunny@gmail.com", price: "14000" },
  { id: 6, name: "srabonti", email: "srabonti@gmail.com", price: "12300" },
  { id: 7, name: "krabonti", email: "krabonti@gmail.com", price: "12900" },
];

app.get("/users", (req, res) => {
  //filter by (search query) query parameter
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to the port", port);
});
