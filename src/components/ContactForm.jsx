import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://personal-portfolio-tbfu.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Request failed");
      }

      alert(data.message);
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Could not send your message. Please try again.");
    }
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" placeholder="Name" required />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          cols="30"
          placeholder="Message"
          required
        ></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>
  );
}
