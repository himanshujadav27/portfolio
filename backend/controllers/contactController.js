
const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    const newContact = new Contact({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    await newContact.save();

    return res.status(201).json({
      success: true,
      message: "Contact message saved successfully!",
    });
  } catch (error) {
    console.error("Error saving contact:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to save contact message.",
    });
  }
};


const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: contacts.length,
      contacts: contacts,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch contact messages.",
    });
  }
};


module.exports = { createContact, getContacts };