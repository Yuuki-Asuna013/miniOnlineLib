import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import User from "../models/userModel.js";

dotenv.config();
connectDB();

const createAdmin = async () => {
  try {
    const exists = await User.findOne({ email: "admin@library.com" });
    if (exists) {
      console.log("Admin already exists");
      process.exit();
    }
    const admin = new User({ name: "Admin", email: "admin@library.com", password: "admin123", role: "admin" });
    await admin.save();
    console.log("Admin created: admin@library.com / admin123");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

createAdmin();
