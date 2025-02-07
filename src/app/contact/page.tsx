// components/Contact.tsx
import React from 'react';
import '../../styles/contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
