// pages/terms-and-conditions.js

import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | CollectSwift</title>
        <meta name="description" content="Read the terms and conditions of using CollectSwift’s services." />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

          <p className="mb-6">
            These terms and conditions govern your use of CollectSwift Info. Solutions Pvt. Ltd.’s website, www.collectswift.in, and the services provided through the website, including but not limited to fintech and IT services. By accessing or using the website, you agree to be bound by these terms.
          </p>

          <h2 className="text-xl font-semibold mb-2">1. Services</h2>
          <ul className="list-decimal list-inside mb-6 space-y-2">
            <li>We provide online transaction services, money transfer solutions, software development, and technical support.</li>
            <li>Services may vary based on location and laws. We may change or discontinue services without notice.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">2. User Accounts</h2>
          <ul className="list-decimal list-inside mb-6 space-y-2">
            <li>You may need to register for an account. You agree to keep information accurate and updated.</li>
            <li>You are responsible for your account credentials and all activities under your account.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">3. Use of the Website</h2>
          <ul className="list-decimal list-inside mb-6 space-y-2">
            <li>Use the site only for lawful purposes and in accordance with applicable laws and these terms.</li>
            <li>Do not interfere with or damage the website’s functionality or other users’ experiences.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
          <ul className="list-decimal list-inside mb-6 space-y-2">
            <li>All content is owned by CollectSwift or its licensors and protected by intellectual property laws.</li>
            <li>Do not reproduce, distribute, or modify any content without our written permission.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
          <ul className="list-decimal list-inside mb-6 space-y-2">
            <li>We are not liable for any damages arising from your use of our site or services.</li>
            <li>Our total liability is limited to the amount you’ve paid, if any, for using our services.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">6. Indemnification</h2>
          <p className="mb-6">
            You agree to defend and hold CollectSwift and its affiliates harmless from any claims arising from your use of the site or services.
          </p>

          <h2 className="text-xl font-semibold mb-2">7. Governing Law & Dispute Resolution</h2>
          <ul className="list-decimal list-inside mb-6 space-y-2">
            <li>These terms are governed by the laws of [Your Jurisdiction].</li>
            <li>Disputes will be resolved through arbitration under [Arbitration Organization].</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">8. Changes to Terms</h2>
          <p className="mb-6">
            We may update these terms at any time. Continued use of the site means you accept the revised terms.
          </p>

          <h2 className="text-xl font-semibold mb-2">9. Contact Information</h2>
          <p>
            For questions, please contact us at{' '}
            <a href="mailto:collectswift@gmail.com" className="text-blue-600 underline">
              collectswift@gmail.com
            </a>.
          </p>
        </div>
      </main>
    </>
  );
}
