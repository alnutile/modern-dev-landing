import React from 'react';

export function WhyTakeCourse() {
  return (
    <section className="py-16 glass-morphism">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
          Why Take This Course
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex items-start gap-4">
            <span className="text-2xl">💰</span>
            <p className="text-lg text-muted-foreground">
              Your wallet will thank you! Did you know that developers that have specialist automation/AI skills can command a salary bump of <a href="https://www.dice.com/career-advice/ai-specialization-can-yield-a-huge-pay-premium" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 underline">25% and higher</a>?
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🎓</span>
            <p className="text-lg text-muted-foreground">
              Your career will thank you! Eventually, automation and AI will be mandatory tools in a developer's toolbox. <span className="font-semibold text-primary">Future-proof your career</span> now by taking this automation/AI-first journey and take full advantage while the others in the industry catch up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}