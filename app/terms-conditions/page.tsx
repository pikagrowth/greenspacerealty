import React from "react";
import { BUSINESS_DETAILS } from "@/lib/constants";

export const metadata = {
  title: "Terms & Conditions | Greenspace Realty",
  description: "Terms and conditions of use for Greenspace Realty's website and services.",
};

export default function TermsConditionsPage() {
  return (
    <div className="w-full bg-white py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-gray-500">Last Updated: November 2023</p>
        </div>

        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          
          <div className="bg-brand-alert/10 border-l-4 border-brand-alert p-4 mb-8 text-sm text-gray-900 rounded-r-lg">
            <strong>Disclaimer:</strong> This document serves as a general Terms & Conditions framework for {BUSINESS_DETAILS.name}. It does not constitute formal legal advice. We advise having your legal counsel review these terms before finalizing your website launch.
          </div>

          <p>
            Welcome to {BUSINESS_DETAILS.name}. These Terms & Conditions outline the rules and regulations for the use of our website (https://greenspacerealty.in) and the real estate advisory and marketing services we provide.
          </p>
          <p>
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use {BUSINESS_DETAILS.name}'s website if you do not accept all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Nature of Services</h2>
          <p>
            {BUSINESS_DETAILS.name} acts as a Real Estate Marketing and Advisory Agency. We facilitate transactions between buyers, sellers, and developers. For new projects where we act as the Sole Selling Partner, we represent the developer in marketing and sales capacities. 
          </p>
          <p>
            While we conduct preliminary due diligence to the best of our ability, we do not act as legal counsel. Buyers and investors are strictly advised to conduct their own independent legal and financial verification before executing any transaction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Accuracy of Information</h2>
          <p>
            All property information, pricing, availability, and specifications listed on this website are subject to change without prior notice. The information provided is for general marketing and informational purposes only.
          </p>
          <ul>
            <li><strong>Project Approvals:</strong> Ongoing and upcoming projects listed are subject to the approval of local authorities (CIDCO, PMC, NAINA) and MahaRERA.</li>
            <li><strong>Visuals:</strong> Images, renders, and floor plans used on this website may be artistic impressions and not actual photographs. They do not constitute a legal offering.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Use of Financial Tools</h2>
          <p>
            The EMI, Affordability, and Down Payment calculators provided on our website are free self-help tools. The figures generated are indicative estimates based on the parameters you enter. {BUSINESS_DETAILS.name} does not guarantee the accuracy of these figures, nor do they represent a loan offer or financial guarantee from any lending institution.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Intellectual Property</h2>
          <p>
            Unless otherwise stated, {BUSINESS_DETAILS.name} and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from https://greenspacerealty.in for your own personal use, subject to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from this website without explicit permission.</li>
            <li>Sell, rent, or sub-license material from this website.</li>
            <li>Reproduce, duplicate, or copy material from this website for commercial gain.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Limitation of Liability</h2>
          <p>
            In no event shall {BUSINESS_DETAILS.name}, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website. {BUSINESS_DETAILS.name} shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website or reliance on its content.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Indemnification</h2>
          <p>
            You hereby indemnify to the fullest extent {BUSINESS_DETAILS.name} from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Governing Law & Jurisdiction</h2>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of India. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Panvel, Maharashtra.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Contact Details</h2>
          <p>For any queries regarding our Terms & Conditions, please reach out to us at:</p>
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