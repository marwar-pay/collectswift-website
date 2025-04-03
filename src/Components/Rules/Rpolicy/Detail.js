// pages/refund-policy.js

import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-semibold mb-4">Refund Policy</h3>
        <p className="mb-4">
          At Marwar Pay Info Solutions, we prioritize customer satisfaction and aim to provide seamless financial technology services. However, we recognize that circumstances may arise where a refund is necessary. Here`s our refund policy:
        </p>

        <h4 className="text-lg font-semibold mt-6">1. Eligibility for Refund:</h4>
        <ul className="list-disc list-inside mb-4">
          <li>Overpayment: If you have inadvertently made a payment in excess of the amount due, you may be eligible for a refund of the overpaid amount.</li>
          <li>Unauthorized Transactions: If you suspect unauthorized transactions, we will investigate and refund if confirmed.</li>
          <li>Service Disruption: In the rare event of a service disruption that hinders your ability to utilize our services, you may be eligible for a refund for the affected period.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-6">2. Refund Process:</h4>
        <ul className="list-disc list-inside mb-4">
          <li>To request a refund, contact our customer support team at <strong>9509494310</strong>.</li>
          <li>Provide details like account information, transaction details, and any other pertinent information to expedite the refund process.</li>
          <li>Our team will review your request and, if approved, initiate the refund process within 7 working days.</li>
          <li>Refunds will be issued using the same payment method used for the original transaction unless otherwise specified.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-6">3. Refund Discretion:</h4>
        <p className="mb-4">
          Marwar Pay Info Solutions reserves the right to exercise discretion in granting refunds, especially in cases where refunds are not explicitly covered by this policy. We may refuse refunds if we suspect fraudulent activity, misuse of our services, or violation of our terms of service.
        </p>

        <h4 className="text-lg font-semibold mt-6">4. Policy Updates:</h4>
        <p className="mb-4">
          Marwar Pay Info Solutions reserves the right to update or modify this refund policy at any time without prior notice. Any changes will be effective immediately upon posting on our website.
        </p>

        <p className="mt-4">
          By utilizing our services, you agree to comply with this refund policy. If you have any inquiries or require assistance regarding refunds, please do not hesitate to contact us at the provided number. We are here to assist you.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
