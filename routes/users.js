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
    email: "john@email.com",
    age: 78,
  },
];

// GET /users
router.get("/", (req, res) => {
  res.send("Hello");
});

export default router;
