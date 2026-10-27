require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

const createAdmin = async () => {
  try {
    const username = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD;

    if (!username || !password) {
      throw new Error(
        "Set ADMIN_USERNAME and ADMIN_PASSWORD in your .env file.",
      );
    }

    if (password.length < 12) {
      throw new Error("Choose an admin password of at least 12 characters.");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    const existingAdmin = await Admin.findOne({ username });

    if (existingAdmin) {
      console.log("This admin username already exists.");
      return;
    }

    const passwordHash = await bcrypt.hash(password, 12);

    await Admin.create({
      username,
      passwordHash,
      role: "admin",
    });

    console.log("Admin account created successfully!");
  } catch (error) {
    console.error("Admin setup failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect().catch(() => {});
  }
};

createAdmin();