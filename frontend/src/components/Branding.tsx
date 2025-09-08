import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/branding.css';
import Footer from '../components/Footer';
import PromotionImg from '../assets/image/branding/brand-words-illustration.png';
import VistingCard from '../assets/image/branding/visting-card.jpg';
import Label from '../assets/image/branding/laebel (2).png';
import Gpromotion1 from '../assets/image/branding/gallery/p-1.jpg';
import Gpromotion2 from '../assets/image/branding/gallery/p-2.jpg';
import Gpromotion3 from '../assets/image/branding/gallery/p-3.jpg';
import Vcard1 from '../assets/image/branding/gallery/v-1.png';
import Vcard2 from '../assets/image/branding/gallery/v-2.png';
import Vcard3 from '../assets/image/branding/gallery/v-3.png';
import Label1 from '../assets/image/branding/gallery/l-1.png';
import Label2 from '../assets/image/branding/gallery/l-2.jpg';
import Label3 from '../assets/image/branding/gallery/l-3.png';
import banner1 from '../assets/image/branding/gallery/b-1.png';
import banner2 from '../assets/image/branding/gallery/b-2.png';
import banner3 from '../assets/image/branding/gallery/b-3.png';
import banner4 from '../assets/image/branding/gallery/b-4.jpg';

interface Detail {
  heading: string;
  content: string;
}

interface Section {
  title: string;
  details: Detail[];
  image: string;
  gallery: string[];
}

const Branding: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Promotion Works');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleOpenModal = (service: string) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, service: selectedService });
    // TODO: connect to backend API
    handleCloseModal();
  };

  const sections: Section[] = [
    {
      title: 'Promotion Works',
      details: [
        {
          heading: 'What We Do',
          content: 'We create and design promotional materials such as brochures, flyers, posters, and marketing kits that effectively communicate your brand message.',
        },
        {
          heading: 'How We Do It',
          content: 'Our team collaborates with you to understand your goals, designs eye-catching materials, and ensures quality prints with fast delivery.',
        },
        {
          heading: 'What Will Happen',
          content: 'Your brand visibility improves, audience engagement increases, and you stand out in the market with strong, consistent branding.',
        },
      ],
      image: PromotionImg,
      gallery: [Gpromotion1, Gpromotion2, Gpromotion3, Gpromotion2, Gpromotion1],
    },
    {
      title: 'Visiting Cards',
      details: [
        {
          heading: 'What We Do',
          content: 'We design personalized and professional visiting cards tailored to your business personality and industry standards.',
        },
        {
          heading: 'How We Do It',
          content: 'Our design team creates multiple mockups based on your brand colors, fonts, and logo, and we finalize the best design for printing.',
        },
        {
          heading: 'What Will Happen',
          content: 'You make lasting impressions during networking, building trust and credibility with a standout visiting card.',
        },
      ],
      image: VistingCard,
      gallery: [Vcard1, Vcard2, Vcard3, Vcard2, Vcard1, Vcard3],
    },
    {
      title: 'Labeling',
      details: [
        {
          heading: 'What We Do',
          content: 'We design product labels that are attractive, informative, and compliant with packaging regulations.',
        },
        {
          heading: 'How We Do It',
          content: 'We study your product, identify your branding needs, and create a label design that aligns with your product identity.',
        },
        {
          heading: 'What Will Happen',
          content: 'Your product gains shelf appeal and customer trust, leading to increased sales and brand recall.',
        },
      ],
      image: Label,
      gallery: [Label1, Label2, Label3, Label2, Label1, Label3],
    },
    {
      title: 'Banners',
      details: [
        {
          heading: 'What We Do',
          content: 'We create promotional banners for indoor and outdoor use, suitable for events, exhibitions, and store promotions.',
        },
        {
          heading: 'How We Do It',
          content: 'We use high-resolution images, bold typography, and durable materials to design and print banners that grab attention.',
        },
        {
          heading: 'What Will Happen',
          content: 'Your message will be clearly communicated to a large audience, boosting footfall and engagement.',
        },
      ],
      image: banner4,
      gallery: [banner1, banner2, banner3, banner3, banner4, banner2],
    },
  ];

  return (
    <>
      <div className="branding-page">
        <h1 className="branding-heading" data-aos="fade-down">Our Branding Services</h1>
        {sections.map((section, index) => (
          <section
            className={`branding-section ${index % 2 === 0 ? 'left' : 'right'}`}
            key={section.title}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            <div className="branding-image">
              <img src={section.image} alt={section.title} />
            </div>
            <div className="branding-content">
              <h2>{section.title}</h2>
              {section.details.map((detail, i) => (
                <div key={i} className="branding-detail">
                  <h3>{detail.heading}</h3>
                  <p>{detail.content}</p>
                </div>
              ))}
              <button className="branding-btn" onClick={() => handleOpenModal(section.title)}>Get Started</button>
            </div>
          </section>
        ))}
      </div>

      <div className="container-fluid my-5 branding-gallery-container">
        <h2 className="gallery-main-heading text-center" data-aos="fade-up">Branding Gallery</h2>
        {sections.map((section, index) => (
          <div className="my-5 section-gap" key={index}>
            <h3 className="gallery-title text-center mb-4">{section.title}</h3>
            <div id={`carousel-${index}`} className="carousel slide carousel-fade" data-bs-ride="carousel">
              <div className="carousel-inner">
                {Array.from({ length: Math.ceil(section.gallery.length / 3) }, (_, slideIndex) => (
                  <div className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`} key={slideIndex}>
                    <div className="row">
                      {section.gallery.slice(slideIndex * 3, slideIndex * 3 + 3).map((img, i) => (
                        <div className="col-md-4" key={i}>
                          <img src={img} className="d-block w-100 img-fluid" alt={`Gallery ${i}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="branding-contact" data-aos="fade-up">
        <div className="container">
          <h2>Get Your Design</h2>
          <p>Want to start your business growth journey with Violet Infotech? Contact us today for a free consultation.</p>
          <button onClick={() => handleOpenModal('Contact')}>Contact Us</button>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content" data-aos="zoom-in">
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <h2 className="modal-title">Request Service: {selectedService}</h2>
            <form onSubmit={handleSubmit} className="modal-form">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
              <select name="service" value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                <option value="Promotion Works">Promotion Works</option>
                <option value="Visiting Cards">Visiting Cards</option>
                <option value="Labeling">Labeling</option>
                <option value="Banners">Banners</option>
              </select>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Branding;