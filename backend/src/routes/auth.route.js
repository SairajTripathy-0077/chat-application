import express from 'express'; // Import Express framework

const router = express.Router(); // Initialize Express Router

router.get("/api/auth/signup", (req, res) => {
    res.send("Signup endpoint");
})// Define route for signup endpoint.

router.get("/api/auth/login", (req, res) => {
    res.send("login endpoint");
})// Define route for login endpoint.

router.get("/api/auth/logout", (req, res) => {
    res.send("logout endpoint");
})// Define route for logout endpoint.



export default router;