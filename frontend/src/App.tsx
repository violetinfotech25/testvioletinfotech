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
import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';


const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <ChatBotComponent />
      {/* WhatsApp floating chat button */}
      <FloatingWhatsApp
        phoneNumber="919843099624"                     // Replace with your WhatsApp number in international format
        accountName="Support Team"                     // Your business or support name
        avatar={logo}                         // Optional: path to avatar image in public folder
        initialMessageByServer="Hi, how can I assist you?" // Initial greeting text
        statusMessage="Available"                      // Status below name
        // tooltipText="Need help? Chat with us!"         // Tooltip on hover
        allowEsc={true}                                // Allows closing the chat with ESC
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