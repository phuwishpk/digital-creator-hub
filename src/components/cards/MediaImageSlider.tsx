import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface MediaImageSliderProps {
  images: string[];
  title: string;
  description: string;
  tools: string[];
  category: string;
  videoUrl?: string;
}

const MediaImageSlider = ({
  images,
  title,
  description,
  tools,
  category,
  videoUrl = "#",
}: MediaImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group relative bg-card rounded-xl overflow-hidden border border-border transition-all duration-500 hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(270_60%_55%/0.15)]">
      {/* Image Slider Container */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </>
        )}

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-secondary w-4"
                    : "bg-muted-foreground/50 hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        )}

        {/* Play Button to Video */}
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-16 h-16 rounded-full bg-secondary/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary group-hover:shadow-[0_0_30px_hsl(270_60%_55%/0.5)] pointer-events-auto">
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

export default MediaImageSlider;
