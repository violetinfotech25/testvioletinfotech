import { useState } from 'react';
import '../assets/css/clientshome.css';
import client1 from '../assets/image/clients/magudam-logo-png.png';
import client2 from '../assets/image/clients/zebra-elevation2.png';
import client3 from '../assets/image/clients/gobinathan_logo.png';

interface ServiceItem {
  title: string;
  desc: string;
}

const Fivesec = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});

  const services: ServiceItem[] = [
    {
      title: 'SEO Optimization',
      desc: 'SEO Optimization improves your website’s visibility in search engines like Google. It involves keyword research, content creation, and on-page optimizations.Technical SEO ensures fast loading, mobile-friendliness, and proper indexing. Backlinks and local SEO boost authority and help reach targeted audiences. A solid SEO strategy drives organic traffic, leads, and long-term growth.'
    },
    { title: 'Web Design', desc: 'Web Design is the art of creating visually appealing and user-friendly websites. It combines layout, color, typography, and UX to deliver a seamless experience. Responsive design ensures your site looks great on all devices, from phones to desktops. Good web design builds trust, improves engagement, and drives conversions. A well-designed website reflects your brand and leaves a lasting impression.' },
    { title: 'Content Marketing', desc: 'Content Marketing is the strategy of creating valuable content to attract and engage your audience. It includes blogs, videos, infographics, social posts, and more to build brand awareness. The goal is to educate, entertain, or solve problems—not just sell. Consistent, high-quality content boosts SEO and builds customer trust. Effective content marketing turns visitors into loyal customers over time.' },
    { title: 'Social Media Marketing', desc: 'Social Media Marketing uses platforms like Instagram, Facebook, and LinkedIn to promote your brand. It helps connect with your audience, build relationships, and increase brand awareness. Engaging posts, reels, and stories drive traffic and boost customer interaction. Paid ads target specific demographics to generate leads and sales effectively. A strong social media presence builds credibility and grows your business online.' },
    { title: 'Email Campaigns', desc: 'Email Campaigns are a powerful way to reach your audience directly in their inbox. They help promote products, share updates, and nurture customer relationships. Well-crafted emails with catchy subject lines and clear CTAs drive engagement. Segmentation and personalization boost open rates and conversions. Email marketing offers high ROI and measurable results for any business.' },
    { title: 'Ad Management', desc: 'Ad Management involves planning, creating, and optimizing paid ads across platforms like Google, Facebook, and Instagram.  It helps target the right audience with the right message at the right time. Effective ad management maximizes ROI through budget control and performance tracking. A/B testing, audience segmentation, and retargeting improve campaign success. Well-managed ads drive traffic, generate leads, and boost business growth.' },
    { title: 'Branding', desc: 'Branding is the process of shaping a unique identity for your business. It includes your logo, colors, voice, and overall customer perception. Strong branding builds trust, recognition, and emotional connection with your audience. Consistent branding across all platforms sets you apart from competitors. A powerful brand leaves a lasting impression and drives long-term loyalty.' },
    { title: 'Static Website', desc: 'Static Websites are simple, fast-loading sites built with HTML, CSS, and JavaScript. They’re ideal for portfolios, business profiles, and informational pages. Static sites offer better speed, security, and low hosting costs. They don’t require a database, making them easy to maintain. Perfect for businesses that need a reliable and quick online presence.' },
    { title: 'Dynamic Website', desc: 'Dynamic Websites are interactive sites that display content based on user actions or data.They use databases and server-side scripting (like PHP, Python, or Node.js) to generate content in real-time.Ideal for blogs, e-commerce stores, and user portals with frequent updates.Dynamic sites offer personalized experiences and advanced functionality.They’re perfect for businesses that need flexibility, scalability, and user engagement.' },
    { title: 'Responsive Website', desc: 'Responsive Websites automatically adjust their layout to fit any screen size—mobile, tablet, or desktop. They provide a seamless user experience across all devices and browsers. Responsive design improves SEO, reduces bounce rates, and boosts engagement. It eliminates the need for separate mobile and desktop versions. Perfect for modern businesses aiming for accessibility and user satisfaction.' },
    { title: 'E-commerce Website', desc: 'E-commerce Websites enable businesses to sell products or services online, 24/7. They include features like shopping carts, secure payments, and order tracking. A well-designed e-commerce site enhances user experience and drives sales. Integration with inventory, shipping, and marketing tools streamlines operations. Perfect for brands aiming to expand reach and grow revenue digitally.' }
  ];

  const visibleServices = showAll ? services : services.slice(0, 6);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className='fivesec-container'>
      <h1 className='fivesec-heading'>Explore Our Key Features</h1>

      <div className='fivesec-grid'>
        {visibleServices.map((item, index) => (
          <div key={`${item.title}-${index}`} className='feature-box'>
            <h2>{item.title}</h2>
            <p>
              {expandedCards[index]
                ? item.desc
                : item.desc.length > 60
                  ? item.desc.slice(0, 60) + '...'
                  : item.desc}
            </p>
            <button className='learn-more' onClick={() => toggleCard(index)}>
              {expandedCards[index] ? 'Show Less' : 'Learn More'}
            </button>
          </div>
        ))}
      </div>

      <div className='show-more-wrapper'>
        <button className='show-more-btn' onClick={() => setShowAll(prev => !prev)}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>

      <div className="clients-section">
        <h1 className="clients-heading">Our Clients</h1>
        <div className="clients-logos">
          <img className='client1' src={client1} alt="Client 1" />
          <img className='client2' src={client2} alt="Client 2" />
          <img className='client3' src={client3} alt="Client 3" />
        </div>
      </div>
    </div>
  );
};

export default Fivesec;