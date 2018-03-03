const express = require('express')
const app = express()
const connection = require("./middlewares/mongo-connection.js");
const helmet = require('helmet');
const bodyParser = require('body-parser');
const routes = require("./controllers/routes.js");
const data = require("./controllers/data.js");

// Start MongoDB connection
connection.connect()
	.then((response) => {
		// console.log("I'm booted and connected. Moving on...");
	})
	.catch((data) => {
		console.log("Cannot conntect to db. Exiting program: " + data);
		process.exit(1);
	});

// Use Helmet for security
app.use(helmet());

// 
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Angular DIST output folder
app.use(express.static(__dirname + '/dist'));

// Routes for getting and posting data in the site
app.use('/data', data)

// Main router -- ****OTHER ROUTERS NEED TO BE ABOVE THIS LINE!!!!******
app.use("/", routes);

app.listen(3000, () => console.log('Example app listening on port 3000!'))