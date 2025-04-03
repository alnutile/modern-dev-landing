
import { Brain, Code2, Rocket, Users, Workflow, Bot, Zap, Video, MessageSquare } from 'lucide-react';

const iconMap = {
  Brain,
  Code2,
  Rocket,
  Users,
  Workflow,
  Bot,
  Zap,
  Video,
  MessageSquare
};

interface Reason {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}

interface ValuePropsProps {
  reasons: Reason[];
}

export const ValueProps = ({ reasons }: ValuePropsProps) => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {reasons.map((reason, index) => {
        const Icon = iconMap[reason.icon];
        return (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
