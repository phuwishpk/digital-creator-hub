import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "th" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="relative group"
      title={language === "en" ? "Switch to Thai" : "Switch to English"}
    >
      <Languages className="w-5 h-5" />
      <span className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-primary text-primary-foreground rounded px-1">
        {language === "en" ? "TH" : "EN"}
      </span>
    </Button>
  );
};

export default LanguageToggle;