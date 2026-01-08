import { Code2, Database, GitBranch, Globe, Smartphone, Server, Terminal, Layers, Cpu, FileCode } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/cards/ProjectCard";
import SkillBadge from "@/components/cards/SkillBadge";
import FloatingParticles from "@/components/FloatingParticles";
import useScrollFadeIn from "@/hooks/useScrollFadeIn";
import { useLanguage } from "@/hooks/useLanguage";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProgrammingPortfolio = () => {
  const { t } = useLanguage();
  
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
      title: "FindDormitoryKMITL",
      description: "เว็บแอปพลิเคชันค้นหาและประกาศหอพักบริเวณ KMITL รองรับ 3 กลุ่มผู้ใช้: นักศึกษา (ค้นหา/กรองข้อมูล), เจ้าของหอพัก (ลงประกาศ/จัดการห้องพัก), และ Admin (อนุมัติประกาศ)",
      technologies: ["Python", "Flask", "HTML", "JavaScript", "CSS", "PostgreSQL"],
      githubUrl: "#",
    },
    {
      image: project2,
      title: "BrainTumorProject",
      description: "ซอฟต์แวร์ช่วยแพทย์วินิจฉัยเนื้องอกในสมองจาก CT/MRI Scan ลดเวลาการดูฟิล์มหลายแผ่น พร้อม AI Chatbot อ้างอิงข้อมูลจาก WHO",
      technologies: ["Docker", "REST API", "React", "JavaScript", "SQL"],
      githubUrl: "#",
    },
    {
      image: project3,
      title: "ClickRobRegistration",
      description: "ระบบลงทะเบียนเรียนสำหรับสถาบัน ClickRobot ใช้งานจริง สำหรับผู้ปกครองกรอกข้อมูลเด็ก เก็บข้อมูลเข้า Google Sheet โดยตรง",
      technologies: ["AppScript", "Firebase", "HTML", "CSS", "JavaScript"],
      githubUrl: "#",
    },
  ];

  const heroFade = useScrollFadeIn(0.1);
  const skillsFade = useScrollFadeIn(0.1);
  const projectsFade = useScrollFadeIn(0.1);

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">{t("programming.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {t("programming.title")}{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t("programming.title.highlight")}
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("programming.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div 
            ref={skillsFade.ref}
            className={`max-w-5xl mx-auto space-y-12 transition-all duration-1000 ${
              skillsFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Core Skills */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground text-center">{t("programming.core")}</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {coreSkills.map((skill) => (
                  <SkillBadge key={skill.name} icon={skill.icon} name={skill.name} variant="primary" />
                ))}
              </div>
            </div>

            {/* Additional Skills */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground text-center">{t("programming.additional")}</h2>
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
          <div 
            ref={projectsFade.ref}
            className={`transition-all duration-1000 ${
              projectsFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("programming.projects.title")}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("programming.projects.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
                >
                  <ProjectCard {...project} />
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

export default ProgrammingPortfolio;
