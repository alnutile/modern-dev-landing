import { transformationJourney } from '@/data/who_why_how.json';

export function TransformationJourney() {
  return (
    <section className="py-16 glass-morphism">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 gradient-text">{transformationJourney.title}</h2>
        <p className="text-xl text-center mb-12 text-muted-foreground">{transformationJourney.description}</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-card/50 border border-border hover:bg-card/60 transition-colors duration-200">
            <h3 className="text-xl font-semibold mb-4 text-primary">{transformationJourney.stages.current.title}</h3>
            <ul className="space-y-3">
              {transformationJourney.stages.current.points.map((point) => (
                <li key={point} className="flex items-start text-muted-foreground">
                  <span className="mr-2 text-primary">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-card/50 border border-border hover:bg-card/60 transition-colors duration-200">
            <h3 className="text-xl font-semibold mb-4 text-primary">{transformationJourney.stages.future.title}</h3>
            <ul className="space-y-3">
              {transformationJourney.stages.future.points.map((point) => (
                <li key={point} className="flex items-start text-muted-foreground">
                  <span className="mr-2 text-primary">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 