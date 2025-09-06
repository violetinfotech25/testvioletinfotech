import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/internet_marketing_combined.css';
import SEOImg from "../assets/image/internet_marketing_services/SEO (1).png";
import SEMImg from "../assets/image/internet_marketing_services/SEM.jpeg";
import ContentMarketingImg from "../assets/image/internet_marketing_services/content-marketing.jpg";
import SocialMediaMarketingImg from "../assets/image/internet_marketing_services/Social-Media-Marketing.png";
import EmailMarketingImg from "../assets/image/internet_marketing_services/email-marketing.png";
import BrandingServiceImg from "../assets/image/internet_marketing_services/SEM.jpeg";
import Footer from './Footer';

const services = [
  {
    title: 'SEO Services',
    description: 'In today’s digital world, if you’re not ranking on Google — you’re invisible. Our SEO Services help your business climb the search engine rankings, attract qualified traffic, and convert visitors into loyal customers. We use proven strategies, ethical practices, and the latest tools to optimize your website and maximize your online visibility.',
    image: SEOImg,
  },
  {
    title: 'Search Engine Advertising',
    description: 'With our Search Engine Advertising (SEA) services, your brand appears at the top of search engine results instantly. We help you turn searchers into customers through well-crafted, data-driven ad campaigns on platforms like Google Ads and Bing Ads, delivering measurable ROI.',
    image: SEMImg,
  },
  {
    title: 'Content Marketing',
    description: 'Our Content Marketing Services help you attract, engage, and retain customers by delivering valuable and relevant content. From blog posts to videos and case studies — we build trust, boost search rankings, and drive conversions with purposeful content.',
    image: ContentMarketingImg,
  },
  {
    title: 'Social Media Marketing',
    description: 'Our Social Media Marketing (SMM) services help you connect with your target audience and build a loyal community. From strategy to execution, we grow your presence on platforms like Facebook, Instagram, and LinkedIn with engaging content and performance tracking.',
    image: SocialMediaMarketingImg,
  },
  {
    title: 'Email Marketing',
    description: 'Our Email Marketing Services allow you to communicate directly with your audience through automated and personalized email campaigns. From newsletters to drip campaigns, we design, execute, and optimize to drive results.',
    image: EmailMarketingImg,
  },
  {
    title: 'Branding Services',
    description: 'Our Branding Services shape how customers perceive your business. From logo creation to visual identity and messaging — we craft a unique brand story that resonates, inspires loyalty, and leaves a lasting impression.',
    image: BrandingServiceImg,
  },
];

const InternetMarketingPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openModal = (service: string) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: '', phone: '', email: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const payload = {
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    service: selectedService,
  };

  try {
    const response = await fetch(`${API_URL}/internetmarketingcontact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      alert('Successfully submitted! Our team will reach you soon.');
      closeModal();
    } else {
      const errorData = await response.json();
      alert('Submission failed: ' + JSON.stringify(errorData));
    }
  } catch (error) {
    alert('An error occurred. Please try again later.');
    console.error(error);
  }
};

  return (
    <>
      <div className="ims-container">
        <h2 className="ims-title">Internet Marketing Services</h2>
        {services.map((service, index) => (
          <div
            className={`ims-section ${index % 2 === 0 ? 'left-text' : 'right-text'}`}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            key={index}
          >
            <div className="ims-text">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="ims-cta-button" onClick={() => openModal(service.title)}>Get Started</button>
            </div>
            <div className="ims-image">
              <img src={service.image} alt={service.title} loading="lazy" />
            </div>
          </div>
        ))}
      </div>

      {showModal && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h3>Get in Touch</h3>
      <form onSubmit={handleSubmit} className="ims-form">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          required
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          required
        >
          <option value="">Select a Service</option>
          {services.map((service, i) => (
            <option key={i} value={service.title}>{service.title}</option>
          ))}
          <option value="Free Consultation">Free Consultation</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <button className="close-modal" onClick={closeModal}>×</button>
    </div>
  </div>
)}

      <section className="ims-strategy-container">
        <h2 className="ims-strategy-title" data-aos="fade-up">Internet Marketing Strategy</h2>
        <p className="ims-strategy-subtitle" data-aos="fade-up">Elevate Your Digital Presence with a Smart, Data-Driven Strategy</p>

        <div className="ims-strategy-content" data-aos="fade-up">
          <p>At Violet Infotech, we don’t just promote — we plan. A successful <strong>internet marketing strategy</strong> is more than just social posts or paid ads. It's a unified approach that aligns your business goals with the right digital channels, audience behavior, and performance metrics.</p>
        </div>

        <div className="ims-strategy-points" data-aos="fade-up">
          <ul>
            <li><strong>Audience Research & Segmentation</strong> — Know your audience and how to reach them effectively.</li>
            <li><strong>Multi-Channel Planning</strong> — SEO, PPC, social media, email & content tailored to your goals.</li>
            <li><strong>Content & Messaging Framework</strong> — Consistent messaging across the buyer journey.</li>
            <li><strong>Conversion Funnel Optimization</strong> — Turn visitors into leads and leads into customers.</li>
            <li><strong>Performance Tracking & Analytics</strong> — Measure, optimize, and grow with real-time data.</li>
          </ul>
        </div>

        <div className="ims-strategy-highlight" data-aos="fade-up">
          <p><strong>Why It Works:</strong></p>
          <ul>
            <li>✅ Custom strategies, not one-size-fits-all</li>
            <li>✅ Data-backed decisions and measurable results</li>
            <li>✅ Seamless integration across platforms</li>
            <li>✅ ROI-focused from start to finish</li>
          </ul>
        </div>

        <blockquote className="ims-strategy-quote" data-aos="fade-in">
          “Businesses with a documented digital strategy are <strong>2.5x more likely</strong> to report marketing success.”
        </blockquote>

        <div className="ims-strategy-cta" data-aos="zoom-in">
          <p>Let us build a strategy that puts your brand in front of the right audience — at the right time — with the right message.</p>
          <button className="ims-strategy-button" onClick={() => openModal('Free Consultation')}>Get Free Consultation</button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default InternetMarketingPage;