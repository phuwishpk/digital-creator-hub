import { LucideIcon } from "lucide-react";

interface SkillBadgeProps {
  icon: LucideIcon;
  name: string;
  variant?: "primary" | "secondary" | "accent";
}

const SkillBadge = ({ icon: Icon, name, variant = "primary" }: SkillBadgeProps) => {
  const variants = {
    primary: "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:shadow-[0_0_20px_hsl(198_93%_55%/0.2)]",
    secondary: "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 hover:shadow-[0_0_20px_hsl(270_60%_55%/0.2)]",
    accent: "bg-accent/20 text-accent-foreground border-accent/30 hover:bg-accent/30 hover:shadow-[0_0_20px_hsl(265_80%_60%/0.2)]",
  };

  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 cursor-default ${variants[variant]}`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium text-sm">{name}</span>
    </div>
  );
};

export default SkillBadge;
