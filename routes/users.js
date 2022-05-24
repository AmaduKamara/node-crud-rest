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

export default router;
