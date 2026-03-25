import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "85498df2-6b8f-40da-a42c-f04f3adf704f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };
    
  return (
    <div className="form-container">
        <form onSubmit={onSubmit} className="theme-form">
            <h2 className="form-title">Send a Message</h2>
            <div className="input-box">
                <label>Full Name</label>
                <input type="text" className="field" placeholder="Enter your name" name="name" required />
            </div>
            <div className="input-box">
                <label>Email Address</label>
                <input type="email" className="field" placeholder="Enter your email address" name="email" required />
            </div>
            <div className="input-box">
                <label>Your Message</label>
                <textarea name="message" id="message" className="message-field" placeholder= "Enter your messsage here.."></textarea>
            </div>
            <button type='submit' className="cta-button primary">Send Message</button>
            {result && <span className="submit-result">{result}</span>}
        </form>
    </div>
  )
}

export default ContactForm