import { Github, Linkedin, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/phuwish.prakob/?locale=th_TH", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/pwish___/", label: "Instagram" },
    { icon: MessageCircle, href: "https://line.me/ti/p/U2JoiIq2zp", label: "Line" },
    { icon: Mail, href: "mailto:pphuwish@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/phuwish-prakobchit-573150257/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/phuwishpk", label: "GitHub" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-lg text-foreground">{t("footer.brand")}</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t("footer.quicklinks")}</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/programming" className="text-muted-foreground hover:text-primary transition-colors">Programming Portfolio</a></li>
              <li><a href="/media" className="text-muted-foreground hover:text-primary transition-colors">Media Portfolio</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t("footer.connect")}</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_hsl(198_93%_55%/0.3)]"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              pphuwish@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
