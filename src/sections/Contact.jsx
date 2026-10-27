import React from 'react'
import './Contact.css'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <section className="contact">

        <h2>Contact Me</h2>

        <p className="contact-intro">

            I'm always open to discussing new opportunities, collaborating on projects, or 
            simply connecting with fellow developers.

        </p>

        <ContactForm />
        
        <div className="contact-links">

            <a href="mailto:jadavhimanshu71@gmail.com" target="_blank" rel="noopener noreferrer">📧 Email</a>

            <a href="https://github.com/himanshujadav27" target="_blank" rel="noopener noreferrer">🐱 Github</a>

            <a href="https://www.linkedin.com/in/himanshu-jadav-a71290422/" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>

        </div>

    </section>
  )
}
