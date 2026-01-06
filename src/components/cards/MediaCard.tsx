import { Play } from "lucide-react";

interface MediaCardProps {
  image: string;
  title: string;
  description: string;
  tools: string[];
  category: string;
  videoUrl?: string;
}

const MediaCard = ({
  image,
  title,
  description,
  tools,
  category,
  videoUrl = "#",
}: MediaCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden border border-border transition-all duration-500 hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(270_60%_55%/0.15)]">
      {/* Image Container with Play Button */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        
        {/* Play Button Overlay */}
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-secondary/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary group-hover:shadow-[0_0_30px_hsl(270_60%_55%/0.5)]">
            <Play className="w-7 h-7 text-secondary-foreground fill-current ml-1" />
          </div>
        </a>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/90 text-secondary-foreground backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
