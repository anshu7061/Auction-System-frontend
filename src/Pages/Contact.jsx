import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    PhoneNumber: '',
    Email: '',
    intrest: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/addForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {

        // Handle successful form submission
        console.log('Form submitted successfully!');
      } else {
        // Handle form submission failure
        console.error('Form submission failed.');
      }
    } catch (error) {
      // Handle fetch error
      console.error('Error during form submission:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        PhoneNumber:
        <input
          type="Number"
          name="PhoneNumber"
          value={formData.PhoneNumber}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="String"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        intrest:
        <input
          type="text"
          name="intrest"
          value={formData.intrest}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;