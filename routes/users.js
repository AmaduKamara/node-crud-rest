import express from "express";
import { createUser, fetchUsers, getUser, deleteUser , updateUser } from "../controllers/users.js";

const router = express.Router();

// GET /users
router.get("/", fetchUsers);

// POST /users
router.post("/", createUser);

// GET /users/:id
router.get("/:id", getUser);

// DELETE /users/:id
router.delete("/:id", deleteUser);

// PATCH /users/:id => Update a user using the PATCH method
router.patch("/:id", updateUser);

export default router;
