
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export const CTAButton = () => {
  const { toast } = useToast();

  const handleMembershipClick = () => {
    toast({
      title: "Forum Access",
      description: "Coming Monday the 14th of April",
      duration: 5000,
    });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button
        size="lg"
        className={cn(
          "bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
        )}
        onClick={handleMembershipClick}
      >
        Become a Member and Get Forum Access
      </Button>
      <Button
        size="lg"
        variant="secondary"
        className={cn(
          "bg-secondary hover:bg-secondary/90 text-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
        )}
        asChild
      >
        <a href="https://calendly.com/alfrednutile/one-on-one-coaching" target="_blank" rel="noopener noreferrer">
          Book One-on-One Coaching
        </a>
      </Button>
    </div>
  );
};
