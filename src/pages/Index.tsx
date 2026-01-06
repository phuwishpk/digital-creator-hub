import { Link } from "react-router-dom";
import { ArrowRight, Code2, Film, Radio, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const skills = [
    {
      icon: Code2,
      title: "Programming",
      description: "Web development with React, JavaScript, and modern frameworks",
      color: "primary",
    },
    {
      icon: Film,
      title: "Media Production",
      description: "Video editing, motion graphics, and visual content creation",
      color: "secondary",
    },
    {
      icon: Radio,
      title: "Live Streaming",
      description: "Professional broadcast production with vMix and OBS",
      color: "accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Open for Opportunities</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Hi, I'm a{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Junior Programmer
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
              & Digital Media Creator
            </p>

            {/* Tagline */}
            <div className="flex items-center justify-center gap-4 text-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <span className="text-primary font-mono">{"<Code />"}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-secondary font-medium">Live Streaming</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-accent font-medium">Video Production</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Link to="/programming">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_hsl(198_93%_55%/0.3)] hover:shadow-[0_0_40px_hsl(198_93%_55%/0.4)] transition-all duration-300">
                  <Code2 className="w-5 h-5 mr-2" />
                  View Programming Portfolio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/media">
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                  <Film className="w-5 h-5 mr-2" />
                  View Media Portfolio
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
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Junior Programmer with a unique blend of technical programming skills and creative media production expertise. 
              My background spans web development, video editing, motion graphics, and live streaming production. 
              I bring a creative perspective to technical challenges and technical precision to creative projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm eager to contribute to innovative teams and take on projects that challenge me to grow while delivering impactful results.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What I Do
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combining technical expertise with creative vision to deliver comprehensive digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className={`group relative p-8 rounded-2xl bg-card border border-border transition-all duration-500 hover:border-${skill.color}/50 hover:shadow-[0_0_30px_hsl(198_93%_55%/0.1)]`}
                style={{ animationDelay: `${index * 0.1}s` }}
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
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Explore My Work?
            </h2>
            <p className="text-lg text-muted-foreground">
              Check out my programming projects or media production portfolio
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/programming">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Code2 className="w-5 h-5 mr-2" />
                  Programming Portfolio
                </Button>
              </Link>
              <Link to="/media">
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  <Film className="w-5 h-5 mr-2" />
                  Media Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
