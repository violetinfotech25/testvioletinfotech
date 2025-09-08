import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/social_media_service.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialMediaMarketingService = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="social-media-page bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('/images/social-media-banner.jpg')" }}>
        <div data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-4">Social Media Marketing</h1>
          <p className="text-lg max-w-2xl mx-auto">Grow your brand presence and reach your audience on platforms like Facebook, Instagram, Twitter, and LinkedIn.</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4 md:px-20" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center mb-10">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-2">Platform Management</h3>
            <p>We handle your content creation, posting schedules, and audience engagement on all major platforms.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Ad Campaigns</h3>
            <p>Run targeted ad campaigns on Facebook, Instagram, and LinkedIn to boost traffic and conversions.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Content Strategy</h3>
            <p>We craft custom content calendars with graphics, videos, and posts tailored to your brand.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Analytics & Reporting</h3>
            <p>Receive detailed reports on your social performance, engagement rate, and ROI.</p>
          </div>
        </div>
      </section>

      {/* Icons Section */}
      <section className="py-12 bg-white" data-aos="zoom-in">
        <h3 className="text-2xl font-semibold text-center mb-8">Platforms We Support</h3>
        <div className="flex justify-center gap-10 text-4xl text-[#43937D]">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#43937D] text-white py-16 px-4 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Let's Build Your Social Presence</h2>
        <p className="mb-6 max-w-xl mx-auto">Get in touch with our team for a free consultation and strategy session to grow your brand online.</p>
        <button className="bg-white text-[#43937D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all">
          Get a Free Strategy Call
        </button>
      </section>
    </div>
  );
};

export default SocialMediaMarketingService;