import React, { useState, useEffect  } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const [errors, setErrors] = useState({});
    const [isTextAreaFilled, setIsTextAreaFilled] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false); //state for acknowledgment
    const [focusedField, setFocusedField] = useState(null); 
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform form validation before submitting
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
  
    useEffect(() => {
      if (isSubmitted) {
        const timeout = setTimeout(() => {
          setIsSubmitted(false);
        }, 1500); // Reset isSubmitted to false after 5 seconds (adjust the delay as needed)
  
        return () => clearTimeout(timeout);
      }
    }, [isSubmitted]);
  
    const isValidEmail = (email) => {
      // Regular expression to validate email address
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
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

    const handleTextAreaChange = (e) => {
      setFormData({ ...formData, message: e.target.value });
      setIsTextAreaFilled(!!e.target.value.trim());
    };
  
    useEffect(() => {
      if (isSubmitted) {
        const timeout = setTimeout(() => {
          setIsSubmitted(false);
        }, 2000); 
  
        return () => clearTimeout(timeout);
      }
    }, [isSubmitted]);
  
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