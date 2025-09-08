import React, { useState } from "react";
import "../assets/css/content_marketing.css";
import Footer from "../components/Footer";
import image1 from "../assets/image/content_marketing_services/content-1.jpg";
import image2 from "../assets/image/content_marketing_services/content2.svg";
import {
  FaRocket,
  FaBullhorn,
  FaUsers,
  FaUserCheck,
  FaChartLine,
  FaStar,
  FaHeart,
  FaDollarSign,
  FaTrophy,
  FaFileAlt,
  FaCogs,
  FaCheckCircle,
  FaLaptopCode,
  FaHeadset,
} from "react-icons/fa";

const benefits = [
  { icon: <FaRocket />, title: "Craft Blogs With Infographics" },
  { icon: <FaBullhorn />, title: "Improved brand awareness" },
  { icon: <FaUsers />, title: "High Audience Engagement" },
  { icon: <FaUserCheck />, title: "Generate More Qualified leads" },
  { icon: <FaChartLine />, title: "Better Conversions" },
  { icon: <FaStar />, title: "Improved Brand Value and Authority" },
  { icon: <FaHeart />, title: "Loyal Customer Base" },
  { icon: <FaDollarSign />, title: "Improved Revenue" },
  { icon: <FaTrophy />, title: "Beat your Competition" },
];

const reasons = [
  {
    icon: <FaRocket />,
    title: "Craft Blogs With Infographics",
    desc: "Infographics aren't enough for content that converts. Visual storytelling is just the start. At ContentMarketing.io, we combine blogging with infographics that add flow, structure, and real data for those engaging bites to make them more enjoyable to read, easier to scan, and simpler to understand.",
  },
  {
    icon: <FaFileAlt />,
    title: "Craft Informative and Engaging Articles",
    desc: "The ContentMarketing.io team specializes in posts in the blog marketing family of topics. We research high-authority and top-performing blogs to see what already works. From listicles and how-tos to news updates, pillar pages, and magazines, our team adapts content to meet your audience and the expectations of the industry.",
  },
  {
    icon: <FaCogs />,
    title: "Customized SEO-friendly Content Strategies",
    desc: "We plan posts after running competitor analysis, picking content clusters, evaluating keyword gaps, and defining audience interest. Our strategists combine SEO knowledge, clear concepts, and engaging copy for maximum traction and long-term content performance.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Relevant and High-Quality Content",
    desc: "With holistic content plans, our writers deliver SEO-optimized, audience-focused, and plagiarism-free content that answers questions, educates, and drives traffic—making your platform an authority in your niche.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Content Marketing Tactics",
    desc: "We at ContentMarketing.io plan scalable strategies to help you with organic growth, paid ad funneling, email marketing support, and inbound lead generation. Whether it’s driving niche traffic or ranking for commercial-intent keywords, our proven tactics truly connect your content with business results.",
  },
  {
    icon: <FaHeadset />,
    title: "Comprehensive Support",
    desc: "Don’t stop at blogs. Our team helps with copy for web pages, landing pages, emailers, press releases, case studies, and whitepapers. We offer long-term content partnerships for consistent quality and scalable performance. Let us handle your writing while you focus on growth and innovation.",
  },
];

