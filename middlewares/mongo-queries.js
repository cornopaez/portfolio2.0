const express = require("express");
const connection = require("./mongo-connection.js");

module.exports = {
	getProjectView : getProjectView,
	getProjectsCards: getProjectsCards,
	postContactRequest: postContactRequest
}

function getProjectView(projectName) {

	return new Promise((resolve, reject) => {
		var db = connection.getDb();
		var query = {'project_name' : projectName};
		var projection = {
			'_id': 0,
			'view': 1
		}
		var cursor = db.collection('projects').find(query).project(projection)
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
			'_id': 0,
			'card': 1,
			'project_name': 1
		}
		var sort = {'lastUpdate':-1}
		var cursor = db.collection('projects').find().sort(sort).project(projection)

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

function postContactRequest(info) {
	return new Promise((resolve, reject) => {
		var db = connection.getDb()
		var query = {
			"name": info.name,
			"email": info.email,
			"text": info.message,
			"urgent": info.urgent,
			"date": Date()
		}

		var cursor = db.collection('requests').insertOne(query, (error, response) => {
			if (error) {
				reject(error)
			} else {
				resolve(response)
			}
		})
	})
}