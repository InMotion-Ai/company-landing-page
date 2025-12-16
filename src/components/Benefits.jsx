import React from 'react';
import { benefits } from '../data';
import {
  FaClipboardCheck,
  FaFileAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaTasks,
  FaShieldAlt,
} from 'react-icons/fa';

// Map benefit IDs to icons
const benefitIcons = {
  1: FaClipboardCheck,
  2: FaFileAlt,
  3: FaCheckCircle,
  4: FaExclamationCircle,
  5: FaTasks,
  6: FaShieldAlt,
};

const Benefits = () => {
  return (
    <section className="bg-[var(--color-gray-light)] py-16" id="benefits">
      <div className="container mx-auto px-6">
        {/* Custom centered heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            What improves when AI helps run your close
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Month-end doesn't need more spreadsheets or heroics. It needs a system that keeps things moving and surfaces issues early.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefitIcons[benefit.id];
            return (
              <div
                key={benefit.id}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  {Icon && (
                    <div className="flex-shrink-0">
                      <Icon className="text-3xl text-[var(--color-accent)]" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
