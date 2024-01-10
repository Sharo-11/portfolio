import "./FormsStyles.css";
import React, { useState } from 'react';

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint where you want to handle the form data
    const apiUrl = 'https://formspree.io/f/xvoegopw';

    // Send the form data to the server
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Form data submitted:', data);
      // You can perform any additional actions here
    })
    .catch(error => {
      console.error('Error submitting form data:', error);
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Subject</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        <label>Message</label>
        <textarea
          rows="6"
          name="message"
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
