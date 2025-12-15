import React from 'react';
import FeatureCard from './ui/FeatureCard';
import { features, images } from '../data';
import {
  FaFileInvoiceDollar,
  FaMoneyCheckAlt,
  FaReceipt,
  FaCog,
} from 'react-icons/fa';

// Map feature IDs to icons
const featureIcons = {
  1: FaFileInvoiceDollar,
  2: FaMoneyCheckAlt,
  3: FaReceipt,
  4: FaCog,
};

// Map feature IDs to colors
const featureColors = {
  1: 'var(--color-gray-light)', // Light gray
  2: 'var(--color-accent)', // Accent
  3: 'var(--color-gray-light)', // Light gray
  4: 'var(--color-accent)', // Accent
};

const FeaturesIncluded = () => {
  return (
    <section className="py-16" id="features">
      <div className="container mx-auto px-6">
        {/* Custom centered heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            What the AI Copilot supports
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Start with the parts of month-end that drain time—and expand as your workflow grows.
          </p>
        </div>

        {/* Supporting Image */}
        <div className="mt-12 flex justify-center">
          <img
            src={images.copilotEntities}
            alt="AI Copilot Components"
            className="max-w-2xl w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              detailsList={feature.detailsList}
              icon={featureIcons[feature.id]}
              bgColor={featureColors[feature.id]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesIncluded;
