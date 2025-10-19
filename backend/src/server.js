// Import Express framework
// const express = require('express'); 

import express from 'express'; // Import Express framework
import dotenv from 'dotenv'; // Import dotenv for environment variables
import authRoutes from './routes/auth.route.js'; // Import authentication routes        
import messageRoutes from './routes/message.route.js'; // Import message routes
dotenv.config();



const app = express(); // Initialize Express application

const PORT = process.env.PORT || 3000; // Set default port to 3000

app.use("/api/auth", authRoutes); // Use authentication routes
app.use("/api/messages", messageRoutes); // Use authentication routes

app.listen(3000, () => console.log('Server running on port:' + PORT)); // Start server on port 3000
