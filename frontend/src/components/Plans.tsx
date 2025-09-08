import { useState, useEffect } from 'react';
import '../assets/css/plans.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footerend from '../components/Footer';

interface Tier {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

interface PlanCategory {
  category: string;
  tiers: Tier[];
  commonFeatures?: string[];
}
const plans: PlanCategory[] = [
  {
    category: 'Web Development',
    commonFeatures: ['Responsive Design', 'Basic SEO'],
    tiers: [
      {
        title: 'Basic',
        price: '₹9,999',
        features: ['1 Page Website', 'Static Website', 'Responsive Design', 'Basic SEO', 'Contact Form'],
      },
      {
        title: 'Standard',
        price: '₹24,999',
        features: ['5 Pages Website', 'Dynamic Website', 'Responsive Design', 'Basic SEO', 'SEO Setup', 'Admin Panel', 'Hosting & Domain (1 Year)'],
        isPopular: true,
      },
      {
        title: 'Premium',
        price: '₹49,999',
        features: ['Custom Design', 'Dynamic Website', 'Responsive Design', 'Basic SEO', 'Advanced SEO', 'CMS Integration', 'Speed Optimization', 'Ongoing Support'],
      },
    ],
  },
  {
    category: 'Digital Marketing',
    commonFeatures: ['Monthly Report'],
    tiers: [
      {
        title: 'Basic',
        price: '₹4,999/month',
        features: ['Social Media Setup', '2 Posts/Week'],
      },
      {
        title: 'Standard',
        price: '₹9,999/month',
        features: ['3 Platforms (FB, IG, LinkedIn)', '5 Posts/Week', 'Ad Campaign Setup', 'Monthly Report'],
        isPopular: true,
      },
      {
        title: 'Premium',
        price: '₹19,999/month',
        features: ['5 Platforms', 'Daily Posting', 'Ad Optimization', 'Lead Generation Campaigns', 'Monthly Report'],
      },
    ],
  },
  {
    category: 'SEO',
    commonFeatures: ['On-Page SEO'],
    tiers: [
      {
        title: 'Basic',
        price: '₹3,999/month',
        features: ['5 Keywords', 'On-Page SEO'],
      },
      {
        title: 'Standard',
        price: '₹7,999/month',
        features: ['15 Keywords', 'On-Page SEO', 'Off-Page SEO', 'Monthly Keyword Tracking'],
      },
      {
        title: 'Premium',
        price: '₹14,999/month',
        features: ['30+ Keywords', 'On-Page SEO', 'Backlink Building', 'Technical SEO', 'Competitor Analysis'],
        isPopular: true,
      },
    ],
  },
  {
    category: 'Combo Packages',
    tiers: [
      {
        title: 'Full Package',
        price: '₹74,999',
        features: ['Web Development (Premium)', 'Digital Marketing (Premium)', 'SEO (Premium)', 'Complete Branding'],
      },
      {
        title: 'Marketing + Web Dev',
        price: '₹59,999',
        features: ['Web Development (Standard)', 'Digital Marketing (Standard)', 'Free SEO Setup'],
        isPopular: true,
      },
      {
        title: 'Marketing + SEO',
        price: '₹39,999',
        features: ['Digital Marketing (Standard)', 'SEO (Standard)', 'Free SEO Setup'],
      },
      {
        title: 'Web Dev + SEO',
        price: '₹29,999',
        features: ['Web Development (Standard)', 'SEO (Standard)', 'Free SEO Setup'],
      },
    ],
  },
];

const Plans: React.FC = () => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ category: string; title: string } | null>(null);
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

  const headerOffset = 100;

  useEffect(() => {
    AOS.init({ duration: 800 });
    const onScroll = () => {
      const fromTop = window.scrollY + headerOffset + 1;
      for (let category of plans) {
        const el = document.getElementById(category.category.replace(/\s+/g, '-'));
        if (el && el.offsetTop <= fromTop && el.offsetTop + el.offsetHeight > fromTop) {
          setActiveCategory(category.category);
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const scrollToCategory = (id: string) => {
    const section = document.getElementById(id);
    const yOffset = -headerOffset;
    const y = section ? section.getBoundingClientRect().top + window.scrollY + yOffset : 0;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
  first_name: formData.get('firstName'),
  last_name: formData.get('lastName'),
  phone: formData.get('phone'),
  email: formData.get('email'),
  selected_category: selectedPlan?.category,
  selected_plan: selectedPlan?.title,
};

    try {
      const response = await fetch(`${API_URL}/plancontact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setShowModal(false);
      } else {
        alert('Submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting.');
    }
  };

  return (
    <>
      <div className="plans-container">
        <h1 className="plans-title">Our Service Plans</h1>

        <div className="category-buttons sticky">
          {plans.map((category, i) => (
            <button
              key={i}
              className={`category-pill ${activeCategory === category.category ? 'active' : ''}`}
              onClick={() => scrollToCategory(category.category.replace(/\s+/g, '-'))}
            >
              {category.category}
            </button>
          ))}
        </div>

        {plans.map((category, catIndex) => (
          <div
            key={catIndex}
            className="plan-category"
            id={category.category.replace(/\s+/g, '-')}
          >
            <h2 className="category-title">{category.category}</h2>
            <div className="plan-tier-wrapper">
              {category.tiers.map((tier, i) => {
                const key = `${category.category}-${tier.title}`;
                const isExpanded = expanded[key];
                const visible = tier.features.slice(0, 4);
                const hidden = tier.features.slice(4);

                return (
                  <div
                    key={i}
                    className={`plan-card ${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                    data-aos="zoom-in"
                  >
                    {tier.isPopular && <div className="badge">Most Popular</div>}
                    <h3>{tier.title}</h3>
                    <p className="plan-price">{tier.price}</p>
                    <ul>
                      {visible.map((feat, index) => (
                        <li
                          key={index}
                          className={category.commonFeatures?.includes(feat) ? 'common-feature' : ''}
                          title={category.commonFeatures?.includes(feat) ? 'Also in other tiers' : ''}
                        >
                          {feat}
                        </li>
                      ))}
                      {isExpanded &&
                        hidden.map((feat, index) => (
                          <li
                            key={`extra-${index}`}
                            className={category.commonFeatures?.includes(feat) ? 'common-feature' : ''}
                            title={category.commonFeatures?.includes(feat) ? 'Also in other tiers' : ''}
                          >
                            {feat}
                          </li>
                        ))}
                    </ul>
                    {hidden.length > 0 && (
                      <button className="feature-toggle-btn" onClick={() => toggleExpand(key)}>
                        {isExpanded ? 'View Less' : `View More (${hidden.length})`}
                      </button>
                    )}
                    <div className="button-wrapper">
                      <button
                        className="plan-button"
                        onClick={() => {
                          setSelectedPlan({ category: category.category, title: tier.title });
                          setShowModal(true);
                        }}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedPlan && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              aria-label="Close"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2>Get Started - {selectedPlan.category} / {selectedPlan.title}</h2>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="firstName" required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="lastName" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" required />
                </div>
              </div>

              <label>Selected Category</label>
              <input type="text" name="selectedCategory" value={selectedPlan.category} readOnly required />

              <label>Selected Plan</label>
              <input type="text" name="selectedPlan" value={selectedPlan.title} readOnly required />

              <div className="form-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footerend />
    </>
  );
};

export default Plans;