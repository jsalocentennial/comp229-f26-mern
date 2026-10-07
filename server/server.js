//const express = require('express');//ES5 and older JS

import mongoose from 'mongoose';

import express from 'express'; //Importing from node modules = express
import homeRoutes from './routes/home-routes.js';
import aboutRoutes from './routes/about-routes.js';
import contactRoutes from './routes/contact-routes.js';
import projectRoutes from './routes/projects-routes.js';
import servicesRoutes from './routes/services-routes.js';

//Establish DB Connection
mongoose.connect('mongodb://localhost:27017/comp229-f26-mern');
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'Connection Error:'));
connection.once('open', () => {
    console.log('Connected to MongoDB');
});

const app = express();

app.use(express.json());

app.use(',',homeRoutes);
app.use('/about', aboutRoutes);
app.use('/contact', contactRoutes);
app.use('/project' , projectRoutes);
app.use('/services', servicesRoutes);


app.listen(3000);
console.log('Server is running on http://localhost:3000');