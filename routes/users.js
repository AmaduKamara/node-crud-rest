import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

// Mock database for users
let users = [];

// GET /users
router.get("/", (req, res) => {
  res.send(users);
});

// POST /users
router.post("/", (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(user);
});

// GET /users/:id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  res.send(user);
});

// DELETE /users/:id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(users);
});

// PATCH /users/:id => Update a user using the PATCH method
router.patch("/:id", (req, res) => {
  // 1. Get the id from params
  const { id } = req.params;
  // 2. Find the user by the id
  const user = users.find((user) => user.id === id);
  // 3. Get the request body data that is changed
  const { firstName, lastName, email, age } = req.body;

  // 4. Update what is changed
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (email) user.email = email;
  if (age) user.age = age;

  res.send(user);
});

export default router;
