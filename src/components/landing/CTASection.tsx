import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const UPWORK_URL = "https://www.upwork.com/freelancers/~011e9a98adcc5dc2b3?mp_source=share";

const CTASection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-6 gradient-hero text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.shared.ctaTitle}</h2>
        <p className="text-lg opacity-90 mb-8">{t.shared.ctaDescription}</p>
        <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="gradient-cta text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-xl hover:opacity-90 hover:scale-105 transition-all shadow-elevated">
            {t.shared.contactUs} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
