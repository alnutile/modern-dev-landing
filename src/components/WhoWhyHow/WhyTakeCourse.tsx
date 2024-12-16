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
              Your wallet will thank you! Did you know that developers that have specialist automation/AI skills can command a <span className="font-semibold text-primary">salary bump of 25% and higher</span>?
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