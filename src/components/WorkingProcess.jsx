import React from 'react';
import WorkingProcessCard from './ui/WorkingProcessCard';
import { howItWorksSteps, images } from '../data';

const WorkingProcess = () => {
  return (
    <section className="mx-auto container px-6 py-16" id="how-it-works">
      {/* Custom centered heading */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
          How the Month-end AI Copilot works
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          AI handles the routine checks and organization. You stay in control of approvals and final review.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Steps - Left side */}
        <div className="lg:w-1/2 space-y-6">
          {howItWorksSteps.map((step) => {
            return (
              <WorkingProcessCard
                key={step.id}
                text={step.description}
                title={step.title}
                id={step.id}
              />
            );
          })}
        </div>

        {/* Image - Right side */}
        <div className="lg:w-1/2 lg:sticky lg:top-8">
          <img
            src={images.howItWorksImage}
            alt="How Month-end AI Copilot Works"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
