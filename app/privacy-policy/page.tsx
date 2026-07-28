import React from "react";
import { BUSINESS_DETAILS } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy | Greenspace Realty",
  description: "Privacy policy and data collection terms for Greenspace Realty's website and lead forms.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-white py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-500">Last Updated: November 2023</p>
        </div>

        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          
          <div className="bg-brand-alert/10 border-l-4 border-brand-alert p-4 mb-8 text-sm text-gray-900 rounded-r-lg">
            <strong>Disclaimer:</strong> This document serves as a general privacy framework for {BUSINESS_DETAILS.name}. It does not constitute formal legal advice. We advise having your legal counsel review these terms before finalizing your website launch.
          </div>

          <p>
            At {BUSINESS_DETAILS.name} ("we," "us," or "our"), we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (https://greenspacerealty.in) and use our online tools, chat widgets, and lead forms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our real estate services (buying, selling, land dealing, or builder partnerships). The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use.</p>
          <p>The personal information we collect may include the following:</p>
          <ul>
            <li><strong>Contact Data:</strong> Full name, mobile number, and email address.</li>
            <li><strong>Requirement Data:</strong> Property preferences, budget ranges, timelines, and inquiry types (e.g., whether you are a buyer, seller, or developer).</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. How We Use Your Information</h2>
          <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
          <ul>
            <li><strong>To facilitate real estate inquiries:</strong> We use your information to contact you regarding the properties, mandates, or services you inquired about.</li>
            <li><strong>Communication via Email and WhatsApp:</strong> By submitting your details on our forms or chat widget, you explicitly consent to receiving follow-up communications, property alerts, and service updates via Phone Call, SMS, WhatsApp, and Email.</li>
            <li><strong>To deliver services:</strong> For developers looking for sole-selling mandates, we use the provided data to schedule site visits and feasibility analyses.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Data Sharing and Third Parties</h2>
          <p><strong>We do not sell, rent, or trade your personal information to third parties.</strong></p>
          <p>We may share your data only in the following specific situations:</p>
          <ul>
            <li><strong>With Developers/Builders:</strong> If you inquire about a specific new-launch or ongoing project where we act as the Sole Selling Partner, your basic contact details may be securely shared with the respective developer solely for the purpose of site visits, booking registration, and RERA compliance.</li>
            <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Cookies and Local Storage</h2>
          <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specifically:</p>
          <ul>
            <li><strong>Popups & Chat Widgets:</strong> We use local browser storage (<code>localStorage</code>) to remember if you have already seen or dismissed our popup forms and chat widgets, ensuring you are not repeatedly interrupted during your browsing experience.</li>
            <li><strong>Analytics:</strong> We may use basic, anonymized analytics to understand how visitors interact with our website to improve our services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Financial Calculators and Tools</h2>
          <p>The calculators provided on our website (EMI Calculator, Home Affordability Calculator, and Down Payment Calculator) are free, client-side tools designed for indicative estimation purposes only.</p>
          <ul>
            <li><strong>No Data Storage:</strong> The numbers you input into these calculators are processed directly in your browser. We do not transmit, save, or store your financial inputs on our servers.</li>
            <li><strong>Not Financial Advice:</strong> The results generated by these tools do not constitute financial advice, loan approvals, or guarantees of credit. Actual loan terms, EMIs, and affordability metrics are subject to final approval by banks/NBFCs based on your CIBIL score, exact interest rates, and processing fees.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. RERA Disclaimer</h2>
          <p>{BUSINESS_DETAILS.name} acts as a Real Estate Consultant and Marketing Partner. The projects listed on our website are subject to their respective Maharashtra Real Estate Regulatory Authority (MahaRERA) registrations.</p>
          <p>While we strive for absolute accuracy in our marketing and verification processes, the final terms of sale, project amenities, and delivery timelines are the sole responsibility of the respective developers as per their RERA filings. We strongly advise all buyers to independently verify project details on the official MahaRERA website prior to making any financial commitments.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Contact Us</h2>
          <p>If you have questions or comments about this policy, or if you wish to request the deletion of your personal data from our systems, you may contact us at:</p>
          <ul className="list-none pl-0">
            <li><strong>{BUSINESS_DETAILS.name}</strong></li>
            <li>Email: {BUSINESS_DETAILS.email}</li>
            <li>Phone: {BUSINESS_DETAILS.phone}</li>
            <li>Address: {BUSINESS_DETAILS.address}</li>
          </ul>

        </div>
      </div>
    </div>
  );
}