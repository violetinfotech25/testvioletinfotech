import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Second from "./components/SecondSection";
import Third from "./components/Thirdsec";
import Four from "./components/Foursec";
import Five from "./components/Fivesec";
import Footnew from "./components/Footer";
import TermsPolicy from "./components/TermsPolicy";
import About from "./components/About";
import Digitalmarketingpg from "./components/Digitalmarketingpg";
import InternetMarketingServices from "./components/InternetMarketingServices";
import InternetMarketingStrategy from "./components/InternetMarketingStrategy";
import SeoService from "./components/SEOService";
import ContentMarketingService from "./components/ContectMarketingServices";
import SocialMediaMarketingService from "./components/SocialMediaMarketingServices";
import WebDesignServices from "./components/webdesign";
import BrandingServices from "./components/Branding";
import Contact from "./components/Contact";
import Plans from "./components/Plans";
import Websitegallery from "./components/websitegallery";
import ChatBotComponent from "./components/ChatBotComponent";
import logo from './assets/image/logo/LOGO 3.jpg';

// WhatsApp floating button import
import { FloatingWhatsApp } from 'react-floating-whatsapp';


const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <ChatBotComponent />
      {/* WhatsApp floating chat button */}
      <FloatingWhatsApp
      phoneNumber="+919843099624"        // WhatsApp number in international format
      accountName="Support Team"         // Business/support name
      avatar={logo}                      // Optional avatar image
      chatMessage="Hi, how can I assist you?" // Initial greeting message
      // status="Available"                 // Status below name
      allowEsc                        // Allows closing with ESC
      allowClickAway                  // Closes chat when clicking outside
      notification                    // Shows notification badge
      notificationSound               // Plays sound when chat opens
      />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Second />
            <Third />
            <Four />
            <Five />
            <Footnew />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/digital-marketing/" element={<Digitalmarketingpg />} />
        <Route path="/digital-marketing/internet-marketing-services" element={<InternetMarketingServices />} />
        <Route path="/digital-marketing/internet-marketing-strategy" element={<InternetMarketingStrategy />} />
        <Route path="/digital-marketing/SEO-Service" element={<SeoService />} />
        <Route path="/digital-marketing/Social-media-Service" element={<SocialMediaMarketingService />} />
        <Route path="/digital-marketing/Content-Marketing-Service" element={<ContentMarketingService />} />
        <Route path="/web-design" element={<WebDesignServices />} />
        <Route path="/branding" element={<BrandingServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/terms-and-policy" element={<TermsPolicy />} />
        <Route path="/Websitegallery" element={<Websitegallery />} />
      </Routes>
    </>
  );
};

export default App;