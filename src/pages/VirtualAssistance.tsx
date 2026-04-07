import { ListChecks, Calendar, CheckCircle, TrendingUp, Zap, Target } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import ServiceHero from "@/components/landing/ServiceHero";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import ProcessSection from "@/components/landing/ProcessSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CTASection from "@/components/landing/CTASection";
import { TaskBefore, TaskAfter } from "@/components/landing/TaskDemo";

const VirtualAssistance = () => (
  <>
    <Navbar />
    <ServiceHero
      icon={<ListChecks className="h-4 w-4" />}
      subtitle="General Virtual Assistance"
      title="Your Operations, Professionally Managed"
      description="From task management to scheduling, we handle the operational details so you can focus on strategy and growth."
      problemStatement="You're wearing too many hats. Tasks pile up in random lists, priorities are unclear, and important items slip through the cracks. You need an operational system — not just another to-do app."
    />
    <BeforeAfterSection
      scenario="A small business owner manages everything in a plain text file — client calls, team tasks, personal errands, and project deadlines all mixed together. Nothing has priorities, deadlines, or status tracking."
      beforeItems={[
        "Unstructured plain text task list",
        "No priority or status indicators",
        "Personal and business tasks mixed",
        "No categories or assignments",
        "Items easily forgotten or missed",
      ]}
      afterItems={[
        "Organized by priority (High/Medium/Low)",
        "Clear status tracking (Done/In Progress/To Do)",
        "Categorized by department or type",
        "Actionable, specific task descriptions",
        "Nothing falls through the cracks",
      ]}
      beforeContent={<TaskBefore />}
      afterContent={<TaskAfter />}
    />
    <ProcessSection
      steps={[
        { number: 1, title: "Task Inventory", description: "We collect and catalog all your tasks, commitments, and recurring items." },
        { number: 2, title: "Prioritize & Categorize", description: "Tasks are organized by priority, category, and deadline." },
        { number: 3, title: "System Setup", description: "We create a sustainable management system tailored to your workflow." },
        { number: 4, title: "Ongoing Support", description: "Daily task management, updates, and proactive follow-ups." },
      ]}
    />
    <BenefitsSection
      benefits={[
        { icon: <CheckCircle className="h-6 w-6" />, title: "100% Task Completion", description: "Every task is tracked, followed up, and completed on schedule." },
        { icon: <TrendingUp className="h-6 w-6" />, title: "Boost Productivity", description: "Clear priorities and systems eliminate decision fatigue." },
        { icon: <Target className="h-6 w-6" />, title: "Focus on Growth", description: "Delegate operational tasks and focus on strategic decisions." },
      ]}
    />
    <CTASection />
  </>
);

export default VirtualAssistance;
