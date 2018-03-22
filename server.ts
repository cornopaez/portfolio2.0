// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

const express = require('express')
const app = express()
const connection = require("./middlewares/mongo-connection.js");
const helmet = require('helmet');
const bodyParser = require('body-parser');
const routes = require("./controllers/routes.js");
const data = require("./controllers/data.js");
const DIST_FOLDER = process.cwd() + '/dist';

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

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

// Make use of the prerenderer for search engines
// app.use(require('prerender-node').set('prerenderToken', process.env.PRERENDER_TOKEN));

// 
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Static files
app.use(express.static(DIST_FOLDER))

// Routes for getting and posting data in the site
app.use('/data', data)

// Main router -- ****OTHER ROUTERS NEED TO BE ABOVE THIS LINE!!!!******
app.use("/", routes);

const port = process.env.PORT? process.env.PORT : 3000

app.listen(port, () => console.log('Portfolio 2.0 up and running on port ' + port))