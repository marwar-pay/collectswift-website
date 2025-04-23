// pages/refund-policy.js

import Head from 'next/head';

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund Policy | CollectSwift</title>
        <meta name="description" content="Read the refund policy for CollectSwift. Learn how refunds are handled in case of overpayments, disruptions, or unauthorized transactions." />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

          <p className="mb-6">
            At CollectSwift, customer satisfaction is our top priority. We strive to provide smooth and reliable financial technology services. However, we understand that certain situations may require a refund. Please review our refund policy below:
          </p>

          <h2 className="text-xl font-semibold mb-2">1. Eligibility for Refund</h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li><strong>Overpayment:</strong> If you have accidentally paid more than the required amount, you may be eligible for a refund of the excess amount.</li>
            <li><strong>Unauthorized Transactions:</strong> If an unauthorized transaction is detected and confirmed after investigation, we will process a refund.</li>
            <li><strong>Service Disruption:</strong> If a service disruption prevents you from using our services as intended, you may be eligible for a refund for the affected period.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">2. Refund Process</h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>To initiate a refund request, please contact our support team at <strong>9509494310</strong>.</li>
            <li>Provide all necessary details including your account information, transaction ID, and reason for the refund.</li>
            <li>Our team will verify and review your request. If approved, the refund will be initiated within 7 working days.</li>
            <li>Refunds will be made using the original payment method unless otherwise communicated.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">3. Refund Discretion</h2>
          <p className="mb-6">
            CollectSwift reserves the right to determine eligibility for refunds on a case-by-case basis. We may deny refunds in cases of suspected fraud, abuse of our services, or breach of our terms of service.
          </p>

          <h2 className="text-xl font-semibold mb-2">4. Policy Updates</h2>
          <p className="mb-6">
            We may update or change our refund policy at any time without prior notice. All changes will be posted on this page and will become effective immediately upon posting.
          </p>

          <p className="mt-4">
            By using our services, you agree to this refund policy. If you have questions or need assistance, don’t hesitate to contact us. We are here to help.
          </p>
        </div>
      </main>
    </>
  );
}
