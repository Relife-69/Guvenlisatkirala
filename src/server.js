const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Enable CORS for all routes

// Alternatively, configure specific origins:
// app.use(cors({
//   origin: 'http://localhost:3000',
// }));

app.use(express.json());

// Define your routes here
app.post("/api/users", (req, res) => {
  // Example of handling a POST request to /api/users
  const user = req.body;
  console.log("Received user data:", user);
  res.status(201).send({ message: "User created successfully", user });
});

app.listen(5000, () => {
  // Changed port to 5000 to avoid conflict with React dev server
  console.log("Server is running on port 5000");
});
