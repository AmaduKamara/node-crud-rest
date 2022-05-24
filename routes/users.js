import express from "express";

const router = express.Router();

// GET /users
router.get("/", (req, res) => {
  res.send("Hello");
});

export default router;
