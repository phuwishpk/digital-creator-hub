import { Film, Video, Tv, Scissors, Wand2, Smartphone, Monitor, Radio } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MediaCard from "@/components/cards/MediaCard";
import SkillBadge from "@/components/cards/SkillBadge";
import media1 from "@/assets/media-1.jpg";
import media2 from "@/assets/media-2.jpg";
import media3 from "@/assets/media-3.jpg";
import media4 from "@/assets/media-4.jpg";

const MediaPortfolio = () => {
  const mediaSkills = [
    { icon: Tv, name: "vMix" },
    { icon: Monitor, name: "OBS Studio" },
    { icon: Scissors, name: "Premiere Pro" },
    { icon: Wand2, name: "After Effects" },
    { icon: Smartphone, name: "CapCut" },
  ];

  const mediaWorks = [
    {
      image: media1,
      title: "Multi-Camera Live Event",
      description: "Professional live streaming production for corporate events with multi-camera switching, custom overlays, and real-time audio mixing.",
      tools: ["vMix", "NDI", "Audio Mixer"],
      category: "Live Streaming",
      videoUrl: "#",
    },
    {
      image: media2,
      title: "Documentary Short Film",
      description: "Full editing workflow including color grading, sound design, and motion graphics for a 15-minute documentary.",
      tools: ["Premiere Pro", "DaVinci Resolve"],
      category: "Video Editing",
      videoUrl: "#",
    },
    {
      image: media3,
      title: "Brand Motion Graphics",
      description: "Animated logo reveals, lower thirds, and transition effects for a brand identity package used across social media.",
      tools: ["After Effects", "Illustrator"],
      category: "Motion Graphics",
      videoUrl: "#",
    },
    {
      image: media4,
      title: "Social Media Content Series",
      description: "Engaging short-form videos for TikTok and Instagram Reels with trending effects, captions, and music sync.",
      tools: ["CapCut", "Premiere Pro"],
      category: "Short Content",
      videoUrl: "#",
    },
  ];

  const sections = [
    {
      title: "Live Streaming Works",
      description: "Professional broadcast production including scene switching, custom overlays, audio control, and multi-platform streaming.",
      icon: Radio,
    },
    {
      title: "Video Editing Works",
      description: "From raw footage to polished final cuts - color grading, sound design, and storytelling through editing.",
      icon: Film,
    },
    {
      title: "Social Media Content",
      description: "Trendy, engaging short-form content optimized for platforms like TikTok, Instagram Reels, and YouTube Shorts.",
      icon: Video,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
              <Film className="w-4 h-4 text-secondary" />
              <span className="text-sm text-secondary font-medium">Media Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Creating{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Visual Stories
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore my media production works spanning live streaming, video editing, and motion graphics
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-foreground text-center">Production Tools</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {mediaSkills.map((skill) => (
                <SkillBadge key={skill.name} icon={skill.icon} name={skill.name} variant="secondary" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I Create Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What I Create
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <section.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{section.title}</h3>
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works Gallery */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my media production projects across different formats and platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {mediaWorks.map((work, index) => (
              <div
                key={work.title}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MediaCard {...work} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MediaPortfolio;
