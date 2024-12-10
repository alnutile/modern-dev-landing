import { targetAudience } from '@/data/who_why_how.json';

export function TargetAudience() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 gradient-text">{targetAudience.title}</h2>
        <p className="text-xl text-center mb-12 text-muted-foreground">{targetAudience.description}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {targetAudience.personas.map((persona) => (
            <div key={persona.title} className="text-center p-6 rounded-lg bg-card hover:bg-card/80 transition-colors duration-200 border border-border">
              <div className="mb-4 w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                {persona.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 gradient-text">{persona.title}</h3>
              <p className="text-muted-foreground">{persona.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 