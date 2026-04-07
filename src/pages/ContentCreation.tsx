import { PenTool, Sparkles, MessageSquare, FileText, Zap, Target } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import ServiceHero from "@/components/landing/ServiceHero";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import ProcessSection from "@/components/landing/ProcessSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CTASection from "@/components/landing/CTASection";
import { ContentBefore, ContentAfter } from "@/components/landing/ContentDemo";

const ContentCreation = () => (
  <>
    <Navbar />
    <ServiceHero
      icon={<PenTool className="h-4 w-4" />}
      subtitle="Content Creation & AI Rewriting"
      title="Transform Your Words Into Powerful Messages"
      description="We use AI-powered tools to rewrite, enhance, and adapt your content for maximum impact across every channel."
      problemStatement="Your drafts are good, but they lack polish. You need professional-grade copy for your website, emails, and social media — but hiring a copywriter for every piece is expensive and slow."
    />
    <BeforeAfterSection
      scenario="A SaaS company has a generic product description on their website. It's informational but doesn't convert visitors. They need multiple versions optimized for different audiences and tones."
      beforeItems={[
        "Vague, generic language",
        "No clear value proposition",
        "Missing emotional hooks",
        "One-size-fits-all tone",
        "No call to action",
      ]}
      afterItems={[
        "Multiple tone variations available",
        "Clear, specific value propositions",
        "Emotional and persuasive hooks",
        "Tailored for different audiences",
        "Strong calls to action included",
      ]}
      beforeContent={<ContentBefore />}
      afterContent={<ContentAfter />}
    />
    <ProcessSection
      steps={[
        { number: 1, title: "Content Review", description: "We analyze your existing content, brand voice, and target audience." },
        { number: 2, title: "AI Enhancement", description: "Using advanced AI tools, we generate multiple optimized versions." },
        { number: 3, title: "Tone Matching", description: "Each version is tailored to a specific tone: formal, persuasive, or simplified." },
        { number: 4, title: "Final Polish", description: "Human review ensures quality, brand consistency, and impact." },
      ]}
    />
    <BenefitsSection
      benefits={[
        { icon: <Sparkles className="h-6 w-6" />, title: "AI-Powered Quality", description: "Leverage cutting-edge AI to produce professional copy in minutes, not days." },
        { icon: <MessageSquare className="h-6 w-6" />, title: "Multiple Versions", description: "Get 3+ tone variations for every piece — formal, casual, persuasive." },
        { icon: <Target className="h-6 w-6" />, title: "Conversion-Focused", description: "Every word is optimized to engage your audience and drive action." },
      ]}
    />
    <CTASection />
  </>
);

export default ContentCreation;
