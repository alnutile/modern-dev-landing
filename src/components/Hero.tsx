import { CTAButton } from "./CTAButton";
import heroData from "../data/hero.json";

export const Hero = () => {
  return (
    <div className="hero-gradient 
    min-h-[20vh] flex flex-col items-center justify-center text-center px-4 py-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-3 animate-float flex flex-col gap-1">
        <span className="text-muted-foreground">{heroData.titlePrefix}</span>
        <span className="gradient-text">{heroData.titleMain}</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6">
        {heroData.description}
      </p>
      <div className="space-y-2">
        <CTAButton />
        <p className="text-muted-foreground text-base">{heroData.startDate}</p>
      </div>
    </div>
  );
};