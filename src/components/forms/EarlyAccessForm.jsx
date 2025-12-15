import React, { useState } from 'react';
import Button from '../ui/Button';
import { formConfig } from '../../data';

const EarlyAccessForm = ({ onSubmit, className = '', showHeading = false }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    if (onSubmit) {
      onSubmit(formData);
    }
    // Reset form
    setFormData({
      fullName: '',
      workEmail: '',
      companyName: '',
      role: 'Owner / Operator',
      improvement: 'Invoices / AP',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {showHeading && (
        <h3 className="text-2xl font-medium mb-6">Request Early Access</h3>
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
        text="Request Early Access"
        className="bg-[var(--color-dark)] text-white w-full hover:bg-[var(--color-primary)] transition-colors"
      />
    </form>
  );
};

export default EarlyAccessForm;
