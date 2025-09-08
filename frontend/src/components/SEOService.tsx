import React, { useEffect, useState  } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../assets/css/seo_service.css';
import {
  FaSearch,
  FaFileAlt,
  FaCode,
  FaLaptopCode,
  FaExternalLinkAlt,
  FaMapMarkedAlt,
  FaLink,
  FaUserSecret,
  FaChartLine,
  FaGlobe,
  FaCloudUploadAlt,
  FaMobileAlt,
} from 'react-icons/fa';
import womanImage from '../assets/image/seo/seo4.jpg'; // Make sure to add this image
import Footer from './Footer';


const SEOService: React.FC = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const cardColors = [
    '#E3F2FD', '#F1F8E9', '#FFF3E0', '#EDE7F6',
    '#FCE4EC', '#E0F7FA', '#FFF9C4', '#ECEFF1',
    '#F3E5F5', '#E8F5E9', '#FBE9E7', '#FFFDE7',
  ];

  const cardData = [
    {
      title: 'Keyword Research & Strategy',
      icon: <FaSearch />,
      content: 'We find the best keywords to help people discover your business online. Our team checks what your audience is searching for. We also look at what your competitors are ranking for. Then we build a smart keyword plan that fits your goals. This helps your website show up in the right search results. Good keywords bring more traffic and better leads. Let us create a strategy that gets real results.',
    },
    {
      title: 'Link Building Services',
      icon: <FaLink />,
      content: 'We build high-quality backlinks from trusted and relevant websites to improve your search engine rankings. Our team follows safe, white-hat SEO practices to ensure long-term success. By partnering with authoritative sites, we enhance your website’s credibility and online visibility. Strong backlinks increase traffic, boost your domain authority, and help your business stand out. Let us strengthen your SEO with powerful and reliable link-building strategies.',
    },
    {
      title: 'Technical SEO Audit',
      icon: <FaFileAlt />,
      content: 'We audit your website’s backend to identify and fix technical issues that impact performance. From page speed and broken links to crawl errors and mobile usability, we ensure your site is fully optimized for search engines. By improving structure and accessibility, we help your pages get indexed faster and rank higher. Our goal is to make your website faster, smoother, and more SEO-friendly for both users and search engines.',
    },
    {
      title: 'On-Page SEO',
      icon: <FaCode />,
      content: 'We optimize your website’s content and structure to improve visibility and performance. Our team updates titles, headings, and meta tags with relevant keywords to boost search rankings. We strategically place keywords, enhance readability, and ensure images are optimized for faster loading. By making your content clearer, more engaging, and search-friendly, we help both users and search engines better understand your site. Let us make your pages more effective and impactful online.',
    },
    {
      title: 'SEO Website Optimization',
      icon: <FaLaptopCode />,
      content: 'We enhance your website for both search engines and users by improving speed, structure, and overall performance. Our team fixes technical issues that affect rankings and updates content with targeted keywords for better visibility. We also optimize images, internal links, and mobile responsiveness. Every update is designed to increase traffic, improve engagement, and help your site rank higher in search results.',
    },
    {
      title: 'Local SEO Services',
      icon: <FaMapMarkedAlt />,
      content: 'We help your business appear in local search results by optimizing your Google Business Profile and ensuring accurate, accessible information. Our team targets local keywords to attract nearby customers and manages reviews to build trust within your community. These strategies drive more calls, store visits, and local traffic—helping you grow your presence and reputation in your area.',
    },
    {
      title: 'Competitor Analysis',
      icon: <FaUserSecret />,
      content: 'We analyze your top competitors to uncover their strengths and weaknesses online. Our team reviews their keywords, content strategies, and backlink profiles to see what’s working—and where they fall short. This insight allows us to craft a smarter, stronger SEO strategy tailored to your business. By identifying new opportunities and staying one step ahead, we help you gain a competitive edge and accelerate growth.',
    },
    {
      title: 'Analytics and Reporting',
      icon: <FaChartLine />,
      content: 'We monitor your website’s performance using tools like Google Analytics to track traffic, clicks, bounce rates, and more. Our team provides clear, actionable reports that highlight what’s working and where improvements are needed. These insights help you make informed business decisions and continually optimize your online presence. Let us keep you updated with regular performance tracking and strategic recommendations.',
    },
    {
      title: 'International SEO',
      icon: <FaGlobe />,
      content: 'We monitor your website’s performance using tools like Google Analytics to track traffic, clicks, bounce rates, and more. Our team provides clear, actionable reports that highlight what’s working and where improvements are needed. These insights help you make informed business decisions and continually optimize your online presence. Let us keep you updated with regular performance tracking and strategic recommendations.',
    },
    {
      title: 'Cloud SEO Optimization',
      icon: <FaCloudUploadAlt />,
      content: 'We optimize cloud-hosted websites to enhance SEO performance by improving speed, uptime, and overall site reliability. Our team ensures your cloud infrastructure is fast, secure, and scalable. We fine-tune content, URLs, and technical settings to align with search engine best practices. With a faster and more search-friendly site, you’ll enjoy higher rankings and better traffic. Let us help your cloud-based website grow with confidence.',
    },
    {
      title: 'Mobile SEO',
      icon: <FaMobileAlt />,
      content: 'We ensure your website delivers a smooth, user-friendly experience on all mobile devices. Our team enhances mobile loading speed, fixes layout issues, and optimizes design for smaller screens. We also adjust images and content for better readability. A mobile-optimized site not only improves user experience but also ranks higher in search results. Let us help your site perform seamlessly across phones and tablets.',
    },
    {
      title: 'SEO Strategy Consulting',
      icon: <FaExternalLinkAlt />,
      content: 'We help you develop a results-driven SEO strategy tailored to your business goals. Our experts analyze your website, industry, and competition to identify the best keywords and content opportunities. You’ll receive a clear, step-by-step roadmap to boost search rankings and drive traffic. We also guide you in avoiding common SEO pitfalls. With personalized, expert advice, we’ll position your business for long-term success online.',
    }
  ];
  const faqs = [
  {
    question: 'WHAT IS DIGITAL MARKETING?',
    answer: `Digital marketing encompasses all aspects and activities of marketing an organization, business, or brand across digital channels on the internet. Digital marketing strategies and tactics are crafted to target specific online audiences across a variety of internet-connected devices.

Digital marketing includes optimization across search engines (the likes of Google and Bing), visibility and engagement on social media platforms, email marketing communications, website design and development and integrated applications to connect and engage with prospects and customers.`
  },
  {
    question: 'WHAT DOES A DIGITAL MARKETER DO?',
    answer: `A digital marketer develops strategies to build a brand’s presence online. They manage SEO, paid ads, social media, and content to drive traffic and leads.`
  },
  {
    question: 'WOULD MY BUSINESS BENEFIT FROM DIGITAL MARKETING SERVICES?',
    answer: `Yes. Whether you’re a small business or a large enterprise, digital marketing helps you reach your target audience effectively and affordably.`
  },
  {
    question: 'HOW COST-EFFECTIVE IS DIGITAL MARKETING COMPARED WITH TRADITIONAL MARKETING?',
    answer: `Digital marketing is generally more cost-effective. You can track your ROI more easily and scale campaigns based on performance and budget.`
  },
  {
    question: 'HOW DO YOU IDENTIFY A SUCCESSFUL DIGITAL MARKETING COMPANY?',
    answer: `Look for proven results, client testimonials, transparent reporting, and a deep understanding of your industry and audience.`
  },
];

