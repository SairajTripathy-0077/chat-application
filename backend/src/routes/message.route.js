import express from 'express'; // Import Express framework

const router = express.Router(); // Initialize Express Router

router.get("/send", (req, res) => {
    res.send("Send message endpoint");
})// Define route for sending message endpoint.

export default router;