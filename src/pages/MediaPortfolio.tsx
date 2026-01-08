import { Film, Video, Radio } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MediaImageSlider from "@/components/cards/MediaImageSlider";
import MediaSliderNoVideo from "@/components/cards/MediaSliderNoVideo";
import MediaPlaceholderCard from "@/components/cards/MediaPlaceholderCard";
import FloatingParticles from "@/components/FloatingParticles";
import useScrollFadeIn from "@/hooks/useScrollFadeIn";
import { useLanguage } from "@/hooks/useLanguage";
import media1 from "@/assets/media-1.jpg";
import media2 from "@/assets/media-2.jpg";
import media3 from "@/assets/media-3.jpg";
import media4 from "@/assets/media-4.jpg";
import toolVmix from "@/assets/tool-vmix.jpg";
import toolObs from "@/assets/tool-obs.jpg";
import toolPremiere from "@/assets/tool-premiere.jpg";
import toolAfterEffects from "@/assets/tool-aftereffects.jpg";
import toolCapcut from "@/assets/tool-capcut.jpg";

const MediaPortfolio = () => {
  const { t } = useLanguage();
  
  const mediaSkills = [
    { image: toolVmix, name: "vMix" },
    { image: toolObs, name: "OBS Studio" },
    { image: toolPremiere, name: "Premiere Pro" },
    { image: toolAfterEffects, name: "After Effects" },
    { image: toolCapcut, name: "CapCut" },
  ];

  // Live Streaming - No video, just image slider
  const liveStreamingWork = {
    images: [media1, media2, media3],
    title: "College Live Streaming Profession",
    description: "ผมได้อยู่ในทีมไลฟ์สดของสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง โดยไลฟ์สดตั้งแต่งานกีฬาสถาบันไปจนถึงงานประเพณีและพิธีต่างๆ",
    tools: ["OBS", "vMix", "NDI"],
    category: "Live Streaming",
  };

  // Short Film works with video links
  const shortFilmWorks = [
    {
      images: [media2, media1, media4],
      title: "รางวัลรองชนะเลิศอันดับ 1 - การประกวดสื่อแนวคิดสร้างสรรค์ ยกระดับวันลอยกระทงท้องถิ่นจาก Local สู่เลอค่า ประจำปี 2566",
      description: "ผมรับหน้าที่ดูแลรับผิดชอบการตัดต่อ วันที่ 27 พฤศจิกายน พ.ศ. 2566",
      tools: ["Premiere Pro"],
      category: "Short Film",
      videoUrl: "#",
    },
    {
      images: [media3, media4, media1],
      title: "รางวัลรองชนะเลิศลำดับที่ 2 - การประกวดหนังสั้น \"เยาวชนคนรุ่นใหม่ไร้ความรุนแรงในครอบครัว\"",
      description: "ผมรับหน้าที่ดูแลรับผิดชอบ ภาพ เสียง และตัดต่อ วันที่ 19 ธันวาคม พ.ศ. 2566",
      tools: ["Premiere Pro"],
      category: "Short Film",
      videoUrl: "#",
    },
    {
      images: [media4, media3, media2],
      title: "รางวัลชนะเลิศการประกวดภาพยนตร์สั้น \"มาลัย อยุธยา\" ภายใต้หัวข้อ ประเพณี วัฒนธรรม ภายในจังหวัดพระนครศรีอยุธยา",
      description: "ผมรับหน้าที่ดูแลรับผิดชอบ ภาพ และเสียง วันที่ 4 ตุลาคม พ.ศ. 2566 จากสำนักงานเขตพื้นที่การศึกษาพระนครศรีอยุธยา",
      tools: ["Premiere Pro"],
      category: "Short Film",
      videoUrl: "#",
    },
    {
      images: [media1, media2, media3],
      title: "รางวัลรองชนะเลิศอันดับ 1 ภาพยนตร์สั้น ในหัวข้อ \"ประชาชนในระบอบประชาธิปไตยอันมีพระมหากษัตริย์เป็นประมุข\"",
      description: "ผมรับหน้าที่ดูแลรับผิดชอบ ภาพ เสียง และตัดต่อ วันที่ 15 กรกฎาคม พ.ศ. 2566 จากกองอำนวยการรักษาความมั่นคงภายในจังหวัด",
      tools: ["Premiere Pro"],
      category: "Short Film",
      videoUrl: "#",
    },
  ];

  const sections = [
    {
      title: t("media.create.streaming"),
      description: t("media.create.streaming.desc"),
      icon: Radio,
    },
    {
      title: t("media.create.editing"),
      description: t("media.create.editing.desc"),
      icon: Film,
    },
    {
      title: t("media.create.social"),
      description: t("media.create.social.desc"),
      icon: Video,
    },
  ];

  const heroFade = useScrollFadeIn(0.1);
  const skillsFade = useScrollFadeIn(0.1);
  const createFade = useScrollFadeIn(0.1);
  const worksFade = useScrollFadeIn(0.1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          <FloatingParticles />
        </div>

        <div className="container mx-auto relative z-10">
          <div 
            ref={heroFade.ref}
            className={`max-w-3xl mx-auto text-center space-y-6 transition-all duration-1000 ${
              heroFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
              <Film className="w-4 h-4 text-secondary" />
              <span className="text-sm text-secondary font-medium">{t("media.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {t("media.title")}{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                {t("media.title.highlight")}
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("media.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div 
            ref={skillsFade.ref}
            className={`max-w-4xl mx-auto space-y-8 transition-all duration-1000 ${
              skillsFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl font-bold text-foreground text-center">{t("media.tools")}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {mediaSkills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all duration-300"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={skill.image} 
                      alt={skill.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I Create Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div 
            ref={createFade.ref}
            className={`transition-all duration-1000 ${
              createFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("media.create.title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {sections.map((section, index) => (
                <div
                  key={section.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
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
        </div>
      </section>

      {/* Works Gallery */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div 
            ref={worksFade.ref}
            className={`transition-all duration-1000 ${
              worksFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("media.works.title")}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("media.works.subtitle")}
              </p>
            </div>

            {/* Live Streaming Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Live Streaming</h3>
              <div className="max-w-xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                <MediaSliderNoVideo {...liveStreamingWork} />
              </div>
            </div>

            {/* Short Film Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Short Film</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {shortFilmWorks.map((work, index) => (
                  <div
                    key={work.title}
                    className="opacity-0 animate-fade-in"
                    style={{ animationDelay: `${(index + 1) * 0.15}s`, animationFillMode: "forwards" }}
                  >
                    <MediaImageSlider {...work} />
                  </div>
                ))}
              </div>
            </div>

            {/* Motion Graphic Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Motion Graphic</h3>
              <div className="max-w-xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                <MediaPlaceholderCard title="Motion Graphic" />
              </div>
            </div>

            {/* Short Content Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Short Content</h3>
              <div className="max-w-xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                <MediaPlaceholderCard title="Short Content" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MediaPortfolio;
