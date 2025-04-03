
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroData from "../data/hero.json";

interface CTAButtonProps {
  className?: string;
  onClick?: () => void;
}

export const CTAButton = ({ className, onClick }: CTAButtonProps) => {
  return (
    <Button
      size="lg"
      className={cn(
        "bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105",
        className
      )}
      onClick={onClick}
      asChild
    >
      <a href={heroData.ctaLink}>
        Join the Forums & Coaching Program
      </a>
    </Button>
  );
};
