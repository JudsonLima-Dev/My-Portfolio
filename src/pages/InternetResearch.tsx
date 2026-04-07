import { Search, Target, Globe, Lightbulb, Clock, BarChart3 } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import ServiceHero from "@/components/landing/ServiceHero";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import ProcessSection from "@/components/landing/ProcessSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CTASection from "@/components/landing/CTASection";
import { ResearchBefore, ResearchAfter } from "@/components/landing/ResearchDemo";

const InternetResearch = () => (
  <>
    <Navbar />
    <ServiceHero
      icon={<Search className="h-4 w-4" />}
      subtitle="Internet Research"
      title="Turn Information Overload Into Actionable Intelligence"
      description="We research, organize, and deliver structured reports so you can make informed decisions faster."
      problemStatement="You need competitive analysis, market data, or vendor comparisons — but sifting through hundreds of sources is overwhelming. Important information gets lost in browser tabs and scattered notes."
    />
    <BeforeAfterSection
      scenario="A startup founder needs to evaluate 20+ SaaS tools for their tech stack. They've spent days browsing websites, reading reviews, and taking random notes — but still can't make a clear comparison."
      beforeItems={[
        "Scattered notes across multiple files",
        "No consistent categorization",
        "Missing key information (pricing, features)",
        "Unverified sources mixed with reliable data",
        "No structured comparison possible",
      ]}
      afterItems={[
        "Structured research table with all tools",
        "Consistent categories and descriptions",
        "Ratings and comparisons included",
        "Verified, reliable sources only",
        "Ready for decision-making",
      ]}
      beforeContent={<ResearchBefore />}
      afterContent={<ResearchAfter />}
    />
    <ProcessSection
      steps={[
        { number: 1, title: "Brief & Scope", description: "We define research objectives, sources, and deliverable format together." },
        { number: 2, title: "Deep Research", description: "Systematic research across verified sources with consistent methodology." },
        { number: 3, title: "Organization", description: "Data is categorized, compared, and structured into clear tables." },
        { number: 4, title: "Report Delivery", description: "Structured report with findings, recommendations, and source links." },
      ]}
    />
    <BenefitsSection
      benefits={[
        { icon: <Target className="h-6 w-6" />, title: "Focused Results", description: "Get exactly the information you need, organized how you want it." },
        { icon: <Globe className="h-6 w-6" />, title: "Verified Sources", description: "Every data point comes from a verified, reliable source." },
        { icon: <Lightbulb className="h-6 w-6" />, title: "Actionable Insights", description: "Research formatted for decision-making, not just data collection." },
      ]}
    />
    <CTASection />
  </>
);

export default InternetResearch;
