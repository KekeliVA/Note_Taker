// use express router 
const router = require("express").Router();
const notes = require("../db/store");

// GET, POST, DELETE replace "app.get" with router, check Hot Restaurant solved
router.get("/notes", (req, res) => {
  notes.returnNotes()
  .then((notes) => res.json(notes))
  .catch((error) => res.status(500).json(err));
})

router.delete("/api/notes/:id", (req, res) => {
  notes.deleteNote() 
  .then((notes) => res.json(notes))
  .catch((error) => res.status(500).json(err));
})

router.post("/api/notes/:id", (req, res) => {
  notes.addNote()
  .then((notes) => res.json(notes))
  .catch((error) => res.status(500).json(err));
})

router.post("/notes", (req, res) => {
  notes.addNote(req.body)
  .then((notes) => res.json(notes))
  .catch((error) => { res.status(500).json(err)});
})
module.exports = router;