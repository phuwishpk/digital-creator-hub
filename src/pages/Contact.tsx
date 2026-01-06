import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, MessageCircle, Linkedin, Github } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: t("contact.toast.success"),
        description: t("contact.toast.success.desc"),
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: t("contact.toast.error"),
        description: t("contact.toast.error.desc"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.info.email"),
      value: "pphuwish@gmail.com",
      href: "mailto:pphuwish@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.info.phone"),
      value: "+66 123 456 789",
      href: "tel:+66123456789",
    },
    {
      icon: MapPin,
      label: t("contact.info.location"),
      value: "Bangkok, Thailand",
      href: undefined,
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/phuwish.prakob/?locale=th_TH", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/pwish___/", label: "Instagram" },
    { icon: MessageCircle, href: "https://line.me/ti/p/U2JoiIq2zp", label: "Line" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/phuwish-prakobchit-573150257/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/phuwishpk", label: "GitHub" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-primary/50">
              {t("contact.badge")}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
              {t("contact.title")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {t("contact.title.highlight")}
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a href={info.href} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Links */}
              <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-3">{t("contact.info.social")}</p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("contact.form.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">
                        {t("contact.form.name")}
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("contact.form.name.placeholder")}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">
                        {t("contact.form.email")}
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("contact.form.email.placeholder")}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">
                      {t("contact.form.subject")}
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t("contact.form.subject.placeholder")}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">
                      {t("contact.form.message")}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("contact.form.message.placeholder")}
                      required
                      rows={5}
                      className="bg-background/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      t("contact.form.sending")
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t("contact.form.submit")}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
