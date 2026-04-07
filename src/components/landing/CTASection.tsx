import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
}

const CTASection = ({
  title = "Ready to Transform Your Workflow?",
  description = "Let's discuss how our professional virtual assistance can save you time and boost your productivity.",
}: CTASectionProps) => (
  <section className="py-20 px-6 gradient-hero text-primary-foreground">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg opacity-90 mb-8">{description}</p>
      <Button size="lg" className="gradient-cta text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-xl hover:opacity-90 transition-opacity">
        Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  </section>
);

export default CTASection;
