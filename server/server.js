//const express = require('express');//ES5 and older JS
import express from 'express'; //Importing from node modules = express
import homeController from './controllers/home-controllers.js';

const app = express();

app.use(homeRoutes);

app.listen(3001);
console.log('Server is running on port 3001');