const ContentMarketing: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const payload = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    service: "Content Marketing",
  };

  try {
    const response = await fetch(`${API_URL}/contentmarketingcontact/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json();
      alert("Form submitted successfully!");
      console.log(data);
      closeModal();
      setFormData({ name: '', email: '', phone: '' });
    } else {
      const error = await response.json();
      console.error("Error:", error);
      alert("Submission failed. Check console.");
    }
  } catch (err) {
    console.error("Error submitting form:", err);
    alert("An error occurred. Please try again.");
  }
};

  const faqData = [
    {
      question: "Will Content Marketing Help A Technology Based Business Generate Leads?",
      answer:
        "Yes, content marketing can be extremely beneficial for a technology-based business in generating leads. By creating valuable and informative content that addresses the pain points and interests of your target audience, you can attract prospects and establish your expertise in the industry. Through strategic content distribution channels, such as blogs, social media, newsletters, and whitepapers, you can effectively engage your audience, build brand awareness, and nurture leads, all in one go.",
    },
    {
      question: "What are some lead generation tactics commonly used in the Tech sector?",
      answer: "With call-to-actions and gated content, you can capture contact information and further qualify prospects for your technology-based business.",
    },
    {
      question: "What are the different types of content which can be used for the tech industry?",
      answer: "Content marketing is a valuable strategy to engage and educate your audience, especially in the tech industry. You can do this by blog posts, whitepapers, case studies, infographics, video, social media etc. ",
    },
  ];

  return (
    <>
      <div className="content-marketing-container">
        <section className="cm-hero">
          <h1>Content Marketing</h1>
          <p>Crafting Brand Success, One Word at a Time</p>
        </section>

        <section className="cm-main-content">
          <div className="cm-left">
            <h2>Is Your Business Facing These Bottlenecks?</h2>
            <ul>
              <li>Low Brand Awareness</li>
              <li>No Leads</li>
              <li>Low Traffic/Visitors</li>
              <li>Decreased Sales</li>
              <li>Poor Conversion</li>
            </ul>
            <p><strong>You’re not alone.</strong></p>
            <p>
              A whopping <strong>90.63%</strong> of all website content gets no organic search traffic from Google and <strong>5.3%</strong> receives no more than 10 visits per month (Ahrefs).
            </p>
            <p>
              Don’t waste your time, money and resources on content writing services that get zero returns. <strong>Maximize your digital impact with Violet Infotech.</strong>
            </p>
          </div>

          <div className="cm-right">
            <img src={image1} alt="Content Graphic" />
          </div>
        </section>

        <section className="cm-bottom">
          <div className="cm-image-block">
            <img src={image2} alt="Content Illustration" />
          </div>
          <div className="cm-text-block">
            <h3>Digital Content Marketing Services That Drive Real Growth</h3>
            <p>
              Violet Infotech Internet Marketing Agency takes pride in delivering <strong>results-oriented SEO content marketing services</strong> that help clients connect with their target audience, build trust and drive business growth.
            </p>
            <p>
              We first test out content strategies with our in-house demand generation team, allowing us to execute only <strong>proven strategies</strong> for our clients and avoid wasted marketing spend.
            </p>
            <p>
              Don’t let low-quality website content hold back your business. Power up your digital presence with <strong>conversion-focused, data-driven content marketing solutions</strong> that work as hard as you do.
            </p>
            <p>
              Whether you need content optimization or a complete overhaul, we can do both. Contact us today to discuss your content marketing needs.
            </p>
            <button className="cm-action-btn" onClick={openModal}>UPGRADE MY CONTENT STRATEGY</button>
          </div>
        </section>

        <section className="cm-benefits-section">
          <h2>How Our Content Marketing Services Help You Grow Your Platform?</h2>
          <div className="cm-benefits-grid">
            {benefits.map((item, index) => (
              <div className="cm-benefit-card" key={index}>
                <div className="cm-benefit-icon">{item.icon}</div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cm-why-choose-section">
          <h2>Why Should You Choose ContentMarketing.io To Promote Your Technological Platform?</h2>
          <div className="cm-why-choose-grid">
            {reasons.map((reason, index) => (
              <div className="cm-why-card" key={index}>
                <div className="cm-why-icon">{reason.icon}</div>
                <h4>{reason.title}</h4>
                <p>{reason.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cm-process-section">
          <h2>Content Marketing Process</h2>
          <p>We’ll need to identify a few things to create an effective content marketing strategy tailored to your business.</p>
          <div className="cm-process-grid">
            <div className="cm-process-card">
              <h3>1</h3>
              <h4>Audience Research</h4>
              <p>Understanding your target audience can help you better cater to their needs. It is essential to grasp the language they use so it will be easier for them to find you.</p>
            </div>
            <div className="cm-process-card">
              <h3>2</h3>
              <h4>Keyword Research</h4>
              <p>Keyword research involves identifying your target audience’s keywords and other industry-specific queries. Doing this will help you target the areas you need to focus your Content Marketing efforts.</p>
            </div>
            <div className="cm-process-card">
              <h3>3</h3>
              <h4>Content Development</h4>
              <p>Creating quality content is crucial for an effective Content Marketing strategy. We develop advanced strategies to create high-quality content, generating organic traffic to your website.</p>
            </div>
            <div className="cm-process-card">
              <h3>4</h3>
              <h4>Tracking and Optimization</h4>
              <p>Tracking and optimizing your content will give you precious insight into your improvements and assess your strength and weakness. This will help us curate a content marketing strategy that is tailor-made for you.</p>
            </div>
          </div>
        </section>

        <section className="container-fluid cm-cta-section">
          <div className="cm-cta-wrapper">
            <h2>Need Help With Your Content Strategy?</h2>
            <p>Let us craft a data-driven content plan tailored for your tech business.</p>
            <button className="cm-action-btn1" onClick={openModal}>SCHEDULE A FREE CONSULTATION</button>
          </div>
        </section>

        {modalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>✖</button>
              <h2>Schedule a Free Consultation</h2>
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
                <input type="tel" name="phone" placeholder="Your Phone" required value={formData.phone} onChange={handleChange} />
                <input type="text" value="Content Marketing" disabled />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}

        <section className="cm-faq-section">
          <h2 className="cm-faq-title">FAQ</h2>
          <div className="cm-faq-container">
            {faqData.map((item, index) => (
              <div className={`cm-faq-item ${openIndex === index ? "open" : ""}`} key={index} onClick={() => toggleFAQ(index)}>
                <div className="cm-faq-question">
                  <strong>{item.question}</strong>
                  <span className="cm-faq-toggle">{openIndex === index ? "−" : "+"}</span>
                </div>
                {openIndex === index && (
                  <div className="cm-faq-answer"><p>{item.answer}</p></div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ContentMarketing;