import { Hero } from "@/components/Hero";
import { ModuleCard } from "@/components/ModuleCard";
import { ValueProps } from "@/components/ValueProp";
import { CTAButton } from "@/components/CTAButton";
import moduleData from "@/data/modules.json";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
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

      <section className="py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Why Choose This Program?
        </h2>
        <ValueProps />
      </section>

      <section className="py-20 px-4 glass-morphism">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Ready to Transform Your Development Skills?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of developers who have accelerated their careers with our program.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  );
};

export default Index;