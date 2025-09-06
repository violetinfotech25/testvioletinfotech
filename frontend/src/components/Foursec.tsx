import React, { useState } from 'react';

const Foursec = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}contactus/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (err) {
      console.error('Submit error:', err);
      alert('An error occurred while sending.');
    }
  };

  return (
    <>
      <div className='foursec-bg'>
        <img src="https://www.zestbrains.com/assets/images/ui-ux-design/ui-ux-design.png" alt="" />
        <h1 className='foursec-title'>GET FOUND. IMPRESS. ENGAGE. CONVERT!</h1>
        <h6 className='foursec-subtitle'>
          Get Ready To Take Your Business To The Next Level!
        </h6>
        <p className='foursec-description'>
          Contact us today to learn more about creating a powerful Internet Marketing, <br />
          SEO and Web Design Ecosystem for your business or non-profit organization!
        </p>

        <div className='form-details'>
          <h2 className='form-title'>Contact Us</h2>
          <form className='form-wrapper' onSubmit={handleSubmit}>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Enter your name'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Enter your email'
                  required
                />
              </div>
            </div>

            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='phone'>Phone</label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='Enter your phone number'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='subject'>Subject</label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='Subject of inquiry'
                />
              </div>
            </div>

            <div className='form-row'>
              <div className='form-group full-width'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Type your message here...'
                  required
                />
              </div>
            </div>

            <button type='submit' className='form-submit'>Send Message</button>
          </form>
        </div>
      </div>

      <div className="thirdsec">
        LEARN MORE
      </div>
    </>
  );
};

export default Foursec;
