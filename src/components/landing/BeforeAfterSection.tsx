import { X, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface BeforeAfterProps {
  scenario: string;
  beforeItems: string[];
  afterItems: string[];
  beforeContent: React.ReactNode;
  afterContent: React.ReactNode;
}

const BeforeAfterSection = ({
  scenario,
  beforeItems,
  afterItems,
  beforeContent,
  afterContent,
}: BeforeAfterProps) => {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">{t.shared.visualProof}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">{t.shared.seeTransformation}</h2>
        </div>
        <div className="bg-muted rounded-xl p-5 max-w-2xl mx-auto mb-12 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">{t.shared.scenario}</p>
          <p className="text-foreground">{scenario}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-card border-2 border-before-accent/30">
            <div className="bg-before px-6 py-4 flex items-center gap-2 border-b border-before-accent/20">
              <X className="h-5 w-5 text-before-accent" />
              <h3 className="text-lg font-bold text-before-accent">{t.shared.before}</h3>
            </div>
            <div className="p-6 bg-card">
              <ul className="space-y-3 mb-6">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-before-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-xl overflow-hidden border border-border">{beforeContent}</div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-card border-2 border-after-accent/30">
            <div className="bg-after px-6 py-4 flex items-center gap-2 border-b border-after-accent/20">
              <Check className="h-5 w-5 text-after-accent" />
              <h3 className="text-lg font-bold text-after-accent">{t.shared.after}</h3>
            </div>
            <div className="p-6 bg-card">
              <ul className="space-y-3 mb-6">
                {afterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-after-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-xl overflow-hidden border border-after-accent/30">{afterContent}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
