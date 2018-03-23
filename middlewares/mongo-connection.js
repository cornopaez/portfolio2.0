const express = require("express");
const MongoClient = require('mongodb').MongoClient
const assert = require('assert');
var _db = null;
const dotenv = require('dotenv').config();

module.exports =  {
	getDb: getDb,
	connect: connect
}

const url = process.env.MONGOLAB_COPPER_URI ? process.env.MONGOLAB_COPPER_URI : process.env.MONGODB_LOCAL;

// Creates a connection to MongoDB and returns the db object.
function connect() {

	return new Promise((resolve, reject) => {
		MongoClient.connect(url, (err, db) => {
			if (err) reject(err);

			console.log("Connected successfully to database");
			var dbName = db.s.options.dbName
			// console.log(db.s.options.dbName)
			_db = db.db(dbName);
			resolve(db);
		});
	});
};

// Gets the db object created by MongoClient.connect()
function getDb() {
	return _db;
}