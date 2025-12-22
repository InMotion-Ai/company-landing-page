import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleRequestAccess = () => {
    navigate('/');
    setTimeout(() => {
      const accessSection = document.getElementById('get-access');
      if (accessSection) {
        accessSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-primary)] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About OpexAi
            </h1>
            <p className="text-xl text-white/90">
              A product of NexOps, designed to transform how Canadian SMBs handle month-end close
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We help Canadian small and medium-sized businesses run smoother operations
                with practical, trustworthy AI automation that removes repetitive busywork
                and supports better decision-making.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A suite of AI copilots that automate operational workflows across finance and
                store operations, enabling SMB teams to reduce administrative overhead and
                focus on customers, growth, and execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We're Solving */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-8">
              The Problem We're Solving
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Month-end close in many Canadian SMBs often stretches into the next month, creating
              delays, stress, and consuming valuable time that teams could spend on higher-value work.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-[var(--color-primary)] mb-3">
                  Fragmented Systems
                </h3>
                <p className="text-gray-600">
                  Data scattered across banking, POS, payroll, expenses, and accounting systems
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-[var(--color-primary)] mb-3">
                  Manual Work
                </h3>
                <p className="text-gray-600">
                  Spreadsheet-heavy reconciliation and manual data entry consuming hours
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-[var(--color-primary)] mb-3">
                  Missing Documentation
                </h3>
                <p className="text-gray-600">
                  Late approvals, decentralized receipts, and audit trail challenges
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-[var(--color-primary)] mb-3">
                  Last-Mile Exceptions
                </h3>
                <p className="text-gray-600">
                  Duplicates, mismatches, and uncategorized transactions that stall progress
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-8">
              Our Solution: Month-end AI Copilot
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              OpexAi is an end-to-end month-end close automation platform that helps Canadian SMBs
              reduce reconciliation busywork by collecting month-end inputs, standardizing data,
              matching records across systems, and surfacing exceptions for review.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-[var(--color-primary-light)] pl-6">
                <h3 className="font-semibold text-xl text-[var(--color-dark)] mb-2">
                  Faster, More Predictable Close
                </h3>
                <p className="text-gray-600">
                  Reduce your month-end close from weeks to days with automated reconciliation
                  and clear visibility into what's done, what's missing, and what needs review.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary-light)] pl-6">
                <h3 className="font-semibold text-xl text-[var(--color-dark)] mb-2">
                  Works With Your Existing Systems
                </h3>
                <p className="text-gray-600">
                  No need to replace your accounting software. OpexAi acts as an automation and
                  coordination layer on top of your existing business systems.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary-light)] pl-6">
                <h3 className="font-semibold text-xl text-[var(--color-dark)] mb-2">
                  Better Collaboration
                </h3>
                <p className="text-gray-600">
                  Improved collaboration between owners, internal staff, and external accountants
                  with organized documentation and consistent processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-8">
              Our Principles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-xl text-[var(--color-primary)] mb-3">
                  Practical Automation Over Hype
                </h3>
                <p className="text-gray-600">
                  We automate the routine while keeping humans in control of review and decisions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-[var(--color-primary)] mb-3">
                  Built for Real Workflows
                </h3>
                <p className="text-gray-600">
                  Designed to reflect how SMB teams actually operate—limited time, fragmented tools,
                  shared responsibilities.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-[var(--color-primary)] mb-3">
                  Transparency and Control
                </h3>
                <p className="text-gray-600">
                  Clear exceptions, audit trails, and review steps keep you in command of your
                  financial data.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-[var(--color-primary)] mb-3">
                  Canada-First
                </h3>
                <p className="text-gray-600">
                  Aligned with Canadian SMB realities including tax requirements, payroll remittances,
                  and external accountant oversight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Placeholder for future */}
      {/*
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-8 text-center">
              Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Team member cards will go here *\/}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Company Information */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-8">
              Company Information
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-[var(--color-dark)]">Product:</span> OpexAi
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-dark)]">Parent Company:</span> NexOps
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-dark)]">Legal Entity:</span> 17521740 Canada Ltd.
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-dark)]">Focus:</span> Canadian Small and Medium-Sized Businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[var(--color-primary)]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Month-End Close?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join Canadian SMBs who are reducing close time and reclaiming valuable hours
              with OpexAi's Month-end AI Copilot.
            </p>
            <Button
              text="Join the waitlist"
              className="bg-[var(--color-primary-light)] text-white hover:bg-[var(--color-accent)] hover:text-[var(--color-dark)] transition-colors px-10 py-5 rounded-lg text-lg"
              onClick={handleRequestAccess}
            />
            <p className="text-sm text-white/80 mt-4">
              See a walkthrough + tell us what your close looks like.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
