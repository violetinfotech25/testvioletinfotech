import React from 'react';
import Footer from '../components/Footer';

const TermsPolicy: React.FC = () => {
  return (
    <>
    <div className="container px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Terms & Conditions, Privacy Policy, and Copyright Notice
      </h1>
      <p className="text-sm text-gray-500 mb-10 text-center">Last Updated: August 1, 2025</p>
      <p className="mb-6 text-justify">
        Welcome to Violet Infotech. By engaging with our services or visiting our website, you agree to the following
        legal terms and policies.
      </p>

      {/* Terms and Conditions */}
      <section className="mb-12 text-justify">
        <h2 className="text-2xl font-semibold mb-4 text-center">📜 Terms and Conditions</h2>

        <h3 className="text-lg font-semibold mb-2 text-center">1. Acceptance of Terms</h3>
        <p className="mb-4">
          By accessing or using any services provided by Violet Infotech, including web development, digital marketing,
          SEO, branding and related services, you agree to comply with these terms. If you do not
          agree, please refrain from using our services.
        </p>

        <h3 className="text-lg font-semibold mb-2 text-center">2. Scope of Services</h3>
        <p className="mb-4">
          We offer custom services tailored to individual client needs. These may include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Website development & maintenance</li>
          <li>SEO and digital marketing strategies</li>
          <li>Brand identity design (Promation works, business cards, banners, Labels)</li>
          <li>Advertising materials and promotional creatives</li>
        </ul>
        <p className="mb-4">
          The scope will be defined in the project agreement, and any additional services will be billed separately.
        </p>

        <h3 className="text-lg font-semibold mb-2 text-center">3. Client Responsibilities</h3>
        <p className="mb-4">Clients agree to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Provide accurate and complete information required for the project.</li>
          <li>Supply necessary brand assets, content, and timely approvals.</li>
          <li>Respond to communications and feedback requests within agreed timelines.</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2 text-center">4. Payments & Refunds</h3>
        <ul className="list-disc list-inside mb-4">
          <li>All projects require an upfront advance (typically 50% of total).</li>
          <li>The remaining balance is due before final delivery.</li>
          <li>Once a project phase is approved or initiated, no refunds will be issued.</li>
          <li>Delayed payments beyond 7 days may result in service suspension.</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2 text-center">5. Revisions & Modifications</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Each service includes a limited number of revisions, specified in the quote.</li>
          <li>Additional changes will incur extra charges based on time and complexity.</li>
          <li>Major scope changes will be treated as a new project.</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2 text-center">6. Third-Party Tools & Services</h3>
        <p className="mb-4">
          We may integrate third-party APIs, plugins, or services. While we aim to use reliable providers, Violet
          Infotech is not liable for outages, security issues, or service changes caused by those third parties.
        </p>

        <h3 className="text-lg font-semibold mb-2 text-center">7. Termination of Services</h3>
        <p className="mb-4">We reserve the right to terminate any project or relationship in cases of:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Client misconduct or harassment</li>
          <li>Non-payment or breach of agreement</li>
          <li>Unlawful or unethical use of our services</li>
        </ul>
      </section>

      {/* Privacy Policy */}
      <section className="mb-12 text-justify">
        <h2 className="text-2xl font-semibold mb-4 text-center">🔒 Privacy Policy</h2>

        <h3 className="text-lg font-semibold mb-2 text-center">1. Information We Collect</h3>
        <p className="mb-4">When you engage with us, we may collect:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Your name, email address, phone number, and business details</li>
          <li>Information you provide in contact forms, emails, or documents</li>
          <li>Technical data such as browser type, IP address, and pages visited</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2 text-center">2. How We Use Your Information</h3>
        <p className="mb-4">We use your data to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Deliver and improve our services</li>
          <li>Respond to inquiries or support requests</li>
          <li>Send project updates, invoices, and occasional promotions</li>
          <li>Analyze website usage for better performance</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2 text-center">3. Data Sharing & Disclosure</h3>
        <p className="mb-4">
          We do <strong>not</strong> sell, trade, or rent your personal information. We may share it only with:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Trusted third-party vendors (e.g., hosting, analytics)</li>
          <li>Legal authorities if required by law</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2 text-center">4. Data Security</h3>
        <p className="mb-4">
          We implement reasonable technical and organizational measures to protect your information from unauthorized
          access, loss, or misuse.
        </p>

        <h3 className="text-lg font-semibold mb-2 text-center">5. Your Rights</h3>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Access the personal data we hold about you</li>
          <li>Request corrections or deletions</li>
          <li>Opt out of promotional emails</li>
        </ul>
        <p>
          To make such requests, email:{' '}
          <a href="mailto:info@violetinfotech.in" className="text-blue-600 underline">
            info@violetinfotech.in
          </a>
        </p>
      </section>

      {/* Copyright */}
      <section className="mb-12 text-justify">
        <h2 className="text-2xl font-semibold mb-4 text-center">© Copyright Notice</h2>

        <h3 className="text-lg font-semibold mb-2 text-center">1. Ownership</h3>
        <p className="mb-4">
          All original work remains the intellectual property of Violet Infotech unless explicitly transferred in
          writing. Clients receive commercial usage rights for final deliverables only after full payment.
        </p>

        <h3 className="text-lg font-semibold mb-2 text-center">2. Usage Restrictions</h3>
        <p className="mb-4">
          You may not copy, reproduce, republish, or redistribute any part of our work or website content without
          written permission. Unauthorized use of our brand name, logo, or designs is strictly prohibited.
        </p>

        <h3 className="text-lg font-semibold mb-2 text-center">3. Portfolio Rights</h3>
        <p className="mb-4">
          Unless agreed otherwise, Violet Infotech reserves the right to showcase completed work in its online
          portfolio, social media, or promotional materials.
        </p>
      </section>

      {/* Contact */}
      <section className="text-justify">
        <h3 className="text-lg font-semibold mb-2 text-center">📩 Questions?</h3>
        <p className="text-center">
          For legal inquiries or data requests, contact us at:{' '}
          <a href="mailto:info@violetinfotech.in" className="text-blue-600 underline">
            info@violetinfotech.in
          </a>
        </p>
      </section>
    </div>
    <Footer/>
  </>
  );
};

export default TermsPolicy;