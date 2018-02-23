const express = require("express");
// const router = express.Router();
const connection = require("./mongo-connection.js");
// const blacklist = process.env.DB_BLACKLIST.split(" ");

module.exports = {
	getDocumentForView : getDocumentForView
}

function getDocumentForView(currentRoute) {

	return new Promise((resolve, reject) => {
		var db = connection.getDb();
		var query = {'route' : currentRoute};
		var projection = {'_id': 0}
		var cursor = db.collection('views').find(query).project(projection)
		// var response

		cursor.toArray((err, docs) => {
			// console.log(docs)
			if (docs === null || docs === undefined) {
				// res.redirect("/error");
				reject('Meine Damen und Herren, dieser Inhalt ist verboten')
			} else {
				resolve(docs)
			}
		});
	})
}
