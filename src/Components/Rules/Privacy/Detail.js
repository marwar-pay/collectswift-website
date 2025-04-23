// pages/privacy-policy.js

import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | CollectSwift</title>
        <meta name="description" content="Learn how CollectSwift collects, uses, and protects your personal data." />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <p className="mb-6">
            At CollectSwift, protecting your privacy is our top priority. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services and interact with our platform.
          </p>

          <h2 className="text-xl font-semibold mb-2">Information Collection</h2>
          <p className="mb-6">
            We collect information such as your preferences for mobile recharges, favorite services, and user behavior patterns to personalize your experience. This data is gathered through your direct interactions with our web and mobile platforms.
          </p>

          <h2 className="text-xl font-semibold mb-2">Technical Information</h2>
          <p className="mb-6">
            Our systems automatically collect technical data such as your browser type, IP address, device type, and operating system. This information helps us enhance platform functionality and optimize the user experience.
          </p>

          <h2 className="text-xl font-semibold mb-2">Purpose of Collection and Use</h2>
          <p className="mb-6">
            We use your data to personalize services, provide relevant offers, improve platform performance, and maintain security. Your preferences allow us to deliver a tailored and efficient user experience.
          </p>

          <h2 className="text-xl font-semibold mb-2">Access and Update</h2>
          <p className="mb-6">
            You may access or update your personal information directly through your user account. If you face any issues, our support team is always available to assist you.
          </p>

          <h2 className="text-xl font-semibold mb-2">Data Security</h2>
          <p className="mb-6">
            As a GeoTrust-certified service, CollectSwift implements industry-standard security practices to protect your personal data from unauthorized access or misuse.
          </p>

          <h2 className="text-xl font-semibold mb-2">Data Retention</h2>
          <p className="mb-6">
            We retain personal data only as long as needed for the purposes outlined in this policy, or as required by law. Upon request, we will delete or anonymize your data unless we are legally obligated to retain it.
          </p>

          <h2 className="text-xl font-semibold mb-2">Policy Changes</h2>
          <p className="mb-6">
            We may update this Privacy Policy periodically. Changes will be posted here, and we encourage users to review this page regularly to stay informed about how their data is protected.
          </p>

          <p className="mt-4">
            For questions regarding this policy or to exercise your rights under applicable data protection laws, please contact us at{' '}
            <a href="mailto:collectswift@gmail.com" className="text-blue-600 underline">
              collectswift@gmail.com
            </a>.
          </p>
        </div>
      </main>
    </>
  );
}
