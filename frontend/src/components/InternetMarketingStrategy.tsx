import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import '../assets/css/internet_marketing_strategy.css';

const InternetMarketingStrategy: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <section className="ims-strategy-container">
      <h2 className="ims-strategy-title" data-aos="fade-up">
        Internet Marketing Strategy
      </h2>
      <p className="ims-strategy-subtitle" data-aos="fade-up">
        Elevate Your Digital Presence with a Smart, Data-Driven Strategy
      </p>

      <div className="ims-strategy-content" data-aos="fade-up">
        <p>
          At Violet Infotech, we don’t just promote — we plan. A successful <strong>internet marketing strategy</strong> is more than just social posts or paid ads. It's a unified approach that aligns your business goals with the right digital channels, audience behavior, and performance metrics.
        </p>
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
        <button className="ims-strategy-button">Get Free Consultation</button>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default InternetMarketingStrategy;