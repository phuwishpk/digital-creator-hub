import { Calendar, MapPin } from "lucide-react";

interface ActivityCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
}

const ActivityCard = ({
  image,
  title,
  description,
  date,
  location,
  category,
}: ActivityCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden border border-border transition-all duration-500 hover:border-accent/50 hover:shadow-[0_0_30px_hsl(280_80%_60%/0.15)]">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/90 text-accent-foreground backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-accent" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-accent" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
