const router = require("express").Router();
const notes = require("../db/store");
const path = require("path");

// GET request for /notes, returning notes.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"))
})

module.exports = router;