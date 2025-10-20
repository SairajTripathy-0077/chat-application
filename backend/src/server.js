// Import Express framework
// const express = require('express'); 

import express from 'express'; // Import Express framework
import dotenv from 'dotenv'; // Import dotenv for environment variables

import path from 'path'; // Import path module for handling file paths

import authRoutes from './routes/auth.route.js'; // Import authentication routes        
import messageRoutes from './routes/message.route.js'; // Import message routes
dotenv.config();



const app = express(); // Initialize Express application

const PORT = process.env.PORT || 3000; // Set default port to 3000
const __dirname = path.resolve(); // Get current directory path

app.use("/api/auth", authRoutes); // Use authentication routes
app.use("/api/messages", messageRoutes); // Use authentication routes

//make ready for deployment
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (_, res) =>{
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    } )
}


app.listen(3000, () => console.log('Server running on port:' + PORT)); // Start server on port 3000
