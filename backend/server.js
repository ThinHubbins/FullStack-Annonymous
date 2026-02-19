const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db.js");
const notedb = require("./model/notes.js");

const app = express();
connectDB(); //the server is already running here

app.use(cors());
app.use(express.json());
app.post("/", (req, res) => {
  const notary = new notedb(req.body);
  notary
    .save()
    .then((savedNote) => res.status(201).json({ message: "Saved", data: savedNote }))
    .catch((err) => res.status(500).json({ message: "Not Saved", error: err }));
});
app.get("/api/find", (req, res) => {
  notedb.find().then((result) => {
    res.json(result);
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
