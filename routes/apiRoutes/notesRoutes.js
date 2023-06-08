//require dependencies
const router = require('express').Router();
const path = require('path');
const store = require('routes/apiRoutes/notesRoutes.js');
router.get('/notes', (req, res) => {
  store
    .getNotes()
    .then(notes => {
      res.json(notes)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

//Giving the path of the array that will be there
router.post('/notes', (req, res) => {
  // setting an id based on the array index 
  console.log(req.body)
  store
    .addNotes(req.body)
    .then(note => {
      res.json(note)
    })
  // .catch (err => {
  //   res.status(500).json(err)
  // })
});

//Route infomation to delete
router.delete('/notes/:id', (req, res) => {
  store
    .removeNotes(req.params.id)
    .then(() => res.json({ ok: true }))

});

module.exports = router;
