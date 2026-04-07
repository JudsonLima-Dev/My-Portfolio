import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceHeroProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  problemStatement: string;
}

const ServiceHero = ({ icon, title, subtitle, description, problemStatement }: ServiceHeroProps) => (
  <section className="gradient-hero text-primary-foreground py-20 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
        {icon}
        <span className="text-sm font-medium">{subtitle}</span>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up leading-tight">
        {title}
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        {description}
      </p>
      <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <p className="text-sm font-semibold uppercase tracking-wider mb-2 opacity-70">The Problem</p>
        <p className="text-base opacity-90">{problemStatement}</p>
      </div>
      <Button
        size="lg"
        className="mt-8 gradient-cta text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-xl hover:opacity-90 transition-opacity animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        Get Started <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  </section>
);

export default ServiceHero;
