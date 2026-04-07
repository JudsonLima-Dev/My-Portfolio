import { Link } from "react-router-dom";
import { ArrowRight, Database, Search, PenTool, Mail, ListChecks, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import { useLanguage } from "@/i18n/LanguageContext";

const UPWORK_URL = "https://www.upwork.com/freelancers/~011e9a98adcc5dc2b3?mp_source=share";

const skillIcons = [
  <Database className="h-5 w-5" />,
  <Search className="h-5 w-5" />,
  <PenTool className="h-5 w-5" />,
  <Mail className="h-5 w-5" />,
  <ListChecks className="h-5 w-5" />,
];

const About = () => {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <>
      <Navbar />
      <section className="gradient-hero text-primary-foreground py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">{about.badge}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
            {about.title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {about.intro}
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-foreground mb-8 leading-relaxed">{about.description}</p>

          <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
            <h2 className="text-xl font-bold text-foreground mb-6">{about.whatICanHelp}</h2>
            <div className="space-y-4">
              {about.skills.map((skill: string, i: number) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-accent/50 hover:bg-accent transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-accent-foreground shrink-0">
                    {skillIcons[i]}
                  </div>
                  <span className="text-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-muted">
              <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
              <p className="text-foreground">{about.aiNote}</p>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-muted">
              <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
              <p className="text-foreground">{about.traits}</p>
            </div>
          </div>

          <div className="bg-accent/30 rounded-2xl p-8 text-center mb-10">
            <p className="text-lg text-foreground italic">{about.closing}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gradient-cta text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-xl hover:opacity-90 hover:scale-105 transition-all shadow-elevated w-full sm:w-auto">
                {about.hireMe} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link to="/">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl font-semibold w-full sm:w-auto">
                {about.viewServices}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
