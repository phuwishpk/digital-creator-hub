import { Link } from "react-router-dom";
import { ArrowRight, Code2, Film, Radio, Sparkles, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import useScrollFadeIn from "@/hooks/useScrollFadeIn";
import { useLanguage } from "@/hooks/useLanguage";
import profileImage from "@/assets/profile.jpg";

const Index = () => {
  const { t } = useLanguage();
  const aboutFade = useScrollFadeIn(0.1);
  const skillsFade = useScrollFadeIn(0.1);
  const ctaFade = useScrollFadeIn(0.1);

  const skills = [
    {
      icon: Code2,
      title: t("home.skills.programming"),
      description: t("home.skills.programming.desc"),
      color: "primary",
    },
    {
      icon: Film,
      title: t("home.skills.media"),
      description: t("home.skills.media.desc"),
      color: "secondary",
    },
    {
      icon: Radio,
      title: t("home.skills.streaming"),
      description: t("home.skills.streaming.desc"),
      color: "accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          <FloatingParticles />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background">
                  <img
                    src={profileImage}
                    alt="Phuwish Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">{t("home.badge")}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              {t("home.title")}{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {t("home.title.highlight")}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              {t("home.subtitle")}
            </p>

            {/* Tagline */}
            <div className="flex items-center justify-center gap-4 text-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <span className="text-primary font-mono">{t("home.tagline.code")}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-secondary font-medium">{t("home.tagline.streaming")}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-accent font-medium">{t("home.tagline.video")}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in flex-wrap" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <Link to="/programming">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_hsl(198_93%_55%/0.3)] hover:shadow-[0_0_40px_hsl(198_93%_55%/0.4)] transition-all duration-300">
                  <Code2 className="w-5 h-5 mr-2" />
                  {t("home.cta.programming")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/media">
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                  <Film className="w-5 h-5 mr-2" />
                  {t("home.cta.media")}
                </Button>
              </Link>
              <Link to="/activity">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                  <Trophy className="w-5 h-5 mr-2" />
                  {t("home.cta.btn.activity")}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div 
            ref={aboutFade.ref}
            className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${
              aboutFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("home.about.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("home.about.p1")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("home.about.p2")}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div 
            ref={skillsFade.ref}
            className={`transition-all duration-1000 ${
              skillsFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("home.skills.title")}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("home.skills.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className={`group relative p-8 rounded-2xl bg-card border border-border transition-all duration-500 hover:border-${skill.color}/50 hover:shadow-[0_0_30px_hsl(198_93%_55%/0.1)] opacity-0 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-${skill.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className={`w-7 h-7 text-${skill.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Index;
