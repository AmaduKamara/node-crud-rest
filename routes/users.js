import express from "express";

const router = express.Router();

// Mock database for users
const users = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@email.com",
    age: 21,
  },
  {
    firstName: "Samuel",
    lastName: "Amkam",
    email: "amkam@email.com",
    age: 78,
  },
];

// GET /users
router.get("/", (req, res) => {
  res.send(users);
});

// POST /users
router.post("/", (req, res) => {
  const user = req.body
  users.push(user);
  res.send(user);
})

export default router;
