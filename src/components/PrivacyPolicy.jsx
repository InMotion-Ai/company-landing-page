import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back to Home Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[var(--color-primary-light)] hover:text-[var(--color-primary)] transition-colors mb-8"
        >
          <FaArrowLeft />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-dark)]">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Last Updated: December 16, 2025
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-dark)]">
              1. Introduction
            </h2>
            <p>
              Welcome to Month-end AI Copilot ("we," "our," or "us"). We are committed to
              protecting your privacy and handling your data in an open and transparent manner.
              This Privacy Policy explains how we collect, use, store, and share information
              when you use our AI-powered month-end accounting platform.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-dark)]">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-semibold mb-3 text-[var(--color-dark)]">
              2.1 Information You Provide
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Account information (name, email, company details)</li>
              <li>Financial documents (invoices, receipts, payroll reports, bank statements)</li>
              <li>Transaction data and reconciliation records</li>
              <li>Communications with our support team</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-[var(--color-dark)]">
              2.2 Information Collected Automatically
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Usage data (features accessed, time spent, actions taken)</li>
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-dark)]">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our AI-powered month-end reconciliation services</li>
              <li>Process and analyze financial documents using artificial intelligence</li>
              <li>Identify exceptions, mismatches, and missing documentation</li>
              <li>Generate month-end reports and close checklists</li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* AI and Data Processing */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-dark)]">
              4. AI and Data Processing
            </h2>
            <h3 className="text-xl font-semibold mb-3 text-[var(--color-dark)]">
              4.1 How Our AI Works
            </h3>
            <p className="mb-4">
              Our AI processes your financial data to extract information, match transactions,
              identify patterns, and flag exceptions. All AI processing is performed to support
              your month-end close workflow.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-[var(--color-dark)]">
              4.2 AI Model Training
            </h3>
            <p>
              We do not use your specific financial data to train our AI models without your
              explicit consent. Aggregated, anonymized data may be used to improve our
              AI capabilities while maintaining your privacy.
            </p>
          </section>

          {/* Data Sharing and Disclosure */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-dark)]">
              5. Data Sharing and Disclosure
            </h2>
            <p className="mb-3">We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> Third-party vendors who help us operate our
                platform (cloud hosting, payment processing, analytics)
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, court order, or
                government request
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger, acquisition,
                or sale of assets
              </li>
            </ul>
            <p className="mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-dark)]">
              6. Data Security
            </h2>
            <p className="mb-3">
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>End-to-end encryption for data in transit and at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>Role-based access controls</li>
              <li>Secure cloud infrastructure with redundancy and backup</li>
              <li>Employee training on data protection practices</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-dark)]">
              7. Data Retention
            </h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide
              you services. You may request deletion of your data at any time, subject to legal
              retention requirements for financial records.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-dark)]">
              8. Your Rights
            </h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at{' '}
              <a
                href="mailto:privacy@monthendcopilot.com"
                className="text-[var(--color-primary-light)] hover:underline"
              >
                privacy@monthendcopilot.com
              </a>
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-dark)]">
              9. Cookies and Tracking
            </h2>
            <p>
              We use cookies and similar technologies to improve your experience, analyze usage,
              and provide personalized features. You can control cookie preferences through your
              browser settings.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-dark)]">
              10. International Data Transfers
            </h2>
            <p>
              Your information may be transferred to and processed in countries other than your
              own. We ensure appropriate safeguards are in place to protect your data in
              accordance with this Privacy Policy.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-dark)]">
              11. Children's Privacy
            </h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not
              knowingly collect information from children.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-dark)]">
              12. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              significant changes by email or through our platform. Continued use of our
              services after changes indicates acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-dark)]">
              13. Contact Us
            </h2>
            <p className="mb-2">
              If you have questions about this Privacy Policy or our data practices, please
              contact us:
            </p>
            <div className="bg-[var(--color-gray-light)] p-6 rounded-lg mt-4">
              <p className="mb-2">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:privacy@monthendcopilot.com"
                  className="text-[var(--color-primary-light)] hover:underline"
                >
                  privacy@monthendcopilot.com
                </a>
              </p>
              <p>
                <strong>Mailing Address:</strong> [Your Company Address]
              </p>
            </div>
          </section>

          {/* Compliance */}
          <section className="border-t pt-8 mt-8">
            <p className="text-sm text-gray-600">
              This Privacy Policy is designed to comply with applicable data protection laws
              including GDPR (EU), CCPA (California), and other regional privacy regulations.
              We are committed to maintaining the highest standards of data protection and
              privacy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
