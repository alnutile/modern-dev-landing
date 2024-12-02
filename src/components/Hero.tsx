import { CTAButton } from "./CTAButton";

export const Hero = () => {
  return (
    <div className="hero-gradient min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float flex flex-col">
        <span className="text-muted-foreground">Join Alfred Nutile at</span>
        <span className="gradient-text">DailyAi.Studio</span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12">
        Build Faster with AI, No-Code, and Low-Code Tools
      </p>
      <CTAButton />
    </div>
  );
};