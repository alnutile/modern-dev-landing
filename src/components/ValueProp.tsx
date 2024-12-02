import { Clock, Users, Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ValuePropItemProps {
  icon: React.ReactNode;
  title: string;
}

const ValuePropItem = ({ icon, title }: ValuePropItemProps) => (
  <Card className="border-none shadow-none bg-transparent">
    <CardContent className="flex flex-col items-center text-center p-6">
      <div className="mb-4 text-accent">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </CardContent>
  </Card>
);

export const ValueProps = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      <ValuePropItem
        icon={<Clock className="w-12 h-12" />}
        title="50-80% Faster Development"
      />
      <ValuePropItem
        icon={<Users className="w-12 h-12" />}
        title="Live Zoom Training"
      />
      <ValuePropItem
        icon={<Laptop className="w-12 h-12" />}
        title="Real-World Projects"
      />
    </div>
  );
};