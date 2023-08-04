import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

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
            // Your code to handle form submission goes here
            // For example, you can send the form data to a server using an API call
            console.log('Form submitted:', formData);
            // Clear the form data after submission (if needed)
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } else {
            // If there are validation errors, update the errors state
            setErrors(validationErrors);
        }
    };

    const isValidEmail = (email) => {
        // Regular expression to validate email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        
        <section className="contact-container"> 
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="message"></label>
                    <textarea
                        id="message"
                        placeholder="Enter your message here ..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;