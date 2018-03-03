const express = require("express");
const router = express.Router();
const dotenv = require('dotenv').config();

module.exports = router;

router.use('*', (req, res, next) => {
	// Check for secure connection
	if (req.headers["x-forwarded-proto"] !== "https"){
		if (process.env.NODE_ENV) {
			// If in Prod, redirect
			console.log("Forcing HTTPS...")
			res.redirect('https://'+req.hostname+req.url);
		} else {
			// If not in production, move on
			return next();
		}
	} else {
		// If already secure, move on
		return next();
	}
});

// Send all other requests to the Angular app
router.get('*', (req, res) => {
	// Load landing page
	res.sendFile('index.html', {root: "./dist" });
});

