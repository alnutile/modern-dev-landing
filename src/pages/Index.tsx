import { Hero } from "@/components/Hero";
import { WhyTakeCourse } from "@/components/WhoWhyHow/WhyTakeCourse";
import { TargetAudience } from "@/components/WhoWhyHow/TargetAudience";
import { TransformationJourney } from "@/components/WhoWhyHow/TransformationJourney";
import { ModuleCard } from "@/components/ModuleCard";
import { ValueProps } from "@/components/ValueProp";
import { CTAButton } from "@/components/CTAButton";
import moduleData from "@/data/modules.json";
import whyData from "@/data/why.json";
const Index = () => {
  return <div className="min-h-screen">
      <Hero />
      <TargetAudience />
      <WhyTakeCourse />
      <TransformationJourney />
      
      

      <section className="py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          What's Included
        </h2>
        <ValueProps reasons={whyData.reasons} />
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
    </div>;
};
export default Index;