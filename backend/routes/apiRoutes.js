
const express = require("express");
const router = express.Router();

const {
  createContact,
  getContacts,
} = require("../controllers/contactController");

const { adminLogin } = require("../controllers/adminController");
const adminAuth = require("../middleware/adminAuth");

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to my portfolio API!",
    developer: "Full Stack Developer",
  });
});

router.post("/contact", createContact);


// Only admins with valid JWTs can view contact messages
router.get("/contacts", adminAuth, getContacts);

router.post("/admin/login", adminLogin);
module.exports = router;
