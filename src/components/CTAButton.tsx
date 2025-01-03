import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
      <a href="https://buy.stripe.com/28o00LbAN2f74dW8wx">
        Sign up for the Course - $1,200 (Early bird)
      </a>
    </Button>
  );
};