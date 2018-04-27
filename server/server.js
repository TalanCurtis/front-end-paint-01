require('dotenv').config();
const express= require('express');
const app = express();

// Destructure env file.
const {SERVER_PORT} = process.env;

// Connect to Database.
// use massive

// Middleware import.

// Top Level Middleware.
app.use( express.static( `${__dirname}/../build` ) );

// Controller imports.

// Endpoints.

// Run Server.
app.listen(SERVER_PORT, ()=>console.log(`running on port: ${SERVER_PORT}`))