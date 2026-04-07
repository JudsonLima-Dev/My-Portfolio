import { Link } from "react-router-dom";
import { Database, Search, PenTool, Mail, ListChecks, ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  const services = [
    { to: "/data-entry", icon: <Database className="h-8 w-8" />, ...t.index.services.dataEntry, color: "bg-accent text-accent-foreground" },
    { to: "/research", icon: <Search className="h-8 w-8" />, ...t.index.services.research, color: "bg-secondary/10 text-secondary" },
    { to: "/content", icon: <PenTool className="h-8 w-8" />, ...t.index.services.content, color: "bg-accent text-accent-foreground" },
    { to: "/email-support", icon: <Mail className="h-8 w-8" />, ...t.index.services.email, color: "bg-secondary/10 text-secondary" },
    { to: "/virtual-assistance", icon: <ListChecks className="h-8 w-8" />, ...t.index.services.va, color: "bg-accent text-accent-foreground" },
  ];

  return (
    <>
      <Navbar />
      <section className="gradient-hero text-primary-foreground py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">{t.index.heroTitle}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {t.index.heroDescription}
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">{t.index.servicesLabel}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">{t.index.servicesTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.to} to={s.to} className="bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-all group">
                <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center mb-5`}>{s.icon}</div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-secondary group-hover:gap-2 transition-all">
                  {t.index.seeDemo} <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 gradient-hero text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.index.ctaTitle}</h2>
          <p className="text-lg opacity-90 mb-8">{t.index.ctaDescription}</p>
        </div>
      </section>
    </>
  );
};

export default Index;
