require('zone.js/dist/zone-node');
require('reflect-metadata');
const { renderModuleFactory } = require('@angular/platform-server');
//import * as express from 'express';
const express = require('express');
const { readFileSync } = require('fs');
const { enableProdMode } = require('@angular/core');

const { ngExpressEngine } = require('@nguniversal/express-engine');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/camp-server/main');

enableProdMode();

const app = express();

const distFolder = __dirname + '/dist/camp';

app.engine('html', ngExpressEngine({
	bootstrap:  AppServerModuleNgFactory,
	providers: [provideModuleMap(LAZY_MODULE_MAP)]
}));

app.set('view engine', 'html');
app.set('views', distFolder);



app.get('*.*', express.static(distFolder, {
	maxAge: '1y'
}));

app.get('*', (req, res) => {
	res.render('index', {req});

});

app.listen(4200, () => {
	console.log(`Angular Universal Node Express server listening on http://localhost:4200`);
});
