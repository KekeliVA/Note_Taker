const router = require("express").Router();
const notes = require("../db/store");

// GET request for /notes, returning notes.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"))
})
