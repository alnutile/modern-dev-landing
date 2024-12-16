import { Hero } from "@/components/Hero";
import { TargetAudience } from "@/components/WhoWhyHow/TargetAudience";
import { TransformationJourney } from "@/components/WhoWhyHow/TransformationJourney";
import { ModuleCard } from "@/components/ModuleCard";
import { ValueProps } from "@/components/ValueProp";
import { CTAButton } from "@/components/CTAButton";
import moduleData from "@/data/modules.json";
import whyData from "@/data/why.json";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TargetAudience />
      <TransformationJourney />
      
      <section className="py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          {whyData.title}
        </h2>
        <ValueProps reasons={whyData.reasons} />
      </section>
      
      <section className="py-20 px-4 glass-morphism">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Course Curriculum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moduleData.modules.map((module) => (
              <ModuleCard key={module.number} {...module} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 glass-morphism">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Ready to Transform Your Development Skills?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Learn from someone who has been doing this for 25+ years and is making the shift from traditional development to these new patterns.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  );
};

export default Index;