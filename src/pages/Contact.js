import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
          }
          if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
          }
          if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
          }

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }


         if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Perform your submission logic here (e.g., send data to the server)
      alert('Form submitted successfully!');
    }
    };

    return (
        <>
            <h4 className="heading-center">Contact Me</h4>
            <article>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleChange}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleChange}
                        />
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </article>
        </>
    );
};

export default Contact;