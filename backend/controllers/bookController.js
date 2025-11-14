import Book from "../models/bookModel.js";

export const addBook = async (req, res) => {
  const { title, author, description, isbn } = req.body;
  if (!title) return res.status(400).json({ message: "Title required" });
  const book = await Book.create({ title, author, description, isbn, createdBy: req.user._id });
  res.status(201).json(book);
};

export const getBooks = async (req, res) => {
  const books = await Book.find({}).populate("createdBy", "name email");
  res.json(books);
};
