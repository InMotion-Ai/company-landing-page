import React, { useState } from 'react';
import Button from './ui/Button';
import Modal from './ui/Modal';
import EarlyAccessForm from './forms/EarlyAccessForm';
import { images } from '../data';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (formData) => {
    console.log('Early access request:', formData);
    // TODO: Integrate with backend/email service
    alert('Thank you for your interest! We\'ll be in touch soon.');
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="bg-[var(--color-primary)] relative overflow-hidden">
        <div className="container px-6 mx-auto py-20 lg:py-28 flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          {/* Left Section - Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Your month-end AI copilot, built for real-world close chaos
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-white">
              A single platform where AI helps you track what's done, what's
              missing, and what needs review across invoices, payroll, and
              expenses—so month-end becomes a guided routine instead of a
              scramble.
            </p>
            <div className="space-y-2">
              <Button
                text="Request early access"
                className="bg-[var(--color-primary-light)] text-white hover:bg-[var(--color-accent)] hover:text-[var(--color-dark)] transition-colors w-full md:w-auto px-10 py-5 rounded-lg text-lg"
                onClick={() => setIsModalOpen(true)}
              />
              <p className="text-sm text-white/80 mt-2">
                See a walkthrough + tell us what your close looks like.
              </p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="lg:w-1/2">
            <img
              src={images.heroImage}
              alt="Month-end AI Copilot Dashboard"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="hero-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0,50 Q25,40 50,50 T100,50" stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="2"/>
                <path d="M0,60 Q25,50 50,60 T100,60" stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="2"/>
                <path d="M0,70 Q25,60 50,70 T100,70" stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>
      </header>

      {/* Modal with Early Access Form */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Request Early Access"
      >
        <EarlyAccessForm onSubmit={handleFormSubmit} />
      </Modal>
    </>
  );
};

export default Header;
