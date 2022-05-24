import express from "express";

// express app
const app = express();

// port
const PORT = 5000;

// middleware
app.use(express.json());

// server listening
app.listen(PORT, () =>
  console.log(`Server running on port: https://localhost/${PORT}`)
);
