const express = require("express"); // Import Express
const cors = require("cors"); // Import CORS middleware
const bodyParser = require("body-parser"); // Import body-parser middleware
require("dotenv").config(); // Load environment variables from .env file

const app = express(); // Create an Express application
const PORT = process.env.PORT || 3000; // Set the port from environment variable or default to 3000

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, world!"); // Send a response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Log the server start
});
