// require express and the notesRoutes.js file

const router = require('express').Router();

router.use(require('./notesRoutes'));

module.exports = router;