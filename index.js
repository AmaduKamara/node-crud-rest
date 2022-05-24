import express from "express";

// routes
import usersRoutes from "./routes/users.js";

// express app
const app = express();

// port
const PORT = 5000;

// middleware
app.use(express.json());

// routes

// GET
app.get("/", (req, res) => res.send("Hello from Homepage"));

// GET /users
app.use("/users", usersRoutes);

// GET /users/:id
app.use("/users/:id", usersRoutes);

// server listening
app.listen(PORT, () =>
  console.log(`Server running on port: https://localhost/${PORT}`)
);
