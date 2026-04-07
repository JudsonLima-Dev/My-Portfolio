import { Database, Clock, Shield, TrendingUp, CheckCircle, Zap } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import ServiceHero from "@/components/landing/ServiceHero";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import ProcessSection from "@/components/landing/ProcessSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CTASection from "@/components/landing/CTASection";
import { SpreadsheetBefore, SpreadsheetAfter } from "@/components/landing/SpreadsheetDemo";

const DataEntry = () => (
  <>
    <Navbar />
    <ServiceHero
      icon={<Database className="h-4 w-4" />}
      subtitle="Data Entry & Organization"
      title="From Chaos to Crystal-Clear Data"
      description="We transform messy, inconsistent data into structured, reliable databases that power your business decisions."
      problemStatement="You're spending hours cleaning spreadsheets — fixing typos, removing duplicates, standardizing formats. Every mistake costs time and money. Your data should work for you, not against you."
    />
    <BeforeAfterSection
      scenario="A growing e-commerce company has a customer database with 2,000+ entries collected from multiple sources — manual forms, CSV imports, and copy-pasted lists. The data is riddled with inconsistencies."
      beforeItems={[
        "Inconsistent name capitalization",
        "Missing and incomplete email addresses",
        "Duplicate entries (John Doe appears twice)",
        "Mixed date formats across rows",
        "Empty fields with no validation",
      ]}
      afterItems={[
        "Standardized formatting across all fields",
        "Duplicates identified and merged",
        "Missing data flagged and resolved",
        "Consistent date format (YYYY-MM-DD)",
        "Professional tier classification applied",
      ]}
      beforeContent={<SpreadsheetBefore />}
      afterContent={<SpreadsheetAfter />}
    />
    <ProcessSection
      steps={[
        { number: 1, title: "Data Audit", description: "We analyze your existing data to identify inconsistencies, gaps, and duplicates." },
        { number: 2, title: "Cleaning & Standardization", description: "We fix formatting, remove duplicates, and standardize all entries." },
        { number: 3, title: "Validation", description: "Every record is validated for completeness and accuracy." },
        { number: 4, title: "Delivery", description: "Clean, organized data delivered in your preferred format." },
      ]}
    />
    <BenefitsSection
      benefits={[
        { icon: <Clock className="h-6 w-6" />, title: "Save 10+ Hours/Week", description: "Stop manually cleaning data. We handle the tedious work so you can focus on growth." },
        { icon: <Shield className="h-6 w-6" />, title: "99.9% Accuracy", description: "Multi-step validation ensures your data is reliable and error-free." },
        { icon: <TrendingUp className="h-6 w-6" />, title: "Better Decisions", description: "Clean data leads to accurate analytics and smarter business decisions." },
      ]}
    />
    <CTASection />
  </>
);

export default DataEntry;
