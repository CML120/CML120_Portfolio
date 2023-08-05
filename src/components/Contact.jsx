import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  // State variables to manage form data, validation errors, and acknowledgment
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isTextAreaFilled, setIsTextAreaFilled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // State variable to track the focused field during form validation
  const [focusedField, setFocusedField] = useState(null);

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = {};
    if (formData.name.trim() === '') {
      validationErrors.name = 'Name is required';
    }
    if (formData.email.trim() === '') {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }

    if (Object.keys(validationErrors).length === 0) {
      // If there are no validation errors, submit the form

      console.log('Form submitted:', formData);
      // Clear the form data after submission (if needed)
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitted(true); // Set isSubmitted to true after successful form submission
    } else {
      // If there are validation errors, update the errors state
      setErrors(validationErrors);
    }
  };

  // Handler to validate email format on form field blur
  const handleBlur = (fieldName) => {
    if (fieldName === 'name' && formData.name.trim() === '') {
      setErrors({ name: 'Name is required' });
      setFocusedField('name');
    } else if (fieldName === 'email' && formData.email.trim() === '') {
      setErrors({ email: 'Email is required' });
      setFocusedField('email');
    } else {
      setErrors({});
      setFocusedField(null);
    }
  };

  // Handler to track text area input and determine if it's filled
  const handleTextAreaChange = (e) => {
    setFormData({ ...formData, message: e.target.value });
    setIsTextAreaFilled(!!e.target.value.trim());
  };

  // Effect to reset the acknowledgment state after a delay
  useEffect(() => {
    if (isSubmitted) {
      const timeout = setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isSubmitted]);

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section className="contact-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onBlur={() => handleBlur('name')}
          />
          {focusedField === 'name' && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onBlur={() => handleBlur('email')}
          />
          {focusedField === 'email' && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Enter your message here ..."
            value={formData.message}
            onChange={handleTextAreaChange}
            className={isTextAreaFilled ? 'glow-border' : ''}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
        {isSubmitted && (
          <div className="acknowledgment-message">
            Thank you! Your message has been sent to CML120!
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
