import React from 'react';

const FeatureCard = ({
  title,
  description,
  detailsList = [],
  icon: Icon,
  bgColor = 'var(--color-gray-light)',
}) => {
  return (
    <div
      className="p-8 rounded-3xl border border-[var(--color-dark)] border-b-[5px] shadow-[0_4px_0_0_var(--color-dark)] h-full flex flex-col"
      style={{ backgroundColor: bgColor }}
    >
      {/* Icon */}
      {Icon && (
        <div className="mb-4">
          <Icon className="text-4xl" />
        </div>
      )}

      {/* Title */}
      <h3 className="text-2xl font-medium mb-4">{title}</h3>

      {/* Description */}
      <p className="mb-4 flex-grow">{description}</p>

      {/* Details List */}
      {detailsList && detailsList.length > 0 && (
        <ul className="space-y-2 mt-4">
          {detailsList.map((detail, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[var(--color-accent)] mr-2 mt-1">•</span>
              <span className="text-sm">{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeatureCard;
