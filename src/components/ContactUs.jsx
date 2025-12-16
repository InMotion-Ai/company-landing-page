import React from 'react';
import EarlyAccessForm from './forms/EarlyAccessForm';

const ContactUs = () => {
  const handleFormSubmit = (formData) => {
    console.log('Early access request:', formData);
    // TODO: Integrate with backend/email service
    alert('Thank you for your interest! We\'ll be in touch soon.');
  };

  return (
    <section className="bg-[var(--color-primary)] py-16" id="get-access">
      <div className="mx-auto container px-8">
        {/* Custom centered heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-white">
            Get Early Access
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Tell us about your month-end challenges and we'll show you how the AI Copilot can help.
          </p>
        </div>

        <div className="bg-[var(--color-gray-light)] rounded-3xl px-6 py-10 md:px-12 md:py-12">
          <div className="max-w-2xl mx-auto">
            <EarlyAccessForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
