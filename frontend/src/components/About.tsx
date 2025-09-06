import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/about.css';
import CountUp from 'react-countup';
import Footerend from '../components/Footer';

import whoWeAreImg from '../assets/image/about/image - 2.jpg';
import missionImg from '../assets/image/about/image - 1.png';
import teamImg from '../assets/image/about/image - 4.png';
import coreServicesImg from '../assets/image/about/image - 6.jpg';

const About = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
  });

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setModalOpen(false);
    setFormData({ name: '', phone: '', email: '', service: '' }); // Reset form
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/aboutcontact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        closeModal();
      } else {
        const error = await response.json();
        alert('Submission failed: ' + JSON.stringify(error));
      }
    } catch (err) {
      alert('Error: ' + err);
    }
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" data-aos="fade-down">
        <h1>About Violet Infotech</h1>
        <p>Empowering Businesses with Innovative Digital Solutions</p>
      </section>

      {/* Who We Are */}
      <section className="who-we-are-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title-who-we-are">Who We Are</h2>
          <div className="who-we-are-content">
            <div className="text-content">
              <p>
                Violet Infotech is a full-stack digital solutions company driven by creativity, technology, and results. Based in India and serving clients globally, we specialize in website development, digital marketing, and branding that delivers impact. Whether you're a startup looking to launch your first site, or an established business ready to scale your digital presence—we bring the tools, strategies, and innovation to make it happen.
              </p>
              <p>
               We believe every brand has a story—and our mission is to bring yours to life through stunning visuals, seamless user experiences, and targeted digital campaigns that drive measurable growth. Our team of designers, developers, marketers, and strategists work collaboratively to build high-converting websites, run ROI-focused ad campaigns, and design memorable brand identities
              </p>
              <p>With a commitment to quality, transparency, and long-term partnerships, Violet Infotech is not just your service provider—we’re your digital growth partner.</p>
            </div>
            <div className="image-content">
              <img src={whoWeAreImg} alt="Who We Are" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mission-section" data-aos="fade-right">
        <div className="container">
          <h2 className="section-title-our-mission">Our Mission</h2>
          <div className="mission-content">
            <div className="image-content">
              <img src={missionImg} alt="Mission" />
            </div>
            <div className="text-content">
              <p>
                Our mission is to empower businesses through innovative digital solutions that drive growth, engagement, and long-term success. 
                We help brands establish a powerful digital presence by combining creativity, strategic thinking, and cutting-edge technology. 
                Whether you're launching a startup or expanding an established enterprise, we align our efforts with your vision to deliver meaningful and measurable outcomes. 
                Every project we handle is guided by a user-centric approach, a commitment to quality, and a passion for digital excellence.
              </p>
              <p>
                At Violet Infotech, we go beyond providing services — we build trusted partnerships. 
                Our team specializes in web development, digital marketing, and branding, working closely with clients to craft custom solutions that connect with their audience. 
                Through transparent communication, continuous innovation, and reliable delivery, we help businesses stay ahead in a fast-evolving digital world. 
                Our mission is to grow together with our clients, creating impactful experiences that bring lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="what-we-do-section" data-aos="fade-left">
        <div className="container">
          <h2 className="section-title-what-we-do">What We Do</h2>
          <div className="services-card-container">
            <div className="service-card">
              <h3 className="service-title">Web Development</h3>
              <p>
                We create stunning and high-performance websites tailored to meet your business goals. From simple static pages to dynamic e-commerce solutions, our development team builds scalable and mobile-optimized platforms that deliver results.
              </p>
              <ul>
                <li>Static Website Design</li>
                <li>Dynamic Web Applications</li>
                <li>E-Commerce Platforms</li>
                <li>CMS Integration</li>
                <li>Responsive Mobile Design</li>
              </ul>
            </div>
            <div className="service-card">
              <h3 className="service-title">Digital Marketing</h3>
              <p>
                Maximize your brand visibility and drive targeted traffic with our powerful digital marketing solutions. We blend creativity and data to boost conversions and connect with your ideal audience through multiple channels.
              </p>
              <ul>
                <li>Email Marketing</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Lead Generation Campaigns</li>
                <li>Social Media Strategy</li>
                <li>Analytics & Reporting</li>
              </ul>
            </div>
            <div className="service-card">
              <h3 className="service-title">Branding</h3>
              <p>
                We build unforgettable brand identities that reflect your vision and voice. From logos to business cards and identity systems, we help businesses stand out with visual appeal and messaging that connects with customers.
              </p>
              <ul>
                <li>Logo Design</li>
                <li>ID Card Design</li>
                <li>Business Card Design</li>
                <li>Stationery & Brand Kit</li>
                <li>Social Media Branding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="team-section" data-aos="zoom-in">
        <div className="container">
          <h2 className="section-title-our-team">Our Team</h2>
          <div className="team-content">
            <div className="text-content">
              <p>
                At Violet Infotech, our strength lies in our people. We are a passionate team of creative thinkers, tech enthusiasts, digital strategists, designers, developers, and branding experts—all united by a shared vision: to empower businesses through powerful digital solutions. Each member brings a unique skill set and fresh perspective, allowing us to tackle challenges with agility and innovation.
              </p>
              <p>
                From crafting pixel-perfect websites to running high-performance ad campaigns, our team works collaboratively to deliver results that exceed expectations. We believe in open communication, continuous learning, and a client-first mindset, ensuring every project we touch is built with precision, creativity, and care.
              </p>
              <p>We're not just service providers—we're your dedicated digital partners, committed to your growth, every step of the way.</p>
            </div>
            <div className="image-content">
              <img src={teamImg} alt="Our Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="about-achievements centered" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title-our-achievements" data-aos="fade-down">Our Achievements</h2>
          <div className="achievement-row">
            <div className="achievement-card" data-aos="zoom-in">
              <div className="ring ring-green">
                <CountUp end={100} duration={3} suffix="+" />
              </div>
              <p>Projects Delivered</p>
            </div>
            <div className="achievement-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="ring ring-blue">
                <CountUp end={50} duration={3} suffix="+" />
              </div>
              <p>Satisfied Clients</p>
            </div>
            <div className="achievement-card" data-aos="zoom-in" data-aos-delay="400">
              <div className="ring ring-orange">
                <CountUp end={5} duration={3} suffix="+" />
              </div>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="core-services-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title-our-core-services">Our Core Services</h2>
          <div className="core-services-content reverse-order">
            <div className="image-content">
              <img src={coreServicesImg} alt="Core Services" />
            </div>
            <div className="text-content">
              <ul className="services-list">
                <li>
                  <strong>Web Development:</strong>
                  We design and build responsive, high-performance websites tailored to your business needs.
                  Whether it's a static site or a dynamic web application, our solutions are modern, fast, and scalable.
                  We focus on clean code, mobile-first design, and SEO-friendly structure.
                  From concept to launch, we turn ideas into digital reality.
                </li>
                <li>
                  <strong>Digital Marketing:</strong>
                  Our marketing strategies are data-driven and results-oriented to help you grow online.
                  We specialize in SEO, Google Ads, social media marketing, email campaigns, and lead generation.
                  We craft campaigns that convert and continuously analyze metrics to boost ROI.
                </li>
                <li>
                  <strong>Branding:</strong>
                  Your brand is your story — and we help you tell it right.
                  From logo design and messaging to visual identity, we create assets that speak clearly.
                  Build a brand that connects emotionally and visually with your audience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-contact" data-aos="fade-up">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>Want to start your digital journey with Violet Infotech? Contact us today for a free consultation.</p>
          <button onClick={openModal}>Contact Us</button>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <h3>Contact Us</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email ID</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select an Option --</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Branding">Branding</option>
                  <option value="Full Package">Full Package</option>
                </select>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      )}

      <Footerend />
    </div>
  );
};

export default About;