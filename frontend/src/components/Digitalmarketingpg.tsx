import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footerend from '../components/Footer';
import '../assets/css/digitalmarketingmain.css';
import image1 from '../assets/image/digital marketing/pic-1.png';
import image2 from '../assets/image/digital marketing/pic-2.png';
import image3 from '../assets/image/digital marketing/pic-3.png';
import image4 from '../assets/image/digital marketing/pic-4.png';

const Digitalmarketingpg = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
  
  const openModal = (title: string) => {
    setModalTitle(title);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // const toggleArticle = (index: number) => {
  //   const updated = [...expandedArticles];
  //   updated[index] = !updated[index];
  //   setExpandedArticles(updated);
  // };

  const handleFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    fromModal: boolean
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch(`${API_URL}/digitalmarketingcontact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        alert(`Thank you, ${name}! We'll get back to you soon.`);
        form.reset();
        if (fromModal) closeModal();
      } else {
        const errorData = await response.json();
        console.error("Form submission error:", errorData);
        alert("There was a problem submitting the form.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network error. Please try again later.");
    }
  };

  return (
        <>
         <div className="dm-bg">
        <div className="dm-heading">
          <h1><b>Digital Marketing</b></h1><br />
          <p>We Serve the Greater Berks County, Lehigh Valley, <br />
            Philadelphia, Delaware, New Jersey Region & Beyond
            WITH OFFICES IN READING, ALLENTOWN & MALVERN, PA</p>
        </div>
        <div className="dm-flex"> 
          <div className="dm-text">
            <h1>Digital Marketing</h1>
            <p>At Violet Infotech, we believe Digital Marketing is more than just ads and hashtags—it’s a strategic approach to connect, engage, and convert your ideal audience using the power of digital media. Whether you're looking to increase traffic, generate leads, or boost brand awareness, we craft tailored strategies that deliver measurable results and real ROI.</p>
          </div>
          <div className="dm-video">
            <iframe
              width="100%"
              height="515"
              src="https://www.youtube.com/embed/FC-6ePHxrwY"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="thirdsec">
        Better Marketing Strategy, Better Results!
      </div>

      <div className='dm-bg2'>
        <h2>
          If You Want Results Then You Need a <br /> Comprehensive Online Strategy.
        </h2>
        <p>Contact us today for a free consultation!</p>
        <button onClick={() => openModal("Get a Free Consultation")}>GET A FREE CONSULTATION</button>
      </div>

          {/* Sec */}

          <div className="thirdsec">
                  Key Elements of a Powerful Digital Marketing Strategy
            </div>
            <section id='ims' className='section-ims'>
  <div className="ims-container">
    {/* Left Text */}
    <div className="ims-text">
      <h2>Website Design or Redesign</h2>
      <p>
        Your website should be the central hub that connects, unifies and amplifies all your online marketing and advertising activities. Most of your online campaigns will link to landing pages on your website.
      </p>
      <p>
        Your website should be the central hub that connects, unifies and amplifies all your online marketing and advertising activities. Most of your online campaigns will link to landing pages on your website.
      </p>
      <p>
        Your website should be the central hub that connects, unifies and amplifies all your online marketing and advertising activities. Most of your online campaigns will link to landing pages on your website.
      </p>
      <Link to="/web-design"><button className="SEO-btn1">WEB DESIGN - LEARN MORE</button></Link>
    </div>

    {/* Right Image */}
    <div className="ims-image">
      <img
        src={image1}
        alt="Digital Strategy"
      />
    </div>
  </div>
</section>

         <section id='overview' className='SEO-overview'>
  <div className="SEO-inner">
    <div>
      <h2>Search Engine Optimization (SEO)</h2>
      <p>Get found where it matters—on the first page of Google. Our SEO strategies are designed to improve your search rankings, increase organic traffic, and ensure long-term visibility. We focus on both on-page and off-page SEO, using white-hat techniques and keyword research backed by real-time data.
</p><p>Keyword Research & Strategy</p>
<p>Technical SEO (Site Speed, Mobile Optimization, Schema)</p>
<p>Local SEO (Google My Business, Local Listings)</p>
<p>Link Building & Authority Growth</p>
<p>SEO Audits & Competitor Analysis</p>
      <Link to="/digital-marketing/SEO-Service"><button className="SEO-btn1">SEO - LEARN MORE</button></Link>
    </div>
    <div>
      <img src={image2} alt="" />
      <p><i>“People regularly find my business online based on the search engine results that our new PMI website has delivered." ~ Diane Renninger, Principal, Renninger & Associates</i></p>
    </div>
  </div>
</section>

         <section id='sea' className='sea-overview'>
            <div className="ims-container">
              {/* Left Text */}
              <div className="ims-text">
                <h2>Search Engine Advertising</h2>
                <p>
                  For most businesses, highly targeted search engine ads that link to persuasive website landing pages can rapidly build website traffic that converts into new leads and sales. 
                </p>
                <p>
                  When combined with rigorous attention to the analytics associated with your search engine advertising, we can determine which ads are working best in terms of converting visitors into leads and buyers, and then continuously hone your ads over time, resulting in an ever-increasing stream of new leads, new sales, and improved ROI for your marketing dollar.
                </p>
                <p>
                  Your website should be the central hub that connects, unifies and amplifies all your online marketing and advertising activities. Most of your online campaigns will link to landing pages on your website. 
                </p>
                
                
                <button onClick={() => openModal("Contact Us")} className="SEO-btn1">CONTACT US </button>
              </div>

              {/* Right Image */}
              <div className="ims-image">
                <img
                  src={image3} // ✅ Place image in public/images/
                  alt="Digital Strategy"
                />
                
              </div>
            </div>
         </section>

         <section id='seasec' className='seasec'>
  <div className="seasec-container">
    {/* Left Text */}
    <div className="seasec-text">
      <h2 style={{ textShadow: 'none' }}>Social Media Marketing & Advertising</h2>
      <p>
        Turn followers into customers with scroll-stopping social content.
We build your brand’s voice on social platforms like Instagram, Facebook, LinkedIn, and YouTube by creating consistent, engaging, and visually stunning content that speaks directly to your audience.</p>
<p>Social Media Strategy & Planning</p>
<p>Content Calendar Creation</p>
<p>Creatives (Reels, Carousels, Infographics)</p>
<p>Audience Targeting & Engagement</p>
<p>Influencer Collaborations</p>
<p> Social Media Ads (Meta Ads, Boosted Posts)</p>
      <button className="SEO-btn1" onClick={() => openModal("Contact Us")}>CONTACT AS</button>
    </div>

    {/* Right Image */}
    <div className="ims-image">
      <video src="https://videos.pexels.com/video-files/18069232/18069232-sd_640_360_24fps.mp4" autoPlay loop muted></video>
    </div>
  </div>
</section>

         <section id='contentmarketing' className='content1'>
  <div className="contentmarketing-container">
    {/* Left Text */}
    <div className="contentmarketing-text">
      <h2 style={{ textShadow: 'none' }}>Content Marketing</h2>
      <p>
        For most businesses, highly targeted search engine ads that link to persuasive website landing pages can rapidly build website traffic that converts into new leads and sales.
      </p>
      <p>
        Effective content, whether in the form of blog posts, downloadable reports and white papers, videos or other digital forms, can act as a powerful differentiator to build trust and respect for your expertise, thereby opening the door to new inquiries and sales. This is especially true for high-priced or potentially high-risk products and services.
      </p>
      <br /><br />
      <p>
        When combined with rigorous attention to the analytics associated with your search engine advertising, we can determine which ads are working best in terms of converting visitors into leads and buyers, and then continuously hone your ads over time, resulting in an ever-increasing stream of new leads, new sales, and improved ROI for your marketing dollar.
      </p>
      <br />
      <p>
        Your website should be the central hub that connects, unifies and amplifies all your online marketing and advertising activities. Most of your online campaigns will link to landing pages on your website.
      </p>

      <Link to="/digital-marketing/Content-Marketing-Service"><button className="SEO-btn1">Learn More</button></Link>
    </div>

    {/* Right Image */}
    <div className="contentmarketing-image">
      <img
        src="https://www.pngall.com/wp-content/uploads/5/Social-Media-Digital-Marketing-PNG-HD-Image.png"
        alt="Digital Strategy"
      />
    </div>
  </div>
</section>
        <section id='emailmarketing' className='email-marketing'>
  <div className="email-marketing-inner">
    <div className="email-section-container">
      {/* Left Text */}
      <div className="email-section-text">
        <h2 style={{ textShadow: 'none' }}>Email Marketing</h2>
        <p>
          <i>When properly utilized, email marketing can be a very low-cost way to promote your business. </i>
        </p>
        <p>
         Stay top of mind and in their inbox.
We design automated, personalized email journeys that turn cold leads into loyal customers.</p>
<p> Newsletter Campaigns</p>
<p>Drip Campaigns & Sequences</p>
<p> Lead Magnet Funnels</p>
<p>Subscriber List Management</p>
<p>Email Design & Copywriting</p>
<p>Integration with Mailchimp, Sendinblue, etc.</p>

        <button className="SEO-btn1" onClick={() => openModal("Contact Us")}>EMAIL MARKETING - CONTACT AS</button>
      </div>

      {/* Right Image */}
      <div className="email-section-image">
        <img src="https://jaro-website.s3.ap-south-1.amazonaws.com/2025/04/Email-Marketing.jpg" alt="Email Marketing" />
      </div>
    </div>
  </div>
</section>
         <section id='reputationmanagement' className='reputation-management'>
  <div className="reputation-management-inner">
    <div className="reputation-section-container">
      {/* Left Text */}
      <div className="reputation-section-text">
        <h2 style={{ textShadow: 'none' }}>Reputation Management</h2>
        <p>
          For most businesses, highly targeted search engine ads that link to persuasive website landing pages can rapidly build website traffic that converts into new leads and sales.
        </p>
        <p>
          Learn how our reputation management system not only helps you review more reviews, but also helps you deal with the occasional poor review. In addition, our software can automatically display customer reviews on your website. Click below to learn more
        </p>

        <button className="SEO-btn1" onClick={() => openModal("Contact Us")}>REPUTATION MANAGEMENT - CONTACT AS </button>
      </div>

      {/* Right Image */}
      <div className="reputation-section-image">
        <img
          src={image4}
          alt="Reputation Management"
        />
      </div>
    </div>
  </div>
</section>
          <div className="thirdsec">
                  How We Work
          </div>
          <section className="consult-section">
            <div className="grid-column">
              <div className="grid-item">
                <img src="https://cdn-icons-png.flaticon.com/128/2693/2693507.png" alt="Consultation" />
                <h3>Schedule a Free Consultation</h3>
              </div>
              <div className="grid-item">
                <img src="https://cdn-icons-png.flaticon.com/128/3234/3234841.png" alt="Goals" />
                <h3>Tell Us Your Goals</h3>
              </div>
              <div className="grid-item">
                <img src="https://cdn-icons-png.flaticon.com/128/14458/14458843.png" alt="Proposal" />
                <h3>Get a Free Proposal</h3>
              </div>
            </div>

            <div className="consult-content">
              <h5>Our process is simple and hassle-free.</h5>
              <p>Simply contact us to schedule your free, no-obligation consultation.</p>
              <p>We'll meet with you online or at one of our three offices. You'll tell us your goals, we'll ask lots of questions, and then we'll create a free, no-obligation proposal to meet your goals.</p>
              <p>It's that easy. Ready to get started?</p>
              <button className="action-btn" onClick={() => openModal("Contact Us")}>TAKE ACTION NOW</button>
            </div>
          </section>
          <div className="thirdsec">
                  Web Design & Internet Marketing Packages
          </div>
          <section className='websitebg'>
                <div className='web-banner'>
                   <h5>We Suggest 3 Plans to Meet Your Needs & Budget</h5>
                   <p>We recommend that you consider one of the three website design and marketing plans below. They are designed to help you achieve a meaningful set of objectives based on your budget and goals.  Plans progress in impact from left to right. Pricing is based on the scope of your website and the depth of your online marketing objectives. </p>
                  <p>All plans can be customized to meet your unique needs. Contact us to learn more.</p>
                  <p>If your budget is limited, you can begin with the Web Pro package, and then implement the Online Marketer  plan at a later time, and then eventually implement the Social Media Master plan as phase 3 of your online marketing strategy.</p>
                </div>
                <div className='three-box'>
                   <div>
                      <img src="https://cdn-icons-png.flaticon.com/128/3474/3474360.png" alt="" />
                      <h4 style={{fontSize: '28px'}}>Web Pro</h4>
                      <p>This package is perfect for a business whose primary goal is to upgrade their website in order to build credibility, and to impress their viewers while laying a solid SEO foundation to help them get found via search engines.</p>
                      <h4><u>FEATURES</u></h4>
                      <h4>Website Foundation:</h4>
                      <ul style={{ listStyle: 'none' }}>
                        <li> Keyword research</li>
                        <li>Competitor website research</li>
                        <li>Branding & messaging</li>
                        <li>Website strategy</li>
                      </ul>
                      <br />
                      <h4>Website Build:</h4>
                      <ul  style={{ listStyle: 'none' }}>
                        <li>Thorough on-page SEO</li>
                        <li>Exquisite graphics & images</li>
                        <li>Fully in line with your branding</li>
                        <li>Persuasive messaging</li>
                        <li> Image & background layering</li>
                        <li>Motion effects to engage viewers</li>
                      </ul>
                   </div>
                   <div style={{
                      width: "80%",
                      transform: "scale(1.06)",
                      boxShadow: "rgba(0, 0, 0, 0.7) 0px 3px 8px",
                      transition: "transform 0.3s ease"
                    }}>
                      <img src="https://cdn-icons-png.flaticon.com/128/3234/3234841.png" alt="" />
                      <h4 style={{fontSize: '28px'}}>Online Marketer</h4>
                      <p>This package is perfect for a business whose primary goal is to upgrade their website in order to build credibility, and to impress their viewers while laying a solid SEO foundation to help them get found via search engines.</p>
                      <h4><u>FEATURES</u></h4>
                      <h4>Website Foundation:</h4>
                      <ul style={{ listStyle: 'none' }}>
                        <li> Keyword research</li>
                        <li>Competitor website research</li>
                        <li>Branding & messaging</li>
                        <li>Website strategy</li>
                      </ul>
                      <br />
                      <h4>Website Build:</h4>
                      <ul  style={{ listStyle: 'none' }}>
                        <li>Thorough on-page SEO</li>
                        <li>Exquisite graphics & images</li>
                        <li>Fully in line with your branding</li>
                        <li>Persuasive messaging</li>
                        <li> Image & background layering</li>
                        <li>Motion effects to engage viewers</li>
                      </ul>
                   </div>
                   <div>
                      <img src="https://cdn-icons-png.flaticon.com/128/11629/11629132.png" alt="" />
                      <h4 style={{fontSize: '28px'}}>Social Media Master</h4>
                      <p>This package is perfect for a business whose primary goal is to upgrade their website in order to build credibility, and to impress their viewers while laying a solid SEO foundation to help them get found via search engines.</p>
                      <h4><u>FEATURES</u></h4>
                      <h4>Website Foundation:</h4>
                      <ul style={{ listStyle: 'none' }}>
                        <li> Keyword research</li>
                        <li>Competitor website research</li>
                        <li>Branding & messaging</li>
                        <li>Website strategy</li>
                      </ul>
                      <br />
                      <h4>Website Build:</h4>
                      <ul  style={{ listStyle: 'none' }}>
                        <li>Thorough on-page SEO</li>
                        <li>Exquisite graphics & images</li>
                        <li>Fully in line with your branding</li>
                        <li>Persuasive messaging</li>
                        <li> Image & background layering</li>
                        <li>Motion effects to engage viewers</li>
                      </ul>
                   </div>
                </div>
                <div>
                  <h2>Need a Custom Marketing Plan?</h2>
                  <button onClick={() => openModal("Contact Us")}>CONTACT US </button>
                </div>
          </section>
          <div className="thirdsec">
                Contact Us for a Free Consultation
          </div>
           {/* Consultation Form */}
      <section className="consultation">
        <div className="consultation-container">
          <h1>Request a Free Internet Marketing Consultation</h1>
          <span className="company-name">Violet Infotech</span>
          {/* <h5>GET FOUND. IMPRESS. ENGAGE. CONVERT.</h5> */}
          <p><b>Take Your Business To The Next Level!</b></p>
          <p>Contact us today to learn more about creating a powerful Internet Marketing plan for your business or non-profit organization!</p>

          <form className="consultation-form" onSubmit={(e) => handleFormSubmit(e, false)}>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <input type="text" name="phone" placeholder="Your Number" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Request</button>
</form>
        </div>
      </section>
          {/* <div className="thirdsec">
                  Learn More About Digital Marketing
          </div>

      <section className="six-box">
        {articleData.map((article, index) => (
          <div className="box" key={index}>
            <img src={article.img} alt={`Box ${index + 1}`} />
            <h2>{article.title}</h2>
            <p>
              {expandedArticles[index]
                ? article.content
                : `${article.content.slice(0, 80)}...`}
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleArticle(index);
              }}
            >
              {expandedArticles[index] ? "Read Less ←" : "Read More →"}
            </a>
          </div>
        ))}
      </section> */}

{/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>×</button>
            <h2>{modalTitle}</h2>
            <form className="consultation-form" onSubmit={(e) => handleFormSubmit(e, false)}>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <input type="text" name="phone" placeholder="Your Number" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send</button>
</form>
          </div>
        </div>
      )}


        <Footerend />
        </>
  );
};

export default Digitalmarketingpg;
