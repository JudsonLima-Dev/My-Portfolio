import { PenTool, Sparkles, MessageSquare, Target } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import ServiceHero from "@/components/landing/ServiceHero";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import ProcessSection from "@/components/landing/ProcessSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CTASection from "@/components/landing/CTASection";
import { ContentBefore, ContentAfter } from "@/components/landing/ContentDemo";
import { useLanguage } from "@/i18n/LanguageContext";

const ContentCreation = () => {
  const { t } = useLanguage();
  const d = t.content;
  return (
    <>
      <Navbar />
      <ServiceHero
        icon={<PenTool className="h-4 w-4" />}
        subtitle={d.subtitle}
        title={d.title}
        description={d.description}
        problemStatement={d.problem}
      />
      <BeforeAfterSection
        scenario={d.scenario}
        beforeItems={[...d.beforeItems]}
        afterItems={[...d.afterItems]}
        beforeContent={<ContentBefore />}
        afterContent={<ContentAfter />}
      />
      <ProcessSection
        steps={d.steps.map((s, i) => ({ number: i + 1, title: s.title, description: s.description }))}
      />
      <BenefitsSection
        benefits={d.benefits.map((b, i) => ({
          icon: [<Sparkles className="h-6 w-6" />, <MessageSquare className="h-6 w-6" />, <Target className="h-6 w-6" />][i],
          title: b.title,
          description: b.description,
        }))}
      />
      <CTASection />
    </>
  );
};

export default ContentCreation;
