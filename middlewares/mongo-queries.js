const express = require("express");
const connection = require("./mongo-connection.js");

module.exports = {
	getDocumentForView : getDocumentForView,
	getProjectsCards: getProjectsCards
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

function getProjectsCards() {
	return new Promise((resolve, reject) => {
		var db = connection.getDb()
		var query = {}
		var projection = {
			'card': 1
		}
		var cursor = db.collection('projects').find().project(projection)

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
