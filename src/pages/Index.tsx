import { Hero } from "@/components/Hero";
import { ModuleCard } from "@/components/ModuleCard";
import { ValueProps } from "@/components/ValueProp";
import { CTAButton } from "@/components/CTAButton";

const modules = [
  {
    number: 1,
    title: "AI-Powered Development",
    points: [
      "Mastering GitHub Copilot",
      "Prompt Engineering for Developers",
      "AI Code Review Techniques",
      "Automated Testing with AI",
    ],
  },
  {
    number: 2,
    title: "No-Code Foundations",
    points: [
      "Visual Development Platforms",
      "Database Design without Code",
      "Automation Workflows",
      "Integration Techniques",
    ],
  },
  {
    number: 3,
    title: "Low-Code Architecture",
    points: [
      "Component-Based Development",
      "API Integration Patterns",
      "Custom Logic Implementation",
      "Performance Optimization",
    ],
  },
  {
    number: 4,
    title: "Modern Development Practices",
    points: [
      "CI/CD Pipeline Setup",
      "Cloud Deployment Strategies",
      "Security Best Practices",
      "Monitoring and Analytics",
    ],
  },
  {
    number: 5,
    title: "Project Architecture",
    points: [
      "Scalable System Design",
      "Microservices Architecture",
      "Data Modeling Patterns",
      "Performance Optimization",
    ],
  },
  {
    number: 6,
    title: "Real-World Projects",
    points: [
      "E-commerce Platform",
      "Social Network Features",
      "Analytics Dashboard",
      "Payment Integration",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Course Curriculum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module) => (
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

      <section className="py-20 px-4 bg-white">
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