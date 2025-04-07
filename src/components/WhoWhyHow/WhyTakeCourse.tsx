
import React from 'react';
import { CTAButton } from '@/components/CTAButton';
import { businessImpact } from '@/data/who_why_how.json';

export function WhyTakeCourse() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
          {businessImpact.title}
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          {businessImpact.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {businessImpact.impacts.map((impact, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3">{impact.title}</h3>
              <p className="text-muted-foreground mb-4">{impact.description}</p>
              <div className="text-2xl font-bold text-primary">{impact.metric}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
