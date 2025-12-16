import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import WorkingProcessCard from './ui/WorkingProcessCard';
import { howItWorksSteps, images } from '../data';

// Map step IDs to colors - alternating pattern
const stepColors = {
  '01': 'var(--color-gray-light)',
  '02': 'var(--color-accent)',
  '03': 'var(--color-gray-light)',
  '04': 'var(--color-accent)',
  '05': 'var(--color-gray-light)',
};

const WorkingProcess = () => {
  return (
    <section className="bg-[var(--color-primary)] py-16" id="how-it-works">
      <div className="mx-auto container px-6">
        {/* Custom centered heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-white">
            How the Month-end AI Copilot works
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            AI handles the routine checks and organization. You stay in control of approvals and final review.
          </p>
        </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Steps - Left side (35% width) */}
        <div className="w-full lg:w-[35%]">
          {howItWorksSteps.map((step, index) => (
            <div key={step.id}>
              <WorkingProcessCard
                text={step.description}
                title={step.title}
                id={step.id}
                bgColor={stepColors[step.id]}
              />
              {/* Connector Arrow - show between all steps except after the last one */}
              {index < howItWorksSteps.length - 1 && (
                <div className="flex justify-center py-4">
                  <FaArrowDown className="text-2xl text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image - Right side (65% width, larger and more prominent) */}
        <div className="w-full lg:w-[65%] lg:sticky lg:top-8">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={images.howItWorksImage}
              alt="How Month-end AI Copilot Works"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