const [modalOpen, setModalOpen] = useState(false);
const [modalTitle, setModalTitle] = useState('');
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  time: '',
  date: '',
});

// const today = new Date().toISOString().split('T')[0];

const getNextDates = () => {
  const days = [];
  const current = new Date();
  for (let i = 0; i < 14; i++) {
    const next = new Date();
    next.setDate(current.getDate() + i);
    if (next.getDay() !== 0) { // Exclude Sundays
      days.push(next.toISOString().split('T')[0]);
    }
  }
  return days;
};

const timeSlots = [
  '10 AM - 11 AM', '11 AM - 12 PM', '12 PM - 1 PM',
  '2 PM - 3 PM', '3 PM - 4 PM', '4 PM - 5 PM', '5 PM - 6 PM'
];

const openModal = (title: string) => {
  setModalTitle(title);
  setModalOpen(true);
};

const closeModal = () => {
  setModalOpen(false);
  setFormData({ name: '', email: '', phone: '', time: '', date: '' });
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const payload = {
    ...formData,
    service: modalTitle === "Increase Your Leads" ? "SEO Services" : "Custom Booking",
  };

  try {
    const response = await fetch(`${API_URL}/soecontact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Form submitted successfully!');
      closeModal();
    } else {
      alert('Submission failed: ' + JSON.stringify(data));
    }
  } catch (error) {
    alert('Something went wrong: ' + error);
  }
};

  return (
    <>
      {/* === New Banner Section === */}
      <section className="seo-company-banner">
        <div className="seo-company-wrapper">
          <div className="seo-company-text">
            <h2>An SEO Marketing Company That Gets It</h2>
            <p>
              Let’s face it. You know what you need but you just don’t know how to get it.
              Our SEO specialists hear that over and over from SEO clients who contact Thrive Internet Marketing Agency.
            </p>
            <p>You’re likely here because of one or more of the following reasons:</p>
            <ul>
              <li>🌿 Your website isn’t being found online.</li>
              <li>🌿 Your website traffic has diminished recently and you don’t know why.</li>
              <li>🌿 Suddenly, your volume of incoming calls and leads has declined.</li>
              <li>🌿 You’re starting a new website and want to ramp up new business quickly.</li>
            </ul>
            <p>
              If any of these four pain points ring a bell, rest assured that you’ve come to the right SEO marketing company.
              There’s a reason our search engine optimization agency is currently serving hundreds of clients and providing
              professional SEO services to answer Google’s ever-changing algorithm.
            </p>
            <button className="seo-banner-button" onClick={() => openModal("Schedule a Call")}>SCHEDULE A CALL</button>
          </div>
          <div className="seo-company-image">
            <img src={womanImage} alt="SEO Consultant" />
            <div className="seo-company-icon green">📈</div>
            <div className="seo-company-icon orange">📊</div>
          </div>
        </div>
      </section>

      {/* === Existing Cards Section === */}
      <div className="seo-container">
        <h1 className="seo-title" data-aos="fade-up">
          🚀 Search Engine Optimization (SEO) Services
        </h1>
        <p className="seo-subtitle" data-aos="fade-up">
          Maximize your online visibility and attract high-quality leads with modern SEO strategies tailored for success.
        </p>

        <div className="card-grid">
          {cardData.map((card, index) => (
            <div
              className="seo-card"
              key={index}
              style={{ backgroundColor: cardColors[index % cardColors.length] }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="seo-card-title">
                <span className="seo-icon">{card.icon}</span> {card.title}
              </h3>
              <p className="seo-card-content">{card.content}</p>
              <button className="seo-button" onClick={() => openModal("Get Start")}>Get Started</button>
            </div>
          ))}
        </div>
      </div>
      <div className='container seo-ads'>
        <h3>You’ve Finally Found the Right SEO Agency With Answers</h3>
        <p>Thrive has the SEO solutions you’ve been searching for. Don’t let another day go by where your competitors are looking down on you! It’s time to be discovered!</p>
        <button className="seo-banner-button2" onClick={() => openModal("Increase Your Leads")}>INCREASE YOUR LEADS</button>
      </div>
      {/* === Top Gradient Banner Section === */}
      <section className="seo-top-intro">
        <div className="seo-top-content">
          <h1 className="seo-top-heading">Why Thrive’s SEO Services Are Better Than the Rest</h1>
          <p className="seo-top-subheading">
            Our SEO Solutions Work: We’ve Proven it Over and Over Again
          </p>
        </div>
      </section>

      {/* === New Banner Section === */}
      <section className="seo-company-banner">
        <div className="seo-company-box blue-box" data-aos="fade-up">
          <h3><FaUserSecret /> Experience Matters</h3>
          <p>
            At Violet Infotech, we help businesses from all industries grow their online presence and increase revenue.
Our SEO experts focus on delivering real results by improving your website traffic and lead generation.
We support businesses of all sizes with strategies tailored to their goals.
Our team stays up to date with the latest SEO trends and tools.
We work together to solve problems quickly and effectively.
With a collaborative and client-first approach, we make sure you get the best support.
Choose Violet Infotech to boost your visibility and grow your business online.
          </p>
        </div>

        <div className="seo-company-box sky-box" data-aos="fade-up">
          <h3><FaLaptopCode /> Dedicated SEO Professionals</h3>
          <p>
            We believe our job is to make a technical, complicated and sometimes overwhelming search
            engine optimization process as simple as possible for our clients. One of the many ways our
            online SEO company accomplishes this is by providing each client with a single point of
            contact to manage your project. You get to know your Thrive SEO professional well and they
            will get to know your business and unique needs.
          </p>
        </div>

        <div className="seo-company-box teal-box" data-aos="fade-up">
          <h3><FaSearch /> Relationships & Results</h3>
          <p>
            We live by our two primary core values: Relationships and Results. We’re here for every client,
            that’s our pillar. We have SEO experts who specialize in helping businesses of all sizes —
            from small businesses to large, national franchises — achieve exponential growth. Our SEO agency
            believes in owning the voice of our clients and work hard every day to prove it.
          </p>
        </div>

        <div className="seo-company-box green-box" data-aos="fade-up">
          <h3><FaChartLine /> We’re Always Getting Better</h3>
          <p>
            SEO is never stagnant and neither are we. SEO is always changing because of multiple Google
            algorithm updates each year that impact ranking factors and we are always on top of the latest
            news and trends. Our search engine optimization agency is constantly learning new techniques and
            staying up-to-date to remain ahead of the curve. Rest assured, our SEO company is proactive and
            not reactive.
          </p>
        </div>

        <div className="seo-company-box orange-box" data-aos="fade-up">
          <h3><FaFileAlt /> We Play Fair</h3>
          <p>
            We value honesty and integrity in everything we do. We always play fair, implementing white hat
            SEO optimization services to drive results without spamming or gaming the system that can lead
            to possible Google penalties. Simply put: We don’t have to cheat to win in SEO. As a Google
            Premier Partner, we play by the rules and never jeopardize your business in any way. We never
            compromise our integrity.
          </p>
        </div>

        <div className="seo-company-box yellow-box" data-aos="fade-up">
          <h3><FaExternalLinkAlt /> Transparent Reporting</h3>
          <p>
            While our competitors use smoke and mirrors, we maintain full transparency so you can see
            first-hand how our efforts are increasing your online revenue. Our custom, in-depth reporting
            includes Google Analytics reports to give you a full overview of your site’s SEO performance,
            regularly updated keyword rankings and a monthly breakdown of the SEO tasks we’ve performed.
            We can also provide monthly video summaries reviewing the SEO improvements and strategy.
          </p>
        </div>
      </section>
      <section className="seo-methodology">
  <div className="methodology-header">
    <button className="methodology-button" onClick={() => openModal("Let's Talk")}>LET’S TALK</button>
    <h2>SEO Methodology</h2>
    <p>Your First Step Towards Digital Success</p>
  </div>

  <div className="methodology-intro">
    <p>The search landscape is constantly evolving. To help you stay ahead and agile, you need to choose the right SEO services tailored to your business’ needs, demands and target audience. Working with an SEO solutions expert is a smart move to achieve a robust online presence.</p>
    <p>Thrive Internet Marketing Agency is a trusted SEO company that can help you gain a better ROI. We use a customized six-phase process to develop personalized SEO strategies that deliver results. Thrive’s Agile SEO methodology provides the framework.</p>
  </div>

  <div className="methodology-steps">
    {[
      { step: 1, title: "Discover", color: "#1C4B82", text: "As your trusted search engine optimization company, we take the time to understand your business needs, demands and expectations. During the discovery phase, our SEO consultants can help you identify short- and long-term goals, conduct competitor benchmarking, determine conversion paths and provide key performance indicators (KPIs). This process sets the foundation for your SEO campaign." },
      { step: 2, title: "Analyze", color: "#3B8C4E", text: "The next step is analytics, which covers competitive benchmarking, in-depth site audit, site analytics review and link risk assessment. In this stage, our SEO experts collect and analyze your business data to find strengths and weaknesses that impact your digital presence. We look at your historical traffic patterns, technical issues, on-site and off-site SEO strategies, and measure your performance against your competitors." },
      { step: 3, title: "Strategize", color: "#A3B32C", text: "Once we’ve identified your marketing gaps and opportunities, our SEO experts create a 60-day strategic online marketing plan (SOMP). This includes your campaign goals, expected outcomes for each marketing channel, and estimated completion time. Our SEO team also identifies your conversion path and sets up your analytics tracking systems." },
      { step: 4, title: "Execute", color: "#C55C2F", text: "During this phase, we execute the SOMP. We optimize your web pages and blog posts with high-performing keywords, improve your site structure, manage your listings and create social media pages. Our SEO company also leverages A/B testing to improve your conversion rate." },
      { step: 5, title: "Measure", color: "#F1B241", text: "We monitor your SEO performance using analytics and tracking tools. This includes measuring traffic, rankings, and other campaign metrics. With this data, we provide regular reporting to ensure transparency in your SEO campaign performance." },
      { step: 6, title: "Report", color: "#3D90A4", text: "We schedule monthly consultations and share reports so you can track your SEO progress. You will always have access to your campaign performance anytime through Thrive’s custom dashboard. Our SEO experts provide detailed insights and address questions or concerns during reporting." },
      { step: 7, title: "Adjust", color: "#215275", text: "As part of our ongoing SEO efforts, we continually adjust our optimization strategies based on the latest algorithm updates and performance trends. Thrive’s SEO consultants recommend actionable items to improve your campaign and increase ROI." },
    ].map(({ step, title, color, text }) => (
      <div className="methodology-step" key={step}>
        <div className="methodology-icon" style={{ backgroundColor: color }}>
          <span>STEP {step}</span>
          <h4>{step}</h4>
        </div>
        <div className="methodology-content">
          <h5>{title}</h5>
          <p>{text}</p>
        </div>
      </div>
    ))}
  </div>
</section>
    <section className="faq-section">
      <h2 className="faq-title">Digital Marketing Services FAQs</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h4>{faq.question}</h4>
              <span>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    {modalOpen && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={closeModal}>✖</button>
      <h2>{modalTitle}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Your Phone" required value={formData.phone} onChange={handleChange} />
        <input type="text" value="SEO Services" disabled />

{modalTitle !== "Increase Your Leads" && modalTitle !== "Get Start" && (
  <>
    <select name="time" value={formData.time} onChange={handleChange} required>
      <option value="">Select Time</option>
      {timeSlots.map((slot, index) => (
        <option key={index} value={slot}>{slot}</option>
      ))}
    </select>
    <select name="date" value={formData.date} onChange={handleChange} required>
      <option value="">Select Date</option>
      {getNextDates().map((date, index) => (
        <option key={index} value={date}>{date}</option>
      ))}
    </select>
  </>
)}
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
)}
<Footer />
    </>
  );
};

export default SEOService;