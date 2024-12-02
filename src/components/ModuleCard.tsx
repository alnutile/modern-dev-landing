import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ModuleCardProps {
  number: number;
  title: string;
  points: string[];
}

export const ModuleCard = ({ number, title, points }: ModuleCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
      <CardHeader>
        <p className="text-sm text-muted-foreground">Module {number}</p>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-accent">•</span>
              <span className="text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};