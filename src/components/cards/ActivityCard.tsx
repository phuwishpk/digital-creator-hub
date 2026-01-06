import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ActivityCardProps {
  images: string[];
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
}

const ActivityCard = ({
  images,
  title,
  description,
  date,
  location,
  category,
}: ActivityCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group relative bg-card rounded-xl overflow-hidden border border-border transition-all duration-500 hover:border-accent/50 hover:shadow-[0_0_30px_hsl(280_80%_60%/0.15)]">
      {/* Image Slider Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`${title} - ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-accent w-4"
                      : "bg-foreground/50 hover:bg-foreground/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}

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
