
import { CTAButton } from "./CTAButton";
import { YouTubeEmbed } from "./YouTubeEmbed";
import heroData from "../data/hero.json";

export const Hero = () => {
  return (
    <div className="hero-gradient min-h-[20vh] flex flex-col items-center justify-center text-center px-4 py-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-3 animate-float flex flex-col gap-1">
        <span className="text-muted-foreground">{heroData.titlePrefix}</span>
        <span className="gradient-text">{heroData.titleMain}</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6">
        {heroData.description}
      </p>
      
      <YouTubeEmbed videoId={heroData.videoId} title="Training Update" />
      
      <div className="max-w-2xl mx-auto mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 gradient-text">Coaching & Community Access</h2>
        <p className="text-muted-foreground mb-4">
          One-on-one coaching sessions at {heroData.consultingRate} with access to the community forums.
          <br />
          Continue your subscription after the first year for just {heroData.forumSubscription}.
        </p>
      </div>
      
      <div className="space-y-2">
        <CTAButton />
      </div>
    </div>
  );
};
