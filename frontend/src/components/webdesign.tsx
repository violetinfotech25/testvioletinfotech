import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../assets/css/webdesign.css';
import WebGallery from '../components/websitegallery';
import Footer from '../components/Footer';
import Image1 from '../assets/image/web/image1.png';
import Image2 from '../assets/image/web/image2.png';
import Image3 from '../assets/image/web/image3.png';

const Webdesign = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
  });

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/webcontact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '', service: 'Web Development' });
        handleCloseModal();
      } else {
        const data = await response.json();
        alert('Error: ' + JSON.stringify(data));
      }
    } catch (error) {
      alert('Something went wrong. Please try again later.');
      console.error('Submission error:', error);
    }
  };

  return (
    <>
      <div className="thirdsec">Web Design Services</div>

      <section className="first-website text-center text-white d-flex align-items-center justify-content-center">
        <div className="container py-5">
          <h1 className="mb-3">
            Web Designers Serving the Greater Berks County, Lehigh Valley, Philadelphia Region and Beyond
          </h1>
          <p className="mb-4">
            A WEB DESIGN COMPANY WITH OFFICES IN READING, ALLENTOWN AND MALVERN, PA
          </p>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <img
              src={Image2}
              alt="Office 1"
              className="img-fluid"
            />
          </div>
          <button className="thirdsec-contact" onClick={handleOpenModal}>Contact Us</button>
        </div>
      </section>

      <section className="d-flex flex-wrap newsec">
        <div className="left-col p-4">
          <h2>We Design World-Class Websites <br /> that Deliver Proven Results!</h2>
          <p>Let’s face it. To compete in today’s fast-paced online world you need to do more than design a pretty website...</p>
          <h2>Our Marketing-Driven Website Strategy is Your Roadmap to Success!</h2>
          <p>That's why we develop beautiful websites expertly designed to become your online hub...</p>
        </div>
        <div className="right-col p-4 text-white">
          <h2>What is <br />MARKETING-DRIVEN <br />Website Design?</h2>
          <img src={Image1} alt="" />
          <p>This is the right side with a dark blue background.</p>
        </div>
      </section>

      <div className="thirdsec">Unique, Attention-Getting Designs</div>

      <section className='unique'>
        <h1>Does Your Website Look This Good? <br />View Our Web Design Gallery!</h1>
        <img src={Image3} alt="" />
        <p><i>" I wanted to take the time to let you know how pleased our company is with our new website... </i></p>
        <button onClick={handleOpenModal}>GET YOUR WEB DESIGN</button>
      </section>

      <div className="thirdsec">Our Web Development Services</div>

      <section className='web-types py-5'>
        <div className='container d-flex flex-wrap justify-content-between gap-4'>
          <div className='web-box p-4 shadow bg-white rounded'>
            <h2>Static Website</h2>
            <p>A static website is ideal for portfolios and small businesses. Built using HTML, CSS, and JS — it's simple, fast, and cost-effective.</p>
            <ul>
              <li>✔️ Fast loading</li>
              <li>✔️ No backend required</li>
              <li>✔️ Highly secure</li>
              <li>✔️ Cost-effective</li>
              <li>✔️ Great for portfolios & brochures</li>
            </ul>
          </div>

          <div className='web-box p-4 shadow bg-white rounded'>
            <h2>Dynamic Website</h2>
            <p>Dynamic websites offer interactivity, admin panels, and database integration — perfect for blogs, portals, or institutions.</p>
            <ul>
              <li>✔️ Real-time content updates</li>
              <li>✔️ Admin dashboard</li>
              <li>✔️ Database-driven</li>
              <li>✔️ Login/registration options</li>
              <li>✔️ CMS integration (WordPress, etc.)</li>
            </ul>
          </div>

          <div className='web-box p-4 shadow bg-white rounded'>
            <h2>E-commerce Website</h2>
            <p>We build secure online stores with payment gateways, cart systems, product pages, and full customer experience flow.</p>
            <ul>
              <li>✔️ Product catalog & filters</li>
              <li>✔️ Shopping cart</li>
              <li>✔️ Secure payment gateway</li>
              <li>✔️ Order & user management</li>
              <li>✔️ Scalable platform (WooCommerce / Shopify)</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="thirdsec">Website Gallery</div>
      <WebGallery />

      <section className="get-enquiry-section text-center py-5">
        <h2 className="mb-3">Interested in Our Services?</h2>
        <p className="mb-4">Let us help you build your dream website. Click below to get started.</p>
        <button className="get-enquiry-btn" onClick={handleOpenModal}>Get Enquiry</button>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <h2 className="modal-title">Request Web Development Service</h2>
            <form onSubmit={handleSubmit} className="modal-form">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
              <input type="text" name="service" value={formData.service} disabled />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Webdesign;