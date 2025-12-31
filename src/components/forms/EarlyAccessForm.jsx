import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import Button from '../ui/Button';
import { formConfig } from '../../data';

const EarlyAccessForm = ({ onSubmit, className = '', showHeading = false }) => {
  const [state, handleFormspreeSubmit] = useForm('xlgdrorn');
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    role: 'Owner / Operator',
    improvement: 'Invoices / AP',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit to Formspree
    await handleFormspreeSubmit(e);

    // Call optional onSubmit callback
    if (onSubmit) {
      onSubmit(formData);
    }

    // Reset form only if submission succeeded
    if (state.succeeded) {
      setFormData({
        fullName: '',
        workEmail: '',
        companyName: '',
        role: 'Owner / Operator',
        improvement: 'Invoices / AP',
        message: '',
      });
    }
  };

  // Show success message
  if (state.succeeded) {
    return (
      <div className={`text-center p-8 ${className}`}>
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-2xl font-medium text-green-800 mb-2">
            Thanks for joining the waitlist!
          </h3>
          <p className="text-green-700">
            We'll be in touch soon with updates about NexOps.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {showHeading && (
        <h3 className="text-2xl font-medium mb-6">Join the Waitlist</h3>
      )}

      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium mb-2"
        >
          Full name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-[var(--color-dark)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          placeholder="John Doe"
        />
      </div>

      {/* Work Email */}
      <div>
        <label
          htmlFor="workEmail"
          className="block text-sm font-medium mb-2"
        >
          Work email *
        </label>
        <input
          type="email"
          id="workEmail"
          name="workEmail"
          value={formData.workEmail}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-[var(--color-dark)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          placeholder="john@company.com"
        />
      </div>

      {/* Company Name */}
      <div>
        <label
          htmlFor="companyName"
          className="block text-sm font-medium mb-2"
        >
          Company name *
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-[var(--color-dark)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          placeholder="Your Company Inc."
        />
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" className="block text-sm font-medium mb-2">
          Role *
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-[var(--color-dark)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        >
          {formConfig.roleOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* What to Improve */}
      <div>
        <label
          htmlFor="improvement"
          className="block text-sm font-medium mb-2"
        >
          What do you want to improve most? *
        </label>
        <select
          id="improvement"
          name="improvement"
          value={formData.improvement}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-[var(--color-dark)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        >
          {formConfig.improvementOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Optional Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Anything messy about your month-end? (optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="2"
          className="w-full px-4 py-3 border border-[var(--color-dark)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] resize-none"
          placeholder="Share any specific challenges..."
        />
      </div>

      {/* Submit Button */}
      <Button
        text={state.submitting ? 'Submitting...' : 'Join the Waitlist'}
        className="bg-[var(--color-dark)] text-white w-full hover:bg-[var(--color-primary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={state.submitting}
      />

      {/* Error Message */}
      {state.errors && state.errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-red-700 text-sm">
            Oops! There was a problem submitting your form. Please try again.
          </p>
        </div>
      )}
    </form>
  );
};

export default EarlyAccessForm;
