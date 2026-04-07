import { useLanguage } from "@/i18n/LanguageContext";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitsSection = ({ benefits }: { benefits: Benefit[] }) => {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">{t.shared.whyChooseUs}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">{t.shared.keyBenefits}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="bg-card rounded-xl p-8 shadow-card text-center hover:shadow-elevated transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4 text-accent-foreground">
                {b.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
