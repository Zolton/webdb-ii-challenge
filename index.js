const express = require("express");
const server = express();
const PORT = process.env.PORT || 8000;
server.use(express.json());
const knex = require("knex");
const knexConfig = require("./knexfile");
// combining URL with dot notation - clever
const db = knex(knexConfig.development);

server.get("/", (req, res) => {
  db("cars2").then(cars => {
    res.status(200).json(cars);
  });
});

server.post("/", (req, res) => {
  const post = req.body;
  db("cars2")
    .insert(post, "id")
    .then(post => {
      res.status(200).json(post);
    });
});

server.delete("/:id", (req, res) => {
  db("cars2")
    .where("id", "=", req.params.id)
    .del()
    .then(deleted => {
      res.status(200).json(deleted);
    })
    .catch(error => {
      res.status(500).json({ Error: "Server status: 500" });
    });
});

server.put("/:id", (req, res) => {
  db("cars2")
    .where("id", "=", req.params.id)
    .update(req.body)
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(error => {
      res.status(500).json({ Error: "Server status: 500" });
    });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
