const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check that both fields were provided
    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      !username.trim() ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required.",
      });
    }

    // Find the admin account in MongoDB
    const admin = await Admin.findOne({
      username: username.trim(),
    });

    // Reject an unknown username
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password.",
      });
    }

    // Compare the entered password with its stored hash
    const passwordMatches = await bcrypt.compare(password, admin.passwordHash);

    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password.",
      });
    }

    // Make sure a real JWT secret is configured
    const jwtSecret = process.env.JWT_SECRET;

    if (
      !jwtSecret ||
      jwtSecret === "replace_this_with_a_long_random_secret" ||
      jwtSecret.length < 32
    ) {
      return res.status(500).json({
        success: false,
        message: "Server authentication is not configured securely.",
      });
    }

    // Create a token only after successful verification
    const token = jwt.sign(
      {
        adminId: admin._id.toString(),
        role: admin.role,
      },
      jwtSecret,
      { expiresIn: "1h" },
    );

    return res.status(200).json({
      success: true,
      message: "Admin login successful.",
      token,
    });
  } catch (error) {
    console.error("Admin login failed:", error.message);

    return res.status(500).json({
      success: false,
      message: "An error occurred during login.",
    });
  }
};

module.exports = { adminLogin };
