import { Trophy, Users, Award, Target } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ActivityCard from "@/components/cards/ActivityCard";
import FloatingParticles from "@/components/FloatingParticles";
import useScrollFadeIn from "@/hooks/useScrollFadeIn";
import { useLanguage } from "@/hooks/useLanguage";
import activity1 from "@/assets/activity-1.jpg";
import activity2 from "@/assets/activity-2.jpg";
import activity3 from "@/assets/activity-3.jpg";
import activity4 from "@/assets/activity-4.jpg";

const ActivityPortfolio = () => {
  const { t } = useLanguage();
  
  const categories = [
    {
      title: t("activity.cat.hackathon"),
      description: t("activity.cat.hackathon.desc"),
      icon: Trophy,
    },
    {
      title: t("activity.cat.volunteer"),
      description: t("activity.cat.volunteer.desc"),
      icon: Users,
    },
    {
      title: t("activity.cat.workshop"),
      description: t("activity.cat.workshop.desc"),
      icon: Award,
    },
    {
      title: t("activity.cat.sports"),
      description: t("activity.cat.sports.desc"),
      icon: Target,
    },
  ];

  const activities = [
    {
      images: [activity1, activity2],
      title: "Coding Hackathon 2024",
      description: "Participated in a 48-hour hackathon developing innovative solutions for smart city challenges.",
      date: "2024",
      location: "Bangkok",
      category: "Hackathon",
    },
    {
      images: [activity2, activity3],
      title: "Student Volunteer Program",
      description: "Volunteered to teach basic programming concepts to high school students in community outreach program.",
      date: "2024",
      location: "Community Center",
      category: "Volunteer",
    },
    {
      images: [activity3, activity1],
      title: "Tech Conference 2024",
      description: "Attended major technology conference learning about latest trends in web development and AI.",
      date: "2024",
      location: "Convention Center",
      category: "Conference",
    },
    {
      images: [activity4, activity2],
      title: "University Sports Day",
      description: "Participated in university sports competition, promoting teamwork and physical fitness.",
      date: "2024",
      location: "University",
      category: "Sports",
    },
  ];

  const heroFade = useScrollFadeIn(0.1);
  const categoriesFade = useScrollFadeIn(0.1);
  const activitiesFade = useScrollFadeIn(0.1);

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Trophy className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">{t("activity.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {t("activity.title")}{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                {t("activity.title.highlight")}
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("activity.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div 
            ref={categoriesFade.ref}
            className={`transition-all duration-1000 ${
              categoriesFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground">{t("activity.areas")}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {categories.map((category, index) => (
                <div
                  key={category.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Gallery */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div 
            ref={activitiesFade.ref}
            className={`transition-all duration-1000 ${
              activitiesFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("activity.featured.title")}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("activity.featured.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {activities.map((activity, index) => (
                <div
                  key={activity.title}
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
                >
                  <ActivityCard {...activity} />
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

export default ActivityPortfolio;
