import { Mail, Inbox, Shield, Clock, Zap, Users } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import ServiceHero from "@/components/landing/ServiceHero";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import ProcessSection from "@/components/landing/ProcessSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CTASection from "@/components/landing/CTASection";
import { EmailBefore, EmailAfter } from "@/components/landing/EmailDemo";

const EmailSupport = () => (
  <>
    <Navbar />
    <ServiceHero
      icon={<Mail className="h-4 w-4" />}
      subtitle="Email & Message Support"
      title="Never Miss an Important Message Again"
      description="We organize your inbox, filter spam, categorize messages, and draft professional responses — so you can focus on what matters."
      problemStatement="Your inbox is a warzone. Important client emails are buried under newsletters, spam, and internal threads. You spend the first hour of every day just sorting through messages."
    />
    <BeforeAfterSection
      scenario="A freelance consultant receives 80+ emails daily — client inquiries, spam, newsletters, support requests, and billing notices. They're spending 2+ hours a day just managing their inbox."
      beforeItems={[
        "All messages in one unsorted inbox",
        "Spam mixed with important emails",
        "No categorization or priority system",
        "Delayed responses to client inquiries",
        "Important emails buried and forgotten",
      ]}
      afterItems={[
        "Messages categorized by type",
        "Spam automatically filtered out",
        "Priority labels for urgent items",
        "Professional responses drafted",
        "Zero missed client communications",
      ]}
      beforeContent={<EmailBefore />}
      afterContent={<EmailAfter />}
    />
    <ProcessSection
      steps={[
        { number: 1, title: "Inbox Audit", description: "We analyze your email patterns, volume, and categorize message types." },
        { number: 2, title: "Filter & Organize", description: "Spam is filtered, messages are categorized, and priorities are set." },
        { number: 3, title: "Draft Responses", description: "Professional responses are drafted for common inquiry types." },
        { number: 4, title: "Ongoing Management", description: "Daily inbox management keeps everything organized and responsive." },
      ]}
    />
    <BenefitsSection
      benefits={[
        { icon: <Inbox className="h-6 w-6" />, title: "Zero Inbox", description: "Achieve and maintain inbox zero with systematic email management." },
        { icon: <Clock className="h-6 w-6" />, title: "2-Hour Daily Savings", description: "Reclaim the time you spend sorting, filtering, and responding." },
        { icon: <Users className="h-6 w-6" />, title: "Better Client Relations", description: "Faster, more professional responses improve client satisfaction." },
      ]}
    />
    <CTASection />
  </>
);

export default EmailSupport;
