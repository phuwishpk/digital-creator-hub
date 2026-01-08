import { ImageOff } from "lucide-react";

interface MediaPlaceholderCardProps {
  title: string;
}

const MediaPlaceholderCard = ({ title }: MediaPlaceholderCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden border border-border transition-all duration-500 hover:border-secondary/50">
      {/* Placeholder Image Area */}
      <div className="relative h-52 overflow-hidden bg-muted/30 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <ImageOff className="w-12 h-12" />
          <span className="text-sm">ยังไม่มีรูปภาพ</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h3 className="text-xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">
          รอเพิ่มข้อมูล
        </p>
      </div>
    </div>
  );
};

export default MediaPlaceholderCard;
