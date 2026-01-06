import { Code2, Database, GitBranch, Globe, Smartphone, Server, Terminal, Layers, Cpu, FileCode } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/cards/ProjectCard";
import SkillBadge from "@/components/cards/SkillBadge";
import useScrollFadeIn from "@/hooks/useScrollFadeIn";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const ProgrammingPortfolio = () => {
  const coreSkills = [
    { icon: Globe, name: "HTML" },
    { icon: FileCode, name: "CSS" },
    { icon: Terminal, name: "JavaScript" },
    { icon: Layers, name: "React" },
    { icon: Database, name: "SQL" },
    { icon: Cpu, name: "C" },
  ];

  const additionalSkills = [
    { icon: Terminal, name: "Python" },
    { icon: Code2, name: "Java" },
    { icon: GitBranch, name: "Git & GitHub" },
    { icon: Server, name: "API & JSON" },
    { icon: Smartphone, name: "Responsive Design" },
    { icon: Layers, name: "Data Structures" },
  ];

  const projects = [
    {
      image: project1,
      title: "Analytics Dashboard",
      description: "A modern data visualization dashboard with real-time charts, user analytics, and interactive reports for business intelligence.",
      technologies: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      image: project2,
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with product catalog, cart functionality, and secure checkout process.",
      technologies: ["React", "JavaScript", "SQL", "REST API"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      image: project3,
      title: "Task Management App",
      description: "Mobile-first task organizer with drag-and-drop functionality, priority levels, and deadline reminders.",
      technologies: ["React", "CSS", "LocalStorage", "PWA"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      image: project4,
      title: "Weather Application",
      description: "Real-time weather app featuring location detection, 7-day forecasts, and beautiful weather animations.",
      technologies: ["JavaScript", "API", "HTML", "CSS"],
      githubUrl: "#",
      demoUrl: "#",
    },
  ];

  const heroFade = useScrollFadeIn(0.1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div 
            ref={heroFade.ref}
            className={`max-w-3xl mx-auto text-center space-y-6 transition-all duration-1000 ${
              heroFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Programming Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Code That{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Makes a Difference
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore my programming projects and the technologies I work with
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Core Skills */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground text-center">Core Technologies</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {coreSkills.map((skill) => (
                  <SkillBadge key={skill.name} icon={skill.icon} name={skill.name} variant="primary" />
                ))}
              </div>
            </div>

            {/* Additional Skills */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground text-center">Additional Knowledge</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {additionalSkills.map((skill) => (
                  <SkillBadge key={skill.name} icon={skill.icon} name={skill.name} variant="secondary" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my programming work showcasing various technologies and problem-solving approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgrammingPortfolio;
