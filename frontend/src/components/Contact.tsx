import { useState } from 'react';
import Footerend from '../components/Footer';
import '../assets/css/contact.css';

const Contact: React.FC = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/contactuspg/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1>Let’s Bring Your Vision to Life!</h1>
          <p className="subtitle">
            Have questions or a project in mind? We're excited to hear from you.
            Fill out the form and our team will get back to you shortly.
          </p>

          <div className="contact-info">
            <p><i className="fas fa-envelope"></i><strong>Email :</strong> violetinfotech25@gmail.com</p>
            <p><i className="fa fa-phone" aria-hidden="true" style={{ transform: 'scaleX(-1)' }}></i><strong>Phone :</strong> +91 98430 99624</p>
            <p><i className="fas fa-clock"></i><strong>Office Timing :</strong> Mon–Sat, 9:30 AM to 6:00 PM</p>
            <p><i className="fas fa-map-marker-alt"></i><strong>Address:</strong> Violet Infotech, 15A1, Subbiyan Layout, Ramanthapuram, Coimbatore, Tamil Nadu - 641045</p>
          </div>

          <div className="contact-map">
            <h3>Reach Us</h3>
            <iframe
              title="Violet Infotech Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5914380634213!2d76.99620907502842!3d10.994179455139463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857005115e039%3A0x539919fe495be063!2sViolet%20Infotech!5e0!3m2!1sen!2sin!4v1756094705426!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '8px', marginTop: '10px' }}
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div className="contact-social-buttons">
            <a href="mailto:violetinfotech25@gmail.com" className="social-btn email"><i className="fas fa-envelope"></i> Email</a>
            <a href="tel:+919843099624" className="social-btn phone"><i className="fa fa-phone" aria-hidden="true" style={{ transform: 'scaleX(-1)' }}></i>Call</a>
            <a href="www.linkedin.com/in/violetinfotech-violetraja-4b0559377" target="_blank" className="social-btn linkedin" rel="noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
            <a href="https://www.instagram.com/violetinfotech/" target="_blank" className="social-btn insta" rel="noreferrer"><i className="fab fa-instagram"></i> Instagram</a>
            <a href="https://www.facebook.com/violetinfotech" target="_blank" className="social-btn fb" rel="noreferrer"><i className="fab fa-facebook"></i> Facebook</a>
            <a href="https://wa.me/919843099624" target="_blank" className="social-btn whatsapp" rel="noreferrer"><i className="fab fa-whatsapp"></i> WhatsApp</a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            </div>
            <div className="form-row">
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
              <select name="subject" value={formData.subject} onChange={handleChange} required>
                <option value="" disabled>Select Subject</option>
                <option value="Full Service">Full Service (Digital Marketing, Web Development, SEO)</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Web Development">Web Development</option>
                <option value="SEO">SEO</option>
              </select>
            </div>
            <div className="form-row full-width">
              <textarea name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Your Message" required />
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>

      <Footerend />
    </>
  );
};

export default Contact;