//const express = require('express');//ES5 and older JS
import express from 'express'; //Importing from node modules = express
import homeRoutes from './routes/home-routes.js';
import aboutRoutes from './routes/about-routes.js';
import contactRoutes from './routes/contact-routes.js';
import projectRoutes from './routes/projects-routes.js';
import servicesRoutes from './routes/services-routes.js';

const app = express();

app.use(',',homeRoutes);
app.use('/about', aboutRoutes);
app.use('/contact', contactRoutes);
app.use('/project' , projectRoutes);
app.use('/services', servicesRoutes);


app.listen(3000);
console.log('Server is running on http://localhost:3000');