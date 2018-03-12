const express = require("express");
const router = express.Router();
const dotenv = require('dotenv').config();
const queryDb = require('../middlewares/mongo-queries.js')
const validation = require('../middlewares/reCaptcha-validation.js')

module.exports = router;

router.post('/contact', (req, res) => {
	// Perform recaptcha validation
	validation.validate(req)
	.then((body) => {
		// If validation was successful, continue on
		if (body.success = true) {
			queryDb.postContactRequest(req.body)
			.then(success => {
				res.json(success)
			})
			.catch(error => {
				res.json(error)
			})
		} else {
			// Redirect if error validating recaptcha
			console.log("reCaptcha validation failed. There was an error.")
			res.redirect("/error");
		}
	});
})

router.get('/projects', (req, res) => {

	queryDb.getProjectsCards()
	.then((data) => {
		res.json(data)
	})
	.catch((error) => {
		console.log(error)
	})

})

router.get('/:name', (req, res) => {

	var name = req.params.name;
	queryDb.getProjectView(name)
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

