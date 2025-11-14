import express from "express";
import { addBook, getBooks } from "../controllers/bookController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public - all logged users or even non-logged can view
router.get("/", getBooks);

// Admin only to add books
router.post("/", protect, adminOnly, addBook);

export default router;
