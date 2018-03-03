const express = require("express");
const router = express.Router();
const dotenv = require('dotenv').config();
const queryDb = require('../middlewares/mongo-queries.js')

module.exports = router;

router.get('/:name', (req, res) => {

	var name = req.params.name;
	queryDb.getDocumentForView(name)
	.then((data) => {
		res.json(data)
	})
	.catch((error) => {
		console.log(error)
	})

})

// router.get('*', function (req, res) {
// 	// Load landing page
// 	res.sendFile('index.html', {root: "./" });
// });
