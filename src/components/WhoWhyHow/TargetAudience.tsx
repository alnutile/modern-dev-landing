
import { Users, Code2, Brain } from 'lucide-react';
import { targetAudience } from '@/data/who_why_how.json';

const iconMap = {
  Users,
  Code2,
  Brain
} as const;

export function TargetAudience() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
          {targetAudience.title}
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          {targetAudience.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targetAudience.personas.map((persona, index) => {
            const Icon = iconMap[persona.icon as keyof typeof iconMap];
            return (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 mr-2 text-primary" />
                  <h3 className="text-xl font-semibold">{persona.title}</h3>
                </div>
                <div className="text-muted-foreground whitespace-pre-line">
                  {persona.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
