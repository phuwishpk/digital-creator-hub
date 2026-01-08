import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "th";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.programming": "Programming",
    "nav.media": "Media",
    "nav.activity": "Activity",
    "nav.contact": "Contact",
    
    // Home Page
    "home.badge": "Open for Opportunities",
    "home.title": "Hi, My name is",
    "home.title.highlight": "Phuwish Prakobchit",
    "home.subtitle": "Junior Programmer and Media Creator",
    "home.tagline.code": "<Code />",
    "home.tagline.streaming": "Live Streaming",
    "home.tagline.video": "Video Production",
    "home.cta.programming": "View Programming Portfolio",
    "home.cta.media": "View Media Portfolio",
    "home.about.title": "About Me",
    "home.about.p1": "I'm a passionate Junior Programmer with a unique blend of technical programming skills and creative media production expertise. My background spans web development, video editing, motion graphics, and live streaming production. I bring a creative perspective to technical challenges and technical precision to creative projects.",
    "home.about.p2": "I'm eager to contribute to innovative teams and take on projects that challenge me to grow while delivering impactful results.",
    "home.skills.title": "What I Do",
    "home.skills.subtitle": "Combining technical expertise with creative vision to deliver comprehensive digital solutions",
    "home.skills.programming": "Programming",
    "home.skills.programming.desc": "Web development with React, JavaScript, and modern frameworks",
    "home.skills.media": "Media Production",
    "home.skills.media.desc": "Video editing, motion graphics, and visual content creation",
    "home.skills.streaming": "Live Streaming",
    "home.skills.streaming.desc": "Professional broadcast production with vMix and OBS",
    "home.cta.title": "Ready to Explore My Work?",
    "home.cta.subtitle": "Check out my programming projects or media production portfolio",
    "home.cta.btn.programming": "Programming Portfolio",
    "home.cta.btn.media": "Media Portfolio",
    "home.cta.btn.activity": "Activity Portfolio",
    
    // Programming Page
    "programming.badge": "Programming Portfolio",
    "programming.title": "Code That",
    "programming.title.highlight": "Makes a Difference",
    "programming.subtitle": "Explore my programming projects and the technologies I work with",
    "programming.core": "Core Technologies",
    "programming.additional": "Additional Knowledge",
    "programming.projects.title": "Featured Projects",
    "programming.projects.subtitle": "A selection of my programming work showcasing various technologies and problem-solving approaches",
    
    // Media Page
    "media.badge": "Media Portfolio",
    "media.title": "Creating",
    "media.title.highlight": "Visual Stories",
    "media.subtitle": "Explore my media production works spanning live streaming, video editing, and motion graphics",
    "media.tools": "Production Tools",
    "media.create.title": "What I Create",
    "media.create.streaming": "Live Streaming Works",
    "media.create.streaming.desc": "Professional broadcast production including scene switching, custom overlays, audio control, and multi-platform streaming.",
    "media.create.editing": "Video Editing Works",
    "media.create.editing.desc": "From raw footage to polished final cuts - color grading, sound design, and storytelling through editing.",
    "media.create.social": "Social Media Content",
    "media.create.social.desc": "Trendy, engaging short-form content optimized for platforms like TikTok, Instagram Reels, and YouTube Shorts.",
    "media.works.title": "Featured Works",
    "media.works.subtitle": "A showcase of my media production projects across different formats and platforms",
    
    // Activity Page
    "activity.badge": "Activity Portfolio",
    "activity.title": "Beyond",
    "activity.title.highlight": "Coding & Media",
    "activity.subtitle": "Explore my extracurricular activities, competitions, and community involvement",
    "activity.areas": "Areas of Involvement",
    "activity.cat.hackathon": "Competition & Hackathon",
    "activity.cat.hackathon.desc": "Participated in coding competitions and hackathons to challenge and improve my skills.",
    "activity.cat.volunteer": "Volunteer & Community",
    "activity.cat.volunteer.desc": "Contributing to community through volunteer work, teaching, and knowledge sharing.",
    "activity.cat.workshop": "Workshop & Conference",
    "activity.cat.workshop.desc": "Attending and presenting at workshops and tech conferences to learn and network.",
    "activity.cat.sports": "Sports & Team Activities",
    "activity.cat.sports.desc": "Engaging in sports and team-building activities for personal development.",
    "activity.featured.title": "Featured Activities",
    "activity.featured.subtitle": "Highlights from my participation in various events and activities",
    
    // Contact Page
    "contact.badge": "Contact Me",
    "contact.title": "Get In",
    "contact.title.highlight": "Touch",
    "contact.subtitle": "Have a question or want to work together? Feel free to reach out!",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.location": "Location",
    "contact.info.social": "Social Media",
    "contact.form.title": "Send Me a Message",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.subject": "Subject",
    "contact.form.subject.placeholder": "What's this about?",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Your message...",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.toast.success": "Message Sent!",
    "contact.toast.success.desc": "Thank you for reaching out. I'll get back to you soon!",
    "contact.toast.error": "Failed to Send",
    "contact.toast.error.desc": "Something went wrong. Please try again later.",
    
    // Footer
    "footer.brand": "Phuwish Portfolio",
    "footer.description": "Junior Programmer & Digital Media Creator passionate about building innovative solutions and creating engaging content.",
    "footer.quicklinks": "Quick Links",
    "footer.connect": "Connect",
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with React & Tailwind CSS",
  },
  th: {
    // Navbar
    "nav.home": "หน้าหลัก",
    "nav.programming": "โปรแกรมมิ่ง",
    "nav.media": "มีเดีย",
    "nav.activity": "กิจกรรม",
    "nav.contact": "ติดต่อ",
    
    // Home Page
    "home.badge": "พร้อมรับโอกาสใหม่",
    "home.title": "สวัสดี ผมชื่อ",
    "home.title.highlight": "ภูวิช ประกอบจิตร",
    "home.subtitle": "Junior Programmer and Media Creator",
    "home.tagline.code": "<Code />",
    "home.tagline.streaming": "ไลฟ์สตรีมมิ่ง",
    "home.tagline.video": "ตัดต่อวิดีโอ",
    "home.cta.programming": "ดูผลงาน Programming",
    "home.cta.media": "ดูผลงาน Media",
    "home.about.title": "เกี่ยวกับผม",
    "home.about.p1": "ผมเป็น Junior Programmer ที่มีความหลงใหลในการเขียนโปรแกรม พร้อมกับทักษะด้านการผลิตสื่อดิจิทัล ประสบการณ์ของผมครอบคลุมการพัฒนาเว็บ ตัดต่อวิดีโอ โมชันกราฟิก และการผลิตไลฟ์สตรีมมิ่ง ผมนำมุมมองสร้างสรรค์มาใช้กับงานเทคนิค และความแม่นยำทางเทคนิคมาใช้กับงานสร้างสรรค์",
    "home.about.p2": "ผมพร้อมที่จะมีส่วนร่วมกับทีมที่มีนวัตกรรมและรับโปรเจกต์ที่ท้าทายเพื่อพัฒนาตัวเองพร้อมส่งมอบผลลัพธ์ที่มีคุณค่า",
    "home.skills.title": "สิ่งที่ผมทำ",
    "home.skills.subtitle": "ผสมผสานความเชี่ยวชาญทางเทคนิคกับวิสัยทัศน์สร้างสรรค์เพื่อส่งมอบโซลูชันดิจิทัลที่ครบวงจร",
    "home.skills.programming": "โปรแกรมมิ่ง",
    "home.skills.programming.desc": "พัฒนาเว็บด้วย React, JavaScript และเฟรมเวิร์กสมัยใหม่",
    "home.skills.media": "ผลิตสื่อ",
    "home.skills.media.desc": "ตัดต่อวิดีโอ โมชันกราฟิก และสร้างสรรค์เนื้อหาภาพ",
    "home.skills.streaming": "ไลฟ์สตรีมมิ่ง",
    "home.skills.streaming.desc": "ผลิตรายการถ่ายทอดสดมืออาชีพด้วย vMix และ OBS",
    "home.cta.title": "พร้อมสำรวจผลงานของผมหรือยัง?",
    "home.cta.subtitle": "ดูโปรเจกต์โปรแกรมมิ่งหรือผลงานด้านสื่อของผม",
    "home.cta.btn.programming": "ผลงาน Programming",
    "home.cta.btn.media": "ผลงาน Media",
    "home.cta.btn.activity": "ผลงานกิจกรรม",
    
    // Programming Page
    "programming.badge": "ผลงาน Programming",
    "programming.title": "โค้ดที่",
    "programming.title.highlight": "สร้างความแตกต่าง",
    "programming.subtitle": "สำรวจโปรเจกต์โปรแกรมมิ่งและเทคโนโลยีที่ผมใช้งาน",
    "programming.core": "เทคโนโลยีหลัก",
    "programming.additional": "ความรู้เพิ่มเติม",
    "programming.projects.title": "โปรเจกต์เด่น",
    "programming.projects.subtitle": "ผลงานโปรแกรมมิ่งที่คัดสรรมาแสดงเทคโนโลยีและแนวทางแก้ปัญหาที่หลากหลาย",
    
    // Media Page
    "media.badge": "ผลงาน Media",
    "media.title": "สร้างสรรค์",
    "media.title.highlight": "เรื่องราวผ่านภาพ",
    "media.subtitle": "สำรวจผลงานด้านสื่อที่ครอบคลุมไลฟ์สตรีมมิ่ง ตัดต่อวิดีโอ และโมชันกราฟิก",
    "media.tools": "เครื่องมือที่ใช้",
    "media.create.title": "สิ่งที่ผมสร้าง",
    "media.create.streaming": "งานไลฟ์สตรีมมิ่ง",
    "media.create.streaming.desc": "ผลิตรายการถ่ายทอดสดมืออาชีพ รวมถึงการสลับฉาก โอเวอร์เลย์ ควบคุมเสียง และสตรีมหลายแพลตฟอร์ม",
    "media.create.editing": "งานตัดต่อวิดีโอ",
    "media.create.editing.desc": "จากฟุตเทจดิบสู่ผลงานสำเร็จ - การปรับสี การออกแบบเสียง และการเล่าเรื่องผ่านการตัดต่อ",
    "media.create.social": "คอนเทนต์โซเชียลมีเดีย",
    "media.create.social.desc": "วิดีโอสั้นที่น่าสนใจ ปรับแต่งสำหรับ TikTok, Instagram Reels และ YouTube Shorts",
    "media.works.title": "ผลงานเด่น",
    "media.works.subtitle": "รวบรวมผลงานด้านสื่อในรูปแบบและแพลตฟอร์มที่หลากหลาย",
    
    // Activity Page
    "activity.badge": "ผลงานกิจกรรม",
    "activity.title": "มากกว่า",
    "activity.title.highlight": "โค้ดและมีเดีย",
    "activity.subtitle": "สำรวจกิจกรรมนอกหลักสูตร การแข่งขัน และการมีส่วนร่วมในชุมชน",
    "activity.areas": "ด้านที่มีส่วนร่วม",
    "activity.cat.hackathon": "การแข่งขันและ Hackathon",
    "activity.cat.hackathon.desc": "เข้าร่วมการแข่งขันเขียนโค้ดและ Hackathon เพื่อท้าทายและพัฒนาทักษะ",
    "activity.cat.volunteer": "อาสาสมัครและชุมชน",
    "activity.cat.volunteer.desc": "มีส่วนร่วมในชุมชนผ่านงานอาสา การสอน และการแบ่งปันความรู้",
    "activity.cat.workshop": "เวิร์กช็อปและการประชุม",
    "activity.cat.workshop.desc": "เข้าร่วมและนำเสนอในเวิร์กช็อปและการประชุมเทคโนโลยีเพื่อเรียนรู้และสร้างเครือข่าย",
    "activity.cat.sports": "กีฬาและกิจกรรมทีม",
    "activity.cat.sports.desc": "มีส่วนร่วมในกีฬาและกิจกรรมสร้างทีมเพื่อพัฒนาตนเอง",
    "activity.featured.title": "กิจกรรมเด่น",
    "activity.featured.subtitle": "ไฮไลท์จากการเข้าร่วมกิจกรรมและอีเวนต์ต่างๆ",
    
    // Contact Page
    "contact.badge": "ติดต่อผม",
    "contact.title": "ติดต่อ",
    "contact.title.highlight": "ได้เลย",
    "contact.subtitle": "มีคำถามหรืออยากทำงานร่วมกัน? ติดต่อผมได้เลย!",
    "contact.info.email": "อีเมล",
    "contact.info.phone": "เบอร์โทร",
    "contact.info.location": "ที่อยู่",
    "contact.info.social": "โซเชียลมีเดีย",
    "contact.form.title": "ส่งข้อความถึงผม",
    "contact.form.name": "ชื่อ",
    "contact.form.name.placeholder": "ชื่อของคุณ",
    "contact.form.email": "อีเมล",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.subject": "หัวข้อ",
    "contact.form.subject.placeholder": "เรื่องอะไร?",
    "contact.form.message": "ข้อความ",
    "contact.form.message.placeholder": "ข้อความของคุณ...",
    "contact.form.submit": "ส่งข้อความ",
    "contact.form.sending": "กำลังส่ง...",
    "contact.toast.success": "ส่งข้อความแล้ว!",
    "contact.toast.success.desc": "ขอบคุณที่ติดต่อมา ผมจะตอบกลับโดยเร็วที่สุด!",
    "contact.toast.error": "ส่งไม่สำเร็จ",
    "contact.toast.error.desc": "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
    
    // Footer
    "footer.brand": "Phuwish Portfolio",
    "footer.description": "Junior Programmer & ผู้สร้างสรรค์สื่อดิจิทัล ที่หลงใหลในการสร้างโซลูชันนวัตกรรมและคอนเทนต์ที่น่าสนใจ",
    "footer.quicklinks": "ลิงก์ด่วน",
    "footer.connect": "ติดต่อ",
    "footer.rights": "สงวนลิขสิทธิ์",
    "footer.built": "สร้างด้วย React & Tailwind CSS",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